"use client"
import { usePathname, useRouter } from "next/navigation";

export const Breadcrum = () => {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => {
    router.push('/')
  }

  if (pathname === '/') return
  return (
    <div className="w-full h-breadcrum flex items-center justify-center">
      <div className="h-fit w-full max-w-screen-xl ">
        <p className="hover:cursor-pointer" onClick={handleClick}>
          Back to ....
        </p>
      </div>
    </div>
  )
}