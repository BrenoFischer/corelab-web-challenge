import { api } from '../configs/axiosConfig'

export default {
  list: () => api.get('notes').then((response) => response.data.notes),
}
