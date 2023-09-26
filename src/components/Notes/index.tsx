import { useContext } from 'react'
import Note from '../Note'
import { NotesContainer } from './styles'
import { NotesContext } from '../../contexts/NotesContext'

export default function Notes() {
  const { notes } = useContext(NotesContext)

  return (
    <NotesContainer>
      {notes.length > 0 && (
        <>
          <h2>Outras</h2>
          <ul>
            {notes.map((note) => {
              return <Note key={note.title} note={note} />
            })}
          </ul>
        </>
      )}
    </NotesContainer>
  )
}
