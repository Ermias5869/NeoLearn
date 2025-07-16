import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function page() {
  //create core
  return (
    <>
      <div>
        <Link
          className={buttonVariants({
            variant: "outline",
            size: "icon",
          })}
          href="/admin/courses/create"
        >
          <ArrowLeft className="size-4" />
        </Link>
        <h1>Create Courses</h1>
      </div>
    </>
  );
}
