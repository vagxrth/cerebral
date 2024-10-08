"use client"

import { Button } from "@/components/ui/button"
import { useGoogleAuth } from "@/hooks/authentication"
import { Loader } from "lucide-react"
import { useEffect, useState } from "react"

type GoogleAuthButtonProps = {
  method: "signup" | "signin"
}

export const GoogleAuthButton = ({ method }: GoogleAuthButtonProps) => {
  const { signUpWith, signInWith } = useGoogleAuth()
  const [loading, setLoading] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleClick = async () => {
    setLoading(true)

    try {
      if (method === "signin") {
        await signInWith("oauth_google")
      } else {
        await signUpWith("oauth_google")
      }
    } catch (error) {
      console.error("Authentication failed", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      {...(method === "signin"
        ? {
            onClick: () => signInWith("oauth_google"),
          }
        : {
            onClick: () => signUpWith("oauth_google"),
          })}
      className="w-full rounded-2xl flex gap-3 bg-themeBlack border-themeGray"
      variant="outline"
      disabled= {loading}
    >
      {loading ? (
        <Loader className="animate-spin" />
      ) : (
        isClient && <img src="/google.svg" alt="Google" />
      )}
      Google

    </Button>
  )
}