"use client";

import { useState } from "react";
import {
  GlassSelect,
  GlassSelectTrigger,
  GlassSelectValue,
  GlassSelectContent,
  GlassSelectItem,
} from "@/components/ui/GlassSelect";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassLabel } from "@/components/ui/GlassLabel";

export default function SelectPage() {
  const [value, setValue] = useState("");

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Select</h1>
      <GlassCard>
        <h2 className="text-xl font-semibold mb-2 text-white">Usage</h2>
        <pre className="bg-black/50 p-4 rounded-md text-white">
          {`import {
  GlassSelect,
  GlassSelectTrigger,
  GlassSelectValue,
  GlassSelectContent,
  GlassSelectItem
} from '@/components/ui/GlassSelect'

export default function MyComponent() {
  return (
    <GlassSelect>
      <GlassSelectTrigger className="w-[180px]">
        <GlassSelectValue placeholder="Select a fruit" />
      </GlassSelectTrigger>
      <GlassSelectContent>
        <GlassSelectItem value="apple">Apple</GlassSelectItem>
        <GlassSelectItem value="banana">Banana</GlassSelectItem>
        <GlassSelectItem value="orange">Orange</GlassSelectItem>
      </GlassSelectContent>
    </GlassSelect>
  )
}`}
        </pre>
      </GlassCard>
      <GlassCard>
        <h2 className="text-xl font-semibold mb-2 text-white">Examples</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2 text-white">
              Default Select
            </h3>
            <GlassSelect>
              <GlassSelectTrigger className="w-[180px]">
                <GlassSelectValue placeholder="Select a fruit" />
              </GlassSelectTrigger>
              <GlassSelectContent>
                <GlassSelectItem value="apple">Apple</GlassSelectItem>
                <GlassSelectItem value="banana">Banana</GlassSelectItem>
                <GlassSelectItem value="orange">Orange</GlassSelectItem>
              </GlassSelectContent>
            </GlassSelect>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2 text-white">
              Select with Label
            </h3>
            <GlassLabel htmlFor="fruit-select" className="mb-2 block">
              Favorite Fruit
            </GlassLabel>
            <GlassSelect>
              <GlassSelectTrigger className="w-[180px]" id="fruit-select">
                <GlassSelectValue placeholder="Select a fruit" />
              </GlassSelectTrigger>
              <GlassSelectContent>
                <GlassSelectItem value="apple">Apple</GlassSelectItem>
                <GlassSelectItem value="banana">Banana</GlassSelectItem>
                <GlassSelectItem value="orange">Orange</GlassSelectItem>
              </GlassSelectContent>
            </GlassSelect>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2 text-white">
              Controlled Select
            </h3>
            <GlassSelect value={value} onValueChange={setValue}>
              <GlassSelectTrigger className="w-[180px]">
                <GlassSelectValue placeholder="Select a color" />
              </GlassSelectTrigger>
              <GlassSelectContent>
                <GlassSelectItem value="red">Red</GlassSelectItem>
                <GlassSelectItem value="green">Green</GlassSelectItem>
                <GlassSelectItem value="blue">Blue</GlassSelectItem>
              </GlassSelectContent>
            </GlassSelect>
            <p className="mt-2 text-sm text-white">Selected value: {value}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2 text-white">
              Disabled Select
            </h3>
            <GlassSelect disabled>
              <GlassSelectTrigger className="w-[180px]">
                <GlassSelectValue placeholder="Select an option" />
              </GlassSelectTrigger>
              <GlassSelectContent>
                <GlassSelectItem value="option1">Option 1</GlassSelectItem>
                <GlassSelectItem value="option2">Option 2</GlassSelectItem>
              </GlassSelectContent>
            </GlassSelect>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
