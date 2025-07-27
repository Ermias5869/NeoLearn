import { NextResponse } from "next/server";
import z from "zod";

export const fileSchema = z.object({
  fileName: z.string().min(1, { message: "Filename is required" }),
  conntentType: z.string().min(1, { message: "Content type is required" }),
  size: z.string().min(1, { message: "Size is required" }),
  isImage: z.boolean(),
});
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = fileSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          error: "Invalid request Body",
        },
        { status: 400 }
      );
    }
    const { fileName, conntentType, size } = validation.data;
  } catch {}
}
