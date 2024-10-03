import { Analytics } from "@vercel/analytics/react"
import React from "react"
import LandingPageNavbar from "./_components/navbar"

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col container relative">
      <LandingPageNavbar />
      {children}
      <Analytics />
    </div>
  )
}

export default LandingPageLayout