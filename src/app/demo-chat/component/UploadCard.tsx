import React, { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Upload } from "lucide-react";

const FileUploadCard = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Archivo seleccionado:", file.name);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      console.log("Archivo arrastrado:", file.name);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Card
      className="flex flex-col items-center gap-4 px-4 py-8 md:w-96"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onClick={handleClick}
    >
      <Upload />
      <div className="text-Text-Default font-medium text-lg">
        click para carga un archivo
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </Card>
  );
};

export default FileUploadCard;
