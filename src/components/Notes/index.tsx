import { useContext } from 'react'
import Note from '../Note'
import { NotesContainer } from './styles'
import { NotesContext } from '../../contexts/NotesContext'

export default function Notes() {
  const { notes } = useContext(NotesContext)

  const favouriteNotes = notes.filter((note) => note.favourite)
  const otherNotes = notes.filter((note) => !note.favourite)

  return (
    <NotesContainer>
      {favouriteNotes.length > 0 && (
        <>
          <h2>Favoritas</h2>
          <ul>
            {favouriteNotes.map((note) => {
              return <Note key={note.title} note={note} />
            })}
          </ul>
        </>
      )}
      {otherNotes.length > 0 && (
        <div>
          <h2>Outras</h2>
          <ul>
            {otherNotes.map((note) => {
              return <Note key={note.title} note={note} />
            })}
          </ul>
        </div>
      )}
    </NotesContainer>
  )
}
