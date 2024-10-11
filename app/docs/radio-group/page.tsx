"use client";

import { useState } from "react";
import {
  GlassRadioGroup,
  GlassRadioGroupItem,
} from "@/components/ui/GlassRadioGroup";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassLabel } from "@/components/ui/GlassLabel";

export default function RadioGroupPage() {
  const [value, setValue] = useState("option1");

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Radio Group</h1>
      <GlassCard>
        <h2 className="text-xl font-semibold mb-2 text-white">Usage</h2>
        <pre className="bg-black/50 p-4 rounded-md text-white">
          {`import { GlassRadioGroup, GlassRadioGroupItem } from '@/components/ui/GlassRadioGroup'

export default function MyComponent() {
  return (
    <GlassRadioGroup defaultValue="option1">
      <div className="flex items-center space-x-2">
        <GlassRadioGroupItem value="option1" id="option1" />
        <GlassLabel htmlFor="option1">Option 1</GlassLabel>
      </div>
      <div className="flex items-center space-x-2">
        <GlassRadioGroupItem value="option2" id="option2" />
        <GlassLabel htmlFor="option2">Option 2</GlassLabel>
      </div>
      <div className="flex items-center space-x-2">
        <GlassRadioGroupItem value="option3" id="option3" />
        <GlassLabel htmlFor="option3">Option 3</GlassLabel>
      </div>
    </GlassRadioGroup>
  )
}`}
        </pre>
      </GlassCard>
      <GlassCard>
        <h2 className="text-xl font-semibold mb-2 text-white">Examples</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2 text-white">
              Default Radio Group
            </h3>
            <GlassRadioGroup defaultValue="option1">
              <div className="flex items-center space-x-2">
                <GlassRadioGroupItem value="option1" id="r1-option1" />
                <GlassLabel htmlFor="r1-option1">Option 1</GlassLabel>
              </div>
              <div className="flex items-center space-x-2">
                <GlassRadioGroupItem value="option2" id="r1-option2" />
                <GlassLabel htmlFor="r1-option2">Option 2</GlassLabel>
              </div>
              <div className="flex items-center space-x-2">
                <GlassRadioGroupItem value="option3" id="r1-option3" />
                <GlassLabel htmlFor="r1-option3">Option 3</GlassLabel>
              </div>
            </GlassRadioGroup>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2 text-white">
              Radio Group with Label
            </h3>
            <GlassLabel className="mb-2 block">
              Select your favorite color
            </GlassLabel>
            <GlassRadioGroup defaultValue="red">
              <div className="flex items-center space-x-2">
                <GlassRadioGroupItem value="red" id="color-red" />
                <GlassLabel htmlFor="color-red">Red</GlassLabel>
              </div>
              <div className="flex items-center space-x-2">
                <GlassRadioGroupItem value="green" id="color-green" />
                <GlassLabel htmlFor="color-green">Green</GlassLabel>
              </div>
              <div className="flex items-center space-x-2">
                <GlassRadioGroupItem value="blue" id="color-blue" />
                <GlassLabel htmlFor="color-blue">Blue</GlassLabel>
              </div>
            </GlassRadioGroup>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2 text-white">
              Controlled Radio Group
            </h3>
            <GlassRadioGroup value={value} onValueChange={setValue}>
              <div className="flex items-center space-x-2">
                <GlassRadioGroupItem value="option1" id="c-option1" />
                <GlassLabel htmlFor="c-option1">Option 1</GlassLabel>
              </div>
              <div className="flex items-center space-x-2">
                <GlassRadioGroupItem value="option2" id="c-option2" />
                <GlassLabel htmlFor="c-option2">Option 2</GlassLabel>
              </div>
              <div className="flex items-center space-x-2">
                <GlassRadioGroupItem value="option3" id="c-option3" />
                <GlassLabel htmlFor="c-option3">Option 3</GlassLabel>
              </div>
            </GlassRadioGroup>
            <p className="mt-2 text-sm text-white">Selected value: {value}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2 text-white">
              Disabled Radio Group
            </h3>
            <GlassRadioGroup disabled defaultValue="option1">
              <div className="flex items-center space-x-2">
                <GlassRadioGroupItem value="option1" id="d-option1" />
                <GlassLabel htmlFor="d-option1">Option 1</GlassLabel>
              </div>
              <div className="flex items-center space-x-2">
                <GlassRadioGroupItem value="option2" id="d-option2" />
                <GlassLabel htmlFor="d-option2">Option 2</GlassLabel>
              </div>
            </GlassRadioGroup>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
