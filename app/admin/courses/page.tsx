import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your Courses</h1>
        <Link className={buttonVariants()} href="admin/courses/create">
          {" "}
          Create Courses
        </Link>
      </div>
      <div>Course soon..</div>
    </>
  );
}
