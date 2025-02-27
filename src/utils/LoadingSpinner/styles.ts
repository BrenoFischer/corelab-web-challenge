import styled from 'styled-components'

export const LoadingSpinnerContainer = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  > div {
    width: 1.3rem;
    height: 1.3rem;
    border: 0.2rem solid ${(props) => props.theme.darkGray};
    border-top: 0.2rem solid ${(props) => props.theme.gray};
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
  }
`
