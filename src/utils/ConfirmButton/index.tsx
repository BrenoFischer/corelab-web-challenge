import { BsSend } from 'react-icons/bs'
import { IconContext } from 'react-icons'

import { ConfirmButtonContainer } from './styles'

interface ConfirmButtonProps {
  buttonDisabled: boolean
  size?: number
}

export default function ConfirmButton({
  buttonDisabled,
  size = 20,
}: ConfirmButtonProps) {
  return (
    <ConfirmButtonContainer buttonDisabled={buttonDisabled} type="submit">
      <IconContext.Provider
        value={{ color: buttonDisabled ? '#F0F0FF' : '#333' }}
      >
        <BsSend size={size} />
      </IconContext.Provider>
    </ConfirmButtonContainer>
  )
}
