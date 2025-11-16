import React, { useState, useEffect, useRef } from "react";
import { Globe, Check } from "lucide-react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: "ru", name: "Ru" },
    { code: "en", name: "En" },
    { code: "ch", name: "中文" },
  ];

  const selectedLanguage =
    languages.find((l) => l.code === i18n.language)?.name || "En";

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleLangSelect = async (lang) => {
    await i18n.changeLanguage(lang.code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center bg-gray-100 p-2 pr-3 rounded-full hover:bg-gray-200 transition"
      >
        <Globe className="mr-2" size={20} />
        {selectedLanguage}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-20">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLangSelect(lang)}
              className="flex items-center w-full p-2 hover:bg-gray-100 text-left"
            >
              {selectedLanguage === lang.name && (
                <Check className="mr-2 text-green-500" size={16} />
              )}
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
