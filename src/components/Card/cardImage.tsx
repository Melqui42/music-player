import { ImgHTMLAttributes } from 'react'

import * as C from './styled'

type CardImageProps = ImgHTMLAttributes<HTMLImageElement>

const CardImage: React.FC<CardImageProps> = ({ ...rest }) => {
  return <C.Image {...rest} />
}

export default CardImage
