import styled from 'styled-components'
import { devices } from '../../styles/mixins'

export const NoteContainer = styled.li`
  width: 100%;
  max-width: 24.375rem;

  @media ${devices.tablet} {
    max-width: 100%;
  }

  list-style: none;

  border-radius: 1.5625rem;
  background: ${(props) => props.theme.white};
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.25);

  textarea {
    padding: 1.2rem;

    width: 100%;
    height: 20rem;

    border: none;
    outline: none;
    resize: none;

    background-color: transparent;

    font-size: 0.8125rem;
  }

  footer {
    position: relative;
    display: flex;
    justify-content: space-between;

    padding: 0 1.4rem 0.7rem;

    img {
      cursor: pointer;
    }
  }
`

export const NoteHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 1.2rem 1.4rem 0.8rem;

  border-bottom: 1px solid ${(props) => props.theme.borderGray};

  input {
    border: none;
    width: 100%;

    background-color: transparent;

    color: ${(props) => props.theme.darkGray};
    font-size: 0.8875rem;
    font-weight: 700;

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

export const LeftFooterContainer = styled.div`
  display: flex;
  gap: 0.7rem;
`

interface PaintIconContainerProps {
  colorsBeingDisplayed: boolean
}

export const PaintIconContainer = styled.div<PaintIconContainerProps>`
  width: 1.8rem;
  height: 1.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) =>
    props.colorsBeingDisplayed ? '#FFE3B3' : 'transparent'};

  border-radius: 999px;
`

export const ColorsContainer = styled.div`
  position: absolute;

  bottom: -2.5rem;

  border-radius: 0.5625rem;
  border: 1px solid ${(props) => props.theme.borderGray};
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
  background-color: ${(props) => props.theme.white};
  z-index: 999;

  padding: 0.3rem;

  display: flex;
  gap: 0.6rem;

  @media ${devices.tablet} {
    max-width: 17.93369rem;
    flex-wrap: wrap;
    justify-content: baseline;
    bottom: -5.5rem;
  }
`

const COLORS = {
  lightBlue: 'lightBlue',
  mediumBlue: 'mediumBlue',
  darkBlue: 'darkBlue',
  orange: 'orange',
  lightRed: 'lightRed',
  mediumRed: 'mediumRed',
  darkRed: 'darkRed',
  purple: 'purple',
  lime: 'lime',
  colorPalleteGray: 'colorPalleteGray',
  colorPalleteDarkGray: 'colorPalleteDarkGray',
  brown: 'brown',
}

interface ColorProps {
  color: keyof typeof COLORS
}

export const Color = styled.li<ColorProps>`
  width: 2.3rem;
  height: 2.3rem;

  cursor: pointer;

  border-radius: 9999px;

  list-style: none;

  background-color: ${(props) => props.theme[COLORS[props.color]]};
`
