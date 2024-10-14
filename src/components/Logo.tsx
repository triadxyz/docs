/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

export const Logo = () => {
  return (
    <span className="flex items-center">
      <Image
        width={100}
        height={31}
        src="/svg/logo-dark.svg"
        alt="triad logo blue"
      />
    </span>
  )
}
