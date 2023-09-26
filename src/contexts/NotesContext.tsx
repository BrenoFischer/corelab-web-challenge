import { createContext, useEffect, useState } from 'react'
import { NoteType } from '../types/NoteType'
import NotesAPI from '../api/services/NotesAPI'

interface NotesContextType {
  notes: NoteType[]
  changeActiveNotes: (newNotes: NoteType[]) => void
}

export const NotesContext = createContext({} as NotesContextType)

interface NotesContextProviderProps {
  children: React.ReactNode
}

export function NotesContextProvider({ children }: NotesContextProviderProps) {
  const [notes, setNotes] = useState<NoteType[]>([])

  useEffect(() => {
    async function getNotes() {
      try {
        const newNotes: NoteType[] = await NotesAPI.list()
        console.log(newNotes)

        setNotes(newNotes)
      } catch (error) {
        console.log(error)
      }
    }

    getNotes()
  }, [])

  function changeActiveNotes(newNotes: NoteType[]) {
    console.log(newNotes)
    setNotes(newNotes)
  }

  return (
    <NotesContext.Provider value={{ notes, changeActiveNotes }}>
      {children}
    </NotesContext.Provider>
  )
}
