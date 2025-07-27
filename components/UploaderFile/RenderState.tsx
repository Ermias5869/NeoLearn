import { cn } from "@/lib/utils";
import { CloudUploadIcon, ImageIcon } from "lucide-react";
import { Button } from "../ui/button";

export function RenderEmptyState({ isDragActive }: { isDragActive: boolean }) {
  return (
    <div className="text-center">
      <div className="flex items-center mx-auto justify-center size-12 rounded-full bg-muted mb-4">
        <CloudUploadIcon
          className={cn(
            "size-6 text-muted-foreground",
            isDragActive && "text-primary"
          )}
        />
      </div>
      <p>Drop or click to upload</p>
    </div>
  );
}
export function RenderErrorState() {
  return (
    <div className="text-center">
      <div className="text-destructive text-center">
        <div className="flex items-center mx-auto justify-center size-12 rounded-full bg-red-400 mb-4">
          <ImageIcon className={cn("size-6 text-red-500")} />
        </div>
      </div>
      <p className="mb-2">Upload Fail</p>
      <Button type="button">Retry File Selection</Button>
    </div>
  );
}
