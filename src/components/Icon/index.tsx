import { FC } from 'react'
import Image, { ImageProps } from 'next/image'

export const Icon: FC<ImageProps> = (props) => {
  return <Image width="36px" height="36px" {...props} />
}
