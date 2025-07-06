"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { authClient } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";

export default function page() {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [isPending, startTransition] = useTransition();
  const params = useSearchParams();
  const email = params.get("email") as string;
  function verifyEmail() {
    startTransition(async () => {
      await authClient.signIn.emailOtp({
        email: email || "",
        otp: otp,
        fetchOptions: {
          onSuccess: () => {
            toast.success("Email verified!");
            router.push("/");
          },
          onError: (error) => {
            toast.error("Failed to verify email");
          },
        },
      });
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Verify your email</CardTitle>
        <CardDescription>
          Please enter the verification code sent to your email.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-2">
          <InputOTP
            maxLength={6}
            className="gap-2"
            value={otp}
            onChange={(value) => setOtp(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter the 6-digit code sent to your email
          </p>
        </div>
      </CardContent>
      <Button onClick={verifyEmail} disabled={isPending} className="w-full">
        {isPending ? <Loader2 className="size-4" /> : "Verify"}
      </Button>
    </Card>
  );
}
