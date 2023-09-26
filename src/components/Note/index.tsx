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
  RightFooterContainer,
} from './styles'
import NotesAPI from '../../api/services/NotesAPI'
import { NotesContext } from '../../contexts/NotesContext'
import LoadingSpinner from '../../utils/LoadingSpinner'
import ConfirmButton from '../../utils/ConfirmButton'

interface NoteProps {
  note: NoteType
}

export default function Note({ note }: NoteProps) {
  const { getNotes } = useContext(NotesContext)

  const [showColors, setShowColors] = useState(false)
  const [editNote, setEditNote] = useState(false)
  const [deletingNote, setDeletingNote] = useState(false)
  const [updatingNote, setUpdatingNote] = useState(false)
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

  async function handleEditNote(e: React.SyntheticEvent) {
    e.preventDefault()

    if (editNote) {
      setUpdatingNote(true)
      await NotesAPI.update({
        id: note.id,
        title: titleInputValue,
        body: bodyInputValue,
        favourite: note.favourite,
        color: note.color,
      })

      setEditNote(false)
      setUpdatingNote(false)
    }
  }

  async function handleEditFavourite() {
    setUpdatingNote(true)
    await NotesAPI.update({
      id: note.id,
      title: note.title,
      body: note.title,
      favourite: !note.favourite,
      color: note.color,
    })

    setUpdatingNote(false)
    getNotes()
  }

  async function handleEditColor(newColor: string) {
    setUpdatingNote(true)
    await NotesAPI.update({
      id: note.id,
      title: note.title,
      body: note.title,
      favourite: note.favourite,
      color: newColor,
    })

    setUpdatingNote(false)
    getNotes()
  }

  return (
    <NoteContainer backgroundColor={note.color}>
      <form onSubmit={handleEditNote}>
        <NoteHeader>
          <input
            value={titleInputValue}
            onChange={(event) => setTitleInputValue(event.target.value)}
            disabled={!editNote}
          />
          <img
            src={note.favourite ? FilledStar : Star}
            alt={note.favourite ? 'Star Filled' : 'Star outline'}
            onClick={handleEditFavourite}
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
              <Color
                color={'lightBlue'}
                onClick={() => handleEditColor('lightBlue')}
              />
              <Color
                color={'mediumBlue'}
                onClick={() => handleEditColor('mediumBlue')}
              />
              <Color
                color={'darkBlue'}
                onClick={() => handleEditColor('darkBlue')}
              />
              <Color
                color={'orange'}
                onClick={() => handleEditColor('orange')}
              />
              <Color
                color={'lightRed'}
                onClick={() => handleEditColor('lightRed')}
              />
              <Color
                color={'mediumRed'}
                onClick={() => handleEditColor('mediumRed')}
              />
              <Color
                color={'darkRed'}
                onClick={() => handleEditColor('darkRed')}
              />
              <Color
                color={'purple'}
                onClick={() => handleEditColor('purple')}
              />
              <Color color={'lime'} onClick={() => handleEditColor('lime')} />
              <Color
                color={'colorPalleteGray'}
                onClick={() => handleEditColor('colorPalleteGray')}
              />
              <Color
                color={'colorPalleteDarkGray'}
                onClick={() => handleEditColor('colorPalleteDarkGray')}
              />
              <Color color={'brown'} onClick={() => handleEditColor('brown')} />
            </ColorsContainer>
          )}
          <RightFooterContainer>
            {updatingNote ? (
              <LoadingSpinner />
            ) : (
              <ConfirmButton buttonDisabled={!editNote} size={17} />
            )}

            <DeleteButtonContainer>
              {deletingNote ? (
                <LoadingSpinner />
              ) : (
                <img
                  src={Delete}
                  alt="Exit symbol"
                  onClick={handleDeleteNote}
                />
              )}
            </DeleteButtonContainer>
          </RightFooterContainer>
        </footer>
      </form>
    </NoteContainer>
  )
}
