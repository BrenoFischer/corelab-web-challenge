import { createContext, useEffect, useState } from 'react'
import { NoteType } from '../types/NoteType'
import NotesAPI from '../api/services/NotesAPI'

interface NotesContextType {
  notes: NoteType[]
  getNotes: () => void
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

  useEffect(() => {
    getNotes()
  }, [])

  return (
    <NotesContext.Provider value={{ notes, getNotes }}>
      {children}
    </NotesContext.Provider>
  )
}
