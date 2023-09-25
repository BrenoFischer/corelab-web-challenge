import Note from '../Note'
import { NotesContainer } from './styles'

export default function Notes() {
  return (
    <NotesContainer>
      <h2>Outras</h2>
      <ul>
        <Note />
        <Note />
        <Note />
        <Note />
      </ul>
    </NotesContainer>
  )
}
