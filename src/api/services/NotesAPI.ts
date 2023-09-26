import { api } from '../configs/axiosConfig'

interface CreateNoteProps {
  title: string
  body: string
  favourite: boolean
}

interface DeleteNoteProps {
  id: string
}

interface UpdateNoteProps {
  id: string
  title: string
  body: string
  favourite: boolean
  color: string
}

export default {
  list: () => api.get('notes').then((response) => response.data.notes),
  create: ({ title, body, favourite }: CreateNoteProps) =>
    api
      .post('notes', { title, body, favourite, color: '#FFF' })
      .then((response) => response),
  delete: ({ id }: DeleteNoteProps) =>
    api.delete(`notes/${id}`).then((response) => response),
  update: ({ id, title, body, favourite, color }: UpdateNoteProps) =>
    api
      .patch(`notes/${id}`, { title, body, favourite, color })
      .then((response) => response),
}
