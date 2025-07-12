import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="outline">Unlock Knowledge. Not Your Wallet.</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Affordable Learning for Everyone
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Unlock affordable, high-quality learning with Leo Learn — a modern,
            interactive platform designed to help you grow. Access expert-led
            courses anytime, anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/courses"
              className={buttonVariants({
                size: "lg",
                variant: "outline",
              })}
            >
              Expore Courses
            </Link>
            <Link
              href="/login"
              className={buttonVariants({
                size: "lg",
                variant: "outline",
              })}
            >
              signIn
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
