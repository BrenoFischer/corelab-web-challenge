import styled from 'styled-components'
import { devices } from '../../styles/mixins'

export const NewNoteContainer = styled.div`
  margin-top: 1.55rem;
  padding: 0 6rem;

  display: flex;
  justify-content: center;

  form {
    width: 33.13538rem;

    border-radius: 0.1875rem;
    border: 1px solid ${(props) => props.theme.borderGray};
    background: ${(props) => props.theme.white};
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);

    @media ${devices.tablet} {
      border-radius: 1.5625rem;
    }

    textarea {
      padding: 0.8rem;

      width: 100%;

      border: none;
      outline: none;
      resize: none;

      background-color: transparent;

      @media ${devices.tablet} {
        border-radius: 1.5625rem;
      }
    }
  }
`

export const FormHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding-right: 0.56rem;

  border-bottom: 1px solid ${(props) => props.theme.borderGray};

  input {
    border: none;
    width: 100%;

    padding: 0.8rem;

    background-color: transparent;

    color: ${(props) => props.theme.darkGray};
    font-size: 0.8875rem;
    font-weight: 700;

    @media ${devices.tablet} {
      border-radius: 1.5625rem;
    }

    &::placeholder {
      color: ${(props) => props.theme.darkGray};
    }

    &:focus {
      outline: none;
    }
  }

  img {
    cursor: pointer;
  }
`
