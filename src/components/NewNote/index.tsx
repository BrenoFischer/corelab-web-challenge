import { useState, useContext } from 'react'

import { GiConfirmed } from 'react-icons/gi'
import Star from '../../assets/star.svg'
import FilledStar from '../../assets/filledStar.svg'

import { ConfirmButtonContainer, FormHeader, NewNoteContainer } from './styles'
import NotesAPI from '../../api/services/NotesAPI'
import { IconContext } from 'react-icons'
import { NotesContext } from '../../contexts/NotesContext'

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
      const response = await NotesAPI.create({
        title: titleInputValue,
        body: bodyInputValue,
        favourite,
      })

      setTitleInputValue('')
      setBodyInputValue('')

      console.log(response)
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
        <ConfirmButtonContainer
          buttonDisabled={isFormInvalid}
          onClick={handleCreateNewNote}
        >
          <IconContext.Provider
            value={{ color: isFormInvalid ? '#F0F0FF' : '#333' }}
          >
            <GiConfirmed size={25} />
          </IconContext.Provider>
        </ConfirmButtonContainer>
      </form>
    </NewNoteContainer>
  )
}
