import { useContext, useState } from 'react'
import Logo from '../../assets/logo.png'
import SearchIcon from '../../assets/search.svg'
import ExitIcon from '../../assets/exit.svg'
import {
  HeaderContainer,
  LeftHeaderContainer,
  LogoContainer,
  SearchBarForm,
} from './styles'
import { NotesContext } from '../../contexts/NotesContext'

export default function Header() {
  const [filter, setFilter] = useState('')
  const { filterNotes } = useContext(NotesContext)

  function handleFilterSubmit(e: React.SyntheticEvent) {
    e.preventDefault()

    filterNotes(filter)
  }

  return (
    <HeaderContainer>
      <LeftHeaderContainer>
        <LogoContainer>
          <img src={Logo} alt="Notepad" />
          <p>CoreNotes</p>
        </LogoContainer>
        <SearchBarForm onSubmit={handleFilterSubmit}>
          <input
            placeholder="Pesquisar notas"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <button type="submit">
            <img src={SearchIcon} alt="magnifying glass" />
          </button>
        </SearchBarForm>
      </LeftHeaderContainer>

      <img src={ExitIcon} alt="Exit letter" />
    </HeaderContainer>
  )
}
