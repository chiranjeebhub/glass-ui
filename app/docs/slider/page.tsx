"use client";

import { useState } from "react";
import { GlassSlider } from "@/components/ui/GlassSlider";
import { GlassCard } from "@/components/ui/GlassCard";

export default function SliderPage() {
  const [value, setValue] = useState<number[]>([50]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Slider</h1>
      <GlassCard>
        <h2 className="text-xl font-semibold mb-2 text-white">Usage</h2>
        <pre className="bg-black/50 p-4 rounded-md text-white">
          {`import { useState } from 'react'
import { GlassSlider } from '@/components/ui/GlassSlider'

export default function MyComponent() {
  const [value, setValue] = useState<number[]>([50])

  return (
    <GlassSlider
      defaultValue={[50]}
      max={100}
      step={1}
      onValueChange={setValue}
    />
  )
}`}
        </pre>
      </GlassCard>
      <GlassCard>
        <h2 className="text-xl font-semibold mb-2 text-white">Examples</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2 text-white">
              Default Slider
            </h3>
            <GlassSlider
              defaultValue={[50]}
              max={100}
              step={1}
              onValueChange={setValue}
              className="w-[300px]"
            />
            <p className="mt-2 text-sm text-white">Current value: {value[0]}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2 text-white">
              Range Slider
            </h3>
            <GlassSlider
              defaultValue={[25, 75]}
              max={100}
              step={1}
              onValueChange={(v) => console.log(v)}
              className="w-[300px]"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2 text-white">
              Disabled Slider
            </h3>
            <GlassSlider
              defaultValue={[50]}
              max={100}
              step={1}
              disabled
              className="w-[300px]"
            />
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
