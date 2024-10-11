"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { GlassCard, GlassButton } from "@/components/ui";

const components = [
  { name: "Getting Started", path: "/docs" },
  { name: "Button", path: "/docs/button" },
  { name: "Card", path: "/docs/card" },
  { name: "Checkbox", path: "/docs/checkbox" },
  { name: "Input", path: "/docs/input" },
  { name: "RadioGroup", path: "/docs/radio-group" },
  { name: "Select", path: "/docs/select" },
  { name: "Sheet", path: "/docs/sheet" },
  { name: "Slider", path: "/docs/slider" },
  { name: "Switch", path: "/docs/switch" },
  { name: "Tabs", path: "/docs/tabs" },
  { name: "Textarea", path: "/docs/textarea" },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen ">
      <GlassCard className="w-64 p-6 m-4 fixed top-16 left-10">
        <nav>
          <ul className="space-y-2">
            {components.map((component) => (
              <li key={component.path}>
                <Link href={component.path} passHref>
                  <GlassButton
                    variant={pathname === component.path ? "default" : "ghost"}
                    className="w-full justify-start"
                  >
                    {component.name}
                  </GlassButton>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </GlassCard>
      <main className="flex-1 p-4 ml-80">
        <GlassCard className="">{children}</GlassCard>
      </main>
    </div>
  );
}
