import Logo from '../../assets/logo.png'
import SearchIcon from '../../assets/search.svg'
import ExitIcon from '../../assets/exit.svg'
import {
  HeaderContainer,
  LeftHeaderContainer,
  LogoContainer,
  SearchBarContainer,
} from './styles'

export default function Header() {
  return (
    <HeaderContainer>
      <LeftHeaderContainer>
        <LogoContainer>
          <img src={Logo} alt="Notepad" />
          <p>CoreNotes</p>
        </LogoContainer>
        <SearchBarContainer>
          <input placeholder="Pesquisar notas" />
          <img src={SearchIcon} alt="magnifying glass" />
        </SearchBarContainer>
      </LeftHeaderContainer>

      <div>
        <img src={ExitIcon} alt="Exit letter" />
      </div>
    </HeaderContainer>
  )
}
