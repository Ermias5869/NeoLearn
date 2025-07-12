import { ReactNode } from "react";
import NavBar from "./_components/NavBar";

interface LayoutPublicProps {
  children: ReactNode;
}

export default function LayoutPublic({ children }: LayoutPublicProps) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
}
