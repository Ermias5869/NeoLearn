"use client";

import { z } from "zod";

export const courseLevels = ["Beginner", "Intermediate", "Advanced"] as const;
export const courseStatus = ["Draft", "Published", "Archived"] as const;

export const CourseSchema = z.object({
  title: z
    .string()
    .min(4, { message: "Title must be at least 4 characters long" })
    .max(100, { message: "Title must not exceed 100 characters" }),

  description: z
    .string()
    .min(4, { message: "Description must be at least 4 characters long" }),

  fileKey: z.string().min(1, { message: "File is required" }),

  price: z.coerce.number().min(1, { message: "Price must be Posetive Number" }),

  duration: z.coerce
    .number()
    .min(1, { message: "Duration must be at least 1 hour" })
    .max(500, { message: "Duration must not exceed 500 hours" }),

  catagory: z.string().min(1, { message: "File is required" }),

  level: z.enum(courseLevels, {
    errorMap: () => ({
      message: "Level must be one of: Beginner, Intermediate, Advanced",
    }),
  }),

  smallDescription: z
    .string()
    .min(4, { message: "Short description must be at least 4 characters long" })
    .max(200, { message: "Short description must not exceed 200 characters" }),

  slug: z
    .string()
    .min(4, { message: "Slug must be at least 4 characters long" })
    .max(200, { message: "Slug must not exceed 200 characters" }),

  status: z.enum(courseStatus, {
    errorMap: () => ({
      message: "Status must be Draft, Published, or Archived",
    }),
  }),
});
export type CourseSchemaType = z.infer<typeof CourseSchema>;
