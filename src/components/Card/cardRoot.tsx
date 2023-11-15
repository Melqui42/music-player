import { ReactNode } from 'react'

import * as C from './styled'

interface CardRootProps {
  children: ReactNode
}

const CardRoot: React.FC<CardRootProps> = ({ children }) => {
  return <C.Root>{children}</C.Root>
}

export default CardRoot
