import { createContext, useEffect, useState } from 'react'
import { NoteType } from '../types/NoteType'
import NotesAPI from '../api/services/NotesAPI'

interface NotesContextType {
  notes: NoteType[]
  getNotes: () => void
  filterNotes: (filter: string) => void
}

export const NotesContext = createContext({} as NotesContextType)

interface NotesContextProviderProps {
  children: React.ReactNode
}

export function NotesContextProvider({ children }: NotesContextProviderProps) {
  const [notes, setNotes] = useState<NoteType[]>([])

  async function getNotes() {
    try {
      const newNotes: NoteType[] = await NotesAPI.list()
      console.log(newNotes)

      setNotes(newNotes)
    } catch (error) {
      console.log(error)
    }
  }

  async function filterNotes(filter: string) {
    const filterLowerCase = filter.toLowerCase()
    const newNotes: NoteType[] = await NotesAPI.list()

    const filteredNotes = newNotes.filter((note) => {
      return (
        note.title.toLowerCase().includes(filterLowerCase) ||
        note.body.toLowerCase().includes(filterLowerCase)
      )
    })

    setNotes(filteredNotes)
  }

  useEffect(() => {
    getNotes()
  }, [])

  return (
    <NotesContext.Provider value={{ notes, getNotes, filterNotes }}>
      {children}
    </NotesContext.Provider>
  )
}
