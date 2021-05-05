import SubjectGrid from '../components/Subject/SubjectGrid'
import PageLayout from '../components/Layout/PageLayout'
import Subject from '../models/subject'
import { SubjectContext } from '../contexts/SubjectContext'
import { useContext } from 'react'

export default function Home() {
  const { currentSubject, getAllSubjects } = useContext(SubjectContext)

  function AllSubjects() {
    const allSubjects = getAllSubjects()
    return (
      <>
        <h1>Matérias</h1>
        <SubjectGrid subjects={allSubjects} />
      </>
    )
  }

  function Subject({ title }: Subject) {
    return (
      <>
        <h1>{title}</h1>
      </>
    )
  }

  return (
    <PageLayout>
      {currentSubject ? <Subject {...currentSubject} /> : <AllSubjects />}
    </PageLayout>
  )
}
