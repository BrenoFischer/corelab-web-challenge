import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.white};

  padding-left: 2.24rem;
  padding-right: 1.61rem;

  gap: 3rem;

  width: 100%;
  height: 3.5625rem;

  box-shadow: 0px 1px 7px 0px rgba(149, 149, 149, 0.25);

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LeftHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.73rem;
  width: 100%;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.11rem;

  color: ${(props) => props.theme.gray};
  font-size: 0.875rem;

  img {
    max-width: 2.26944rem;
    max-height: 2.26944rem;
  }
`

export const SearchBarForm = styled.form`
  display: flex;
  align-items: center;

  max-width: 33.13538rem;
  width: 100%;
  padding-right: 0.56rem;

  border-radius: 0.1875rem;
  border: 1px solid #d9d9d9;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);

  input {
    border-radius: 0.1875rem;
    border: 1px solid #d9d9d9;
    padding: 0.5rem 0 0.5rem 0.56rem;
    width: 100%;
    height: 100%;
    border: none;
    color: ${(props) => props.theme.darkGray};
    font-size: 0.5625rem;

    &::placeholder {
      color: ${(props) => props.theme.cleanGray};
    }

    &:focus {
      outline: none;
    }
  }

  button {
    border: none;
    outline: none;
    background-color: transparent;
    display: flex;
  }

  img {
    cursor: pointer;
  }
`
