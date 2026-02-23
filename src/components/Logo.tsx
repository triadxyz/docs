/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

export const Logo = () => {
  return (
    <span className="flex items-center">
      <Image
        width={140}
        height={28}
        src="/svg/logo-dark.webp"
        alt="Triadmarkets"
      />
    </span>
  )
}
