import { ButtonHTMLAttributes } from 'react'

import * as Bi from 'react-icons/bi'

import * as C from './styled'

type CardEditActionProps = ButtonHTMLAttributes<HTMLButtonElement>

const CardEditAction: React.FC<CardEditActionProps> = ({ ...rest }) => {
  return (
    <C.EditAction {...rest}>
      <Bi.BiDotsVertical className="icon" />
    </C.EditAction>
  )
}

export default CardEditAction
