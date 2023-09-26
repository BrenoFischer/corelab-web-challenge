import { api } from '../configs/axiosConfig'

interface CreateNoteProps {
  title: string
  body: string
  favourite: boolean
}

interface DeleteNoteProps {
  id: string
}

export default {
  list: () => api.get('notes').then((response) => response.data.notes),
  create: ({ title, body, favourite }: CreateNoteProps) =>
    api
      .post('notes', { title, body, favourite, color: '#FFF' })
      .then((response) => response),
  delete: ({ id }: DeleteNoteProps) =>
    api.delete(`notes/${id}`).then((response) => response),
}
