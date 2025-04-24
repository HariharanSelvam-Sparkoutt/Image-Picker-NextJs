"use client";

import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
import placeholderImage from "../../assets/images/placeholderImage.jpg";

export default function ImagePicker() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        setSelectedImage(reader.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  return (
    <div className="relative max-w-md mx-auto flex flex-col items-center justify-center h-screen">
      {/* Image container */}
      <div className="relative w-3/4 h-64 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
        {selectedImage ? (
          <Image
            src={selectedImage}
            alt="Selected"
            fill
            className="object-contain"
          />
        ) : (
          <Image
            src={placeholderImage}
            alt="Select an image"
            width={200}
            height={200}
            className="object-contain opacity-50"
          />
        )}
      </div>

      {/* Action buttons */}
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {selectedImage ? "Change Image" : "Select Image"}
        </button>

        {selectedImage && (
          <button
            type="button"
            onClick={handleRemoveImage}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Remove
          </button>
        )}
      </div>

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
}
