import { GlassDropdown } from "@/components/ui/GlassDropdown";
import { GlassCard } from "@/components/ui/GlassCard";

export default function DropdownPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Dropdown</h1>
      <GlassCard>
        <h2 className="text-xl font-semibold mb-2 text-white">Usage</h2>
        <pre className="bg-black/50 p-4 rounded-md text-white">
          {`import { GlassDropdown } from '@/components/ui/GlassDropdown'

export default function MyComponent() {
  const options = ['Option 1', 'Option 2', 'Option 3']
  return <GlassDropdown options={options} onSelect={(option) => console.log(option)} />
}`}
        </pre>
      </GlassCard>
      <GlassCard>
        <h2 className="text-xl font-semibold mb-2 text-white">Examples</h2>
        <div className="space-y-4">
          <GlassDropdown
            options={["Red", "Green", "Blue"]}
            onSelect={(option) => console.log(option)}
            placeholder="Select a color"
          />
          <GlassDropdown
            options={["Small", "Medium", "Large"]}
            onSelect={(option) => console.log(option)}
            placeholder="Select a size"
            disabled
          />
        </div>
      </GlassCard>
    </div>
  );
}
