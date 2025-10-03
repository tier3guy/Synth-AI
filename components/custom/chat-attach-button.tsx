"use client";

import React, { useRef } from "react";
import { Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatAttachButtonProps {
  onAttach?: (file: File) => void;
}

export default function ChatAttachButton({ onAttach }: ChatAttachButtonProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && onAttach) {
      onAttach(file);
    }
    // Clear the input value so the same file can be selected again if needed
    event.target.value = "";
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={handleClick}
        className="border rounded-full cursor-pointer"
      >
        <Paperclip className="w-4 h-4" />
        <span className="sr-only">Attach file</span>
      </Button>
    </>
  );
}
