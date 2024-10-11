"use client";

import React from "react";
import Link from "next/link";
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

export default function DocsPage() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-4xl font-bold text-white mb-4">
        Glassmorphic UI Documentation
      </h1>

      <GlassCard className="p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Welcome to Glassmorphic UI
        </h2>
        <p className="mb-4">
          Glassmorphic UI is a modern, sleek component library for React
          applications. It provides a set of customizable components with a
          distinctive glass-like appearance, perfect for creating stunning user
          interfaces.
        </p>
        <h3 className="text-xl font-semibold mb-2">Getting Started</h3>
        <p className="mb-4">
          To use Glassmorphic UI in your project, install it via npm:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md mb-4">
          npm install glassmorphic-ui
        </pre>
        <p className="mb-4">
          Then, import and use the components in your React application:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md mb-4">
          {`import { GlassButton, GlassCard } from 'glassmorphic-ui'

function MyComponent() {
  return (
    <GlassCard>
      <h1>Welcome to My App</h1>
      <GlassButton>Click me</GlassButton>
    </GlassCard>
  )
}`}
        </pre>
      </GlassCard>

      <GlassCard className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Components</h2>
        <p className="mb-4">
          Explore our components to see what Glassmorphic UI has to offer:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {components.map((component) => (
            <Link key={component.path} href={component.path} passHref>
              <GlassButton className="w-full justify-center">
                {component.name}
              </GlassButton>
            </Link>
          ))}
        </div>
      </GlassCard>

      <GlassCard className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Customization</h2>
        <p className="mb-4">
          Glassmorphic UI components are highly customizable. You can adjust
          colors, sizes, and other properties to match your design needs. Refer
          to individual component documentation for specific customization
          options.
        </p>
      </GlassCard>

      <GlassCard className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
        <p className="mb-4">
          If you have any questions or need assistance, feel free to reach out:
        </p>
        <div className="flex space-x-4">
          <Link
            href="https://github.com/your-repo/glassmorphic-ui/issues"
            passHref
          >
            <GlassButton variant="outline">GitHub Issues</GlassButton>
          </Link>
          <Link href="https://discord.gg/your-discord" passHref>
            <GlassButton variant="outline">Discord Community</GlassButton>
          </Link>
        </div>
      </GlassCard>
    </div>
  );
}
