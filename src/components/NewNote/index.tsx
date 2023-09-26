import { useState, useContext } from 'react'

import Star from '../../assets/star.svg'
import FilledStar from '../../assets/filledStar.svg'

import { ConfirmButtonWrapper, FormHeader, NewNoteContainer } from './styles'
import NotesAPI from '../../api/services/NotesAPI'

import { NotesContext } from '../../contexts/NotesContext'
import ConfirmButton from '../../utils/ConfirmButton'

export default function NewNote() {
  const { getNotes } = useContext(NotesContext)
  const [favourite, setFavourite] = useState(false)
  const [titleInputValue, setTitleInputValue] = useState('')
  const [bodyInputValue, setBodyInputValue] = useState('')

  const isFormInvalid = titleInputValue === '' || bodyInputValue === ''

  function toggleFavourite() {
    setFavourite((favouriteState) => !favouriteState)
  }

  async function handleCreateNewNote(e: React.SyntheticEvent) {
    e.preventDefault()

    if (!isFormInvalid) {
      await NotesAPI.create({
        title: titleInputValue,
        body: bodyInputValue,
        favourite,
      })

      setTitleInputValue('')
      setBodyInputValue('')

      getNotes()
    }
  }

  return (
    <NewNoteContainer>
      <form onSubmit={handleCreateNewNote}>
        <FormHeader>
          <input
            placeholder="Título"
            required
            value={titleInputValue}
            onChange={(event) => {
              setTitleInputValue(event.target.value)
            }}
          />
          <img
            src={favourite ? FilledStar : Star}
            alt={favourite ? 'Filled Star' : 'Star outline'}
            onClick={toggleFavourite}
          />
        </FormHeader>
        <textarea
          placeholder="Criar nota..."
          required
          value={bodyInputValue}
          onChange={(event) => {
            setBodyInputValue(event.target.value)
          }}
        />
        <ConfirmButtonWrapper>
          <ConfirmButton buttonDisabled={isFormInvalid} />
        </ConfirmButtonWrapper>
      </form>
    </NewNoteContainer>
  )
}
