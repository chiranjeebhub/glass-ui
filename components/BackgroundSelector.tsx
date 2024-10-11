"use client";

import { useState } from "react";
import { Paintbrush } from "lucide-react";
import {
  GlassButton,
  GlassSheet,
  GlassSheetContent,
  GlassSheetHeader,
  GlassSheetTitle,
  GlassSheetTrigger,
  GlassTabs,
  GlassTabsContent,
  GlassTabsList,
  GlassTabsTrigger,
} from "@/components/ui";

// const gradients = [
//   "bg-gradient-to-r from-rose-400 to-orange-300",
//   "bg-gradient-to-r from-blue-400 to-emerald-400",
//   "bg-gradient-to-r from-indigo-300 to-purple-400",
//   "bg-gradient-to-r from-yellow-200 to-yellow-500",
//   "bg-gradient-to-r from-[#ff80b5] to-[#9089fc]",
// ];
const gradients = [
  "bg-gradient-to-r from-rose-400 to-orange-300 dark:from-rose-800 dark:to-orange-700",
  "bg-gradient-to-r from-blue-400 to-emerald-400 dark:from-blue-800 dark:to-emerald-800",
  "bg-gradient-to-r from-indigo-300 to-purple-400 dark:from-indigo-800 dark:to-purple-800",
  "bg-gradient-to-r from-yellow-200 to-yellow-500 dark:from-yellow-600 dark:to-yellow-900",
  "bg-gradient-to-r from-[#ff80b5] to-[#9089fc] dark:from-[#8b284a] dark:to-[#3839a7]",
];

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1511300636408-a63a89df3482",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
  "https://images.unsplash.com/photo-1506260408121-e353d10b87c7",
];

interface BackgroundSelectorProps {
  setBackground: (bg: string) => void;
}

export function BackgroundSelector({ setBackground }: BackgroundSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <GlassSheet open={isOpen} onOpenChange={setIsOpen}>
      <GlassSheetTrigger asChild>
        <GlassButton variant="ghost" size="icon" className="rounded-full">
          <Paintbrush className="h-4 w-4" />
          <span className="sr-only">Change background</span>
        </GlassButton>
      </GlassSheetTrigger>
      <GlassSheetContent>
        <GlassSheetHeader>
          <GlassSheetTitle>Choose a background</GlassSheetTitle>
        </GlassSheetHeader>
        <GlassTabs defaultValue="gradients" className="mt-4">
          <GlassTabsList className="grid w-full grid-cols-2">
            <GlassTabsTrigger value="gradients">Gradients</GlassTabsTrigger>
            <GlassTabsTrigger value="images">Images</GlassTabsTrigger>
          </GlassTabsList>
          <GlassTabsContent value="gradients" className="mt-4 grid gap-2">
            {gradients.map((gradient, index) => (
              <GlassButton
                key={index}
                variant="outline"
                className={`h-20 w-full ${gradient}`}
                onClick={() => {
                  setBackground(gradient);
                  setIsOpen(false);
                }}
              />
            ))}
          </GlassTabsContent>
          <GlassTabsContent value="images" className="mt-4 grid gap-2">
            {images.map((image, index) => (
              <GlassButton
                key={index}
                variant="outline"
                className="h-20 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
                onClick={() => {
                  setBackground(image);
                  setIsOpen(false);
                }}
              />
            ))}
          </GlassTabsContent>
        </GlassTabs>
      </GlassSheetContent>
    </GlassSheet>
  );
}
