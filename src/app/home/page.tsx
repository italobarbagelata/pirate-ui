"use client";
import { Button } from "@/components/ui/button";
import { Click } from "@/icons/Click";
import React, { useState } from "react";
import { useSelector } from "react-redux";

interface FileUploadProps {
  userName: string;
  onFileUpload: (file: File) => void;
}

const FileUpload = ({ userName, onFileUpload }: FileUploadProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const isSidebarVisible = useSelector(
    (state: any) => state.sidebar.isSidebarVisible
  );
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleUploadClick = () => {
    if (selectedFile) {
      onFileUpload(selectedFile);
    }
  };

  return (
    <div
      className={`${
        isSidebarVisible ? "ml-16 w-auto" : ""
      } transition-all duration-300`}
    >
      <div className="flex flex-col items-center justify-center h-[90vh] gap-8 bg-Surface-Light">
        <div className="relative inline-flex items-center justify-center p-4">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gradient-start via-blue-500 to-gradient-end animate-spin-slow"></div>
          <div className="relative z-10 flex items-center justify-center w-32 h-32 bg-Surface-Light rounded-full">
            <Click className="w-18 h-18 text-Text-Default" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center text-Text-Default">
          Sube el archivo que deseas cargar
        </h1>

        <div className="mb-4">
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full text-sm text-Text-Link file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-Surface-ButtonPrimary file:text-Text-ButtonPrimary hover:file:bg-Surface-ButtonPrimaryHover file:cursor-pointer cursor-pointer"
          />
        </div>
        <Button onClick={handleUploadClick} disabled={!selectedFile} gradientBorder variant={"secondary"}>
          Subir archivo
        </Button>
      </div>
    </div>
  );
};

export default FileUpload;
