import { useState } from 'react'

import { NoteType } from '../../types/NoteType'

import Star from '../../assets/star.svg'
import FilledStar from '../../assets/filledStar.svg'
import Pencil from '../../assets/pencil.svg'
import Paint from '../../assets/paint.svg'
import Delete from '../../assets/exit.svg'

import {
  Color,
  ColorsContainer,
  IconContainer,
  LeftFooterContainer,
  NoteContainer,
  NoteHeader,
} from './styles'

interface NoteProps {
  note: NoteType
}

export default function Note({ note }: NoteProps) {
  const [showColors, setShowColors] = useState(false)
  const [editNote, setEditNote] = useState(false)
  const [titleInputValue, setTitleInputValue] = useState(note.title)
  const [bodyInputValue, setBodyInputValue] = useState(note.body)

  function toggleShowColors() {
    setShowColors((showColorState) => !showColorState)
  }

  function toggleEditNote() {
    setEditNote((editState) => !editState)
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
          <img src={Delete} alt="Exit symbol" />
        </footer>
      </form>
    </NoteContainer>
  )
}
