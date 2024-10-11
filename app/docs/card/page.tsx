import { GlassCard } from "@/components/ui/GlassCard";

export default function CardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Card</h1>
      <GlassCard>
        <h2 className="text-xl font-semibold mb-2 text-white">Usage</h2>
        <pre className="bg-black/50 p-4 rounded-md text-white">
          {`import { GlassCard } from '@/components/ui/GlassCard'

export default function MyComponent() {
  return (
    <GlassCard>
      <h2>Card Title</h2>
      <p>Card content goes here.</p>
    </GlassCard>
  )
}`}
        </pre>
      </GlassCard>
      <GlassCard>
        <h2 className="text-xl font-semibold mb-2 text-white">Examples</h2>
        <div className="space-y-4">
          <GlassCard>
            <h3 className="text-lg font-semibold text-white">Default Card</h3>
            <p className="text-white/80">This is a default glass card.</p>
          </GlassCard>
          <GlassCard className="bg-blue-500/20">
            <h3 className="text-lg font-semibold text-white">Colored Card</h3>
            <p className="text-white/80">
              This card has a custom background color.
            </p>
          </GlassCard>
        </div>
      </GlassCard>
    </div>
  );
}
