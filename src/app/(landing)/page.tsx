import dynamic from "next/dynamic"
import CallToAction from "./_components/call-to-action"
import Dashboard from "./_components/dashboard"

const PricingSection = dynamic(
  () =>
    import("./_components/pricing").then(
      (component) => component.Pricing,
    ),
  { ssr: true },
)

export default function Home() {
  return (
    <main className="md:px-10 py-20 flex flex-col gap-36">
      <div>
        <CallToAction />
        <Dashboard />
      </div>
      <PricingSection />
    </main>
  )
}