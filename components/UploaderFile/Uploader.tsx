"use client";
import React, { useCallback, useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import { RenderEmptyState } from "./RenderState";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
interface UploadState {
  id: String | null;
  file: File | null;
  uploading: boolean;
  progress: number;
  key?: string;
  isDeleting: boolean;
  error: Boolean;
  objecturl?: string;
  fileType: "image" | "video";
}
export default function Uploader() {
  const [file, setFile] = useState<UploadState>({
    id: null,
    file: null,
    uploading: false,
    progress: 0,
    isDeleting: false,
    error: false,
    fileType: "image",
  });
  function uploadFile(FILE: File) {
    setFile((pre) => ({ ...pre, uploading: true, progress: 0 }));

    try {
    } catch {}
  }
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];

      setFile({
        file: file,
        uploading: false,
        progress: 0,
        objecturl: URL.createObjectURL(file),
        error: false,
        id: uuidv4(),
        fileType: "image",
        isDeleting: false,
      });
    }
  }, []);

  function rejectedFiles(fileRejection: FileRejection[]) {
    if (fileRejection) {
      const tooManyFiles = fileRejection.find(
        (rej) => rej.errors[0].code === "too-many-files"
      );

      const fileSizeToBig = fileRejection.find(
        (rej) => rej.errors[0].code === "file-too-large"
      );

      if (tooManyFiles) {
        toast.error("Many files selected");
      }
    }
  }
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 1,
    multiple: false,
    maxSize: 5 * 1024 * 1024,
    onDropRejected: rejectedFiles,
  });
  return (
    <Card
      className={cn(
        "relative border-2 border-dashed transition-colors duration-200 ease-in-out w-full h-64",
        isDragActive
          ? "border-primary bg-primary/10 border-solid"
          : "border-border hover:hover-primary"
      )}
      {...getRootProps()}
    >
      <CardContent className="flex items-center justify-center h-full w-full">
        <input {...getInputProps()} />
        <RenderEmptyState isDragActive={isDragActive} />
      </CardContent>
    </Card>
  );
}
