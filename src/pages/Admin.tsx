import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Plus, Trash2 } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<{
    title?: string;
    description?: string;
    image_url?: string;
  }>({});

  const [newService, setNewService] = useState({
    title: "",
    description: "",
    image_url: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        navigate("/admin/login");
        return;
      }

      setUser(user);

      // Check if user is admin
      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin")
        .maybeSingle();

      if (roles) {
        setIsAdmin(true);
      } else {
        toast({
          title: "Access Denied",
          description: "You don't have admin permissions.",
          variant: "destructive",
        });
        navigate("/");
      }
    } catch (error) {
      console.error("Error checking user:", error);
    } finally {
      setLoading(false);
    }
  };

  const { data: services, isLoading: servicesLoading } = useQuery({
    queryKey: ["admin-services"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("services")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
    enabled: isAdmin,
  });

  const addServiceMutation = useMutation({
    mutationFn: async (
      service: typeof newService & { imageFile?: File | null }
    ) => {
      let imageUrl = service.image_url;

      // Upload image if file is provided
      if (service.imageFile) {
        setUploadingImage(true);
        const fileExt = service.imageFile.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("service-images")
          .upload(filePath, service.imageFile);

        if (uploadError) {
          setUploadingImage(false);
          throw uploadError;
        }

        const {
          data: { publicUrl },
        } = supabase.storage.from("service-images").getPublicUrl(filePath);

        imageUrl = publicUrl;
        setUploadingImage(false);
      }

      const { data, error } = await supabase
        .from("services")
        .insert([
          {
            title: service.title,
            description: service.description,
            image_url: imageUrl,
          },
        ])
        .select();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-services"] });
      queryClient.invalidateQueries({ queryKey: ["services"] });
      toast({
        title: "Success",
        description: "Service added successfully",
      });
      setNewService({ title: "", description: "", image_url: "" });
      setImageFile(null);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to add service",
        variant: "destructive",
      });
      console.error(error);
    },
  });

  const deleteServiceMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("services").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-services"] });
      queryClient.invalidateQueries({ queryKey: ["services"] });
      toast({
        title: "Success",
        description: "Service deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete service",
        variant: "destructive",
      });
      console.error(error);
    },
  });

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  const handleAddService = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};

    if (!newService.title.trim()) {
      newErrors.title = "Service title is required";
    }

    if (!newService.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (!imageFile) {
      newErrors.image_url = "Service image is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return; // Stop submission if errors exist
    }

    addServiceMutation.mutate({ ...newService, imageFile });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Admin Dashboard</h1>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>

          {/* Add Service Form */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Add New Service
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddService} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Service Title *</Label>
                  <Input
                    id="title"
                    value={newService.title}
                    onChange={(e) => {
                      setNewService({ ...newService, title: e.target.value });
                      setErrors({ ...errors, title: undefined });
                    }}
                    placeholder="e.g., Cold Storage Solutions"
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm">{errors.title}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    value={newService.description}
                    onChange={(e) => {
                      setNewService({
                        ...newService,
                        description: e.target.value,
                      });
                      setErrors({ ...errors, description: undefined });
                    }}
                    placeholder="Describe the service..."
                    rows={4}
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm">{errors.description}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image">Service Image *</Label>
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) setImageFile(file);
                      setErrors({ ...errors, image_url: undefined });
                    }}
                  />
                  {imageFile && (
                    <p className="text-sm text-muted-foreground">
                      Selected: {imageFile.name}
                    </p>
                  )}
                  {errors.image_url && (
                    <p className="text-red-500 text-sm">{errors.image_url}</p>
                  )}
                </div>  

                <Button
                  type="submit"
                  disabled={addServiceMutation.isPending || uploadingImage}
                  className="w-full"
                >
                  {uploadingImage
                    ? "Uploading Image..."
                    : addServiceMutation.isPending
                    ? "Adding..."
                    : "Add Service"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Services List */}
          <Card>
            <CardHeader>
              <CardTitle>Current Services</CardTitle>
            </CardHeader>
            <CardContent>
              {servicesLoading ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="w-6 h-6 animate-spin text-primary" />
                </div>
              ) : services && services.length > 0 ? (
                <div className="space-y-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className="flex items-start gap-4 p-4 border border-border rounded-lg"
                    >
                      {service.image_url && (
                        <img
                          src={service.image_url}
                          alt={service.title}
                          className="w-24 h-24 object-cover rounded"
                        />
                      )}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => deleteServiceMutation.mutate(service.id)}
                        disabled={deleteServiceMutation.isPending}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-muted-foreground py-8">
                  No services added yet. Add your first service above.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Admin;
