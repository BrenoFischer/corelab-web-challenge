import styled from 'styled-components'

interface ConfirmButtonContainerProps {
  buttonDisabled: boolean
}

export const ConfirmButtonContainer = styled.button<ConfirmButtonContainerProps>`
  display: block;
  outline: none;
  background-color: transparent;
  border: none;

  cursor: ${(props) => (props.buttonDisabled ? 'not-allowed' : 'pointer')};
`
