import { createContext, ReactNode, useState } from 'react'
import Subject from '../models/subject'
import SubjectsService from '../services/SubjectsService'

interface SubjectContextData {
  currentSubject: Subject
  selectSubject: (subjectId: string) => void
  getAllSubjects: () => Subject[]
}

interface Props {
  children: ReactNode
}

export const SubjectContext = createContext({} as SubjectContextData)

export const SubjectProvider = ({ children }: Props) => {
  const [currentSubject, setCurrentSubject] = useState(null as Subject)

  const subjectsService = new SubjectsService()

  const selectSubject = (subjectId: string) => {
    const subject = subjectsService.findById(subjectId)
    setCurrentSubject(subject)
  }

  const getAllSubjects = () => {
    return subjectsService.findAll()
  }

  return (
    <SubjectContext.Provider
      value={{ currentSubject, selectSubject, getAllSubjects }}
    >
      {children}
    </SubjectContext.Provider>
  )
}
