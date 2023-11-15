import { ButtonHTMLAttributes } from 'react'

import * as Fa from 'react-icons/fa'

import * as C from './styled'

interface CardPlayActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isPlaying: boolean
}

const CardPlayAction: React.FC<CardPlayActionProps> = ({
  isPlaying,
  ...rest
}) => {
  return (
    <C.PlayAction {...rest}>
      {!isPlaying ? (
        <Fa.FaPlay className="icon" />
      ) : (
        <Fa.FaPause className="icon" />
      )}
    </C.PlayAction>
  )
}

export default CardPlayAction
