import { useContext, useState } from 'react'

import { NoteType } from '../../types/NoteType'

import Star from '../../assets/star.svg'
import FilledStar from '../../assets/filledStar.svg'
import Pencil from '../../assets/pencil.svg'
import Paint from '../../assets/paint.svg'
import Delete from '../../assets/exit.svg'

import {
  Color,
  ColorsContainer,
  DeleteButtonContainer,
  IconContainer,
  LeftFooterContainer,
  NoteContainer,
  NoteHeader,
} from './styles'
import NotesAPI from '../../api/services/NotesAPI'
import { NotesContext } from '../../contexts/NotesContext'
import LoadingSpinner from '../../utils/LoadingSpinner'

interface NoteProps {
  note: NoteType
}

export default function Note({ note }: NoteProps) {
  const { getNotes } = useContext(NotesContext)

  const [showColors, setShowColors] = useState(false)
  const [editNote, setEditNote] = useState(false)
  const [deletingNote, setDeletingNote] = useState(false)
  const [titleInputValue, setTitleInputValue] = useState(note.title)
  const [bodyInputValue, setBodyInputValue] = useState(note.body)

  function toggleShowColors() {
    setShowColors((showColorState) => !showColorState)
  }

  function toggleEditNote() {
    setEditNote((editState) => !editState)
  }

  async function handleDeleteNote() {
    setDeletingNote(true)
    await NotesAPI.delete({ id: note.id }).then((_) => {
      getNotes()
      setDeletingNote(false)
    })
  }

  return (
    <NoteContainer>
      <form>
        <NoteHeader>
          <input
            value={titleInputValue}
            onChange={(event) => setTitleInputValue(event.target.value)}
            disabled={!editNote}
          />
          <img
            src={note.favourite ? FilledStar : Star}
            alt={note.favourite ? 'Star Filled' : 'Star outline'}
          />
        </NoteHeader>
        <textarea
          value={bodyInputValue}
          onChange={(event) => setBodyInputValue(event.target.value)}
          disabled={!editNote}
        />
        <footer>
          <LeftFooterContainer>
            <IconContainer iconPressed={editNote}>
              <img src={Pencil} alt="Pencil" onClick={toggleEditNote} />
            </IconContainer>
            <IconContainer iconPressed={showColors}>
              <img src={Paint} alt="Paint" onClick={toggleShowColors} />
            </IconContainer>
          </LeftFooterContainer>
          {showColors && (
            <ColorsContainer>
              <Color color={'lightBlue'} />
              <Color color={'mediumBlue'} />
              <Color color={'darkBlue'} />
              <Color color={'orange'} />
              <Color color={'lightRed'} />
              <Color color={'mediumRed'} />
              <Color color={'darkRed'} />
              <Color color={'purple'} />
              <Color color={'lime'} />
              <Color color={'colorPalleteGray'} />
              <Color color={'colorPalleteDarkGray'} />
              <Color color={'brown'} />
            </ColorsContainer>
          )}
          <DeleteButtonContainer>
            {deletingNote ? (
              <LoadingSpinner />
            ) : (
              <img src={Delete} alt="Exit symbol" onClick={handleDeleteNote} />
            )}
          </DeleteButtonContainer>
        </footer>
      </form>
    </NoteContainer>
  )
}
