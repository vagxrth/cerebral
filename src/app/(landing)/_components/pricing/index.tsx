import BackdropGradient from "@/components/global/backdrop-gradient"
import GradientText from "@/components/global/gradient-text"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Check } from "@/icons"
import Link from "next/link"

type Props = {}

export const Pricing = (props: Props) => {
    return (
        <div className="w-full pt-20 flex flex-col items-center gap-3" id="pricing">
            <BackdropGradient className="w-8/12 h-full opacity-40 flex flex-col items-center">
                <GradientText
                    className="text-4xl font-semibold text-center"
                    element="H2"
                >
                    Pricing Plans That Fit Your Right
                </GradientText>
                <p className="text-sm md:text-center text-left text-muted-foreground">
                    Cerebral is an advanced Learning platform that empowers people to <br className="hidden md:block" />
                    Learn, Lead, and Inspire
                </p>
            </BackdropGradient>
            <Card className="p-7 mt-10 md:w-auto w-full bg-themeBlack border-themeGray">
                <div className="flex flex-col gap-2">
                    <CardTitle>$29/month</CardTitle>
                    <CardDescription className="text-[#B4B0AE]">
                        Affordable plan with essential features for individuals
                    </CardDescription>
                    <Link href="#" className="w-full mt-3">
                        <Button
                            variant="default"
                            className="bg-[#333337] w-full rounded-2xl text-white hover:text-[#333337]"
                        >
                            Start for free
                        </Button>
                    </Link>
                </div>
                <div className="flex flex-col gap-2 text-[#B4B0AE] mt-5">
                    <p>Features</p>
                    <span className="flex gap-2 mt-3 items-center">
                        <Check />
                        What you&apos;re getting
                    </span>
                    <span className="flex gap-2 items-center">
                        <Check />
                        What you&apos;re getting
                    </span>
                    <span className="flex gap-2 items-center">
                        <Check />
                        What you&apos;re getting
                    </span>
                    <span className="flex gap-2 items-center">
                        <Check />
                        What you&apos;re getting
                    </span>
                    <span className="flex gap-2 items-center">
                        <Check />
                        What you&apos;re getting
                    </span>
                </div>
            </Card>
        </div>
    )
}