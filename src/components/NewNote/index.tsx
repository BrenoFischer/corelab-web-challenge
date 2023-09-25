import Star from '../../assets/star.svg'
import { FormHeader, NewNoteContainer } from './styles'

export default function NewNote() {
  return (
    <NewNoteContainer>
      <form>
        <FormHeader>
          <input placeholder="Título" />
          <img src={Star} alt="Star outline" />
        </FormHeader>
        <textarea placeholder="Criar nota..." />
      </form>
    </NewNoteContainer>
  )
}
