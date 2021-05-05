import SubjectGrid from '../components/Subject/SubjectGrid'
import PageLayout from '../components/Layout/PageLayout'
import Subject from '../models/subject'
import { useRouter } from 'next/router'
import { SubjectContext } from '../contexts/SubjectContext'
import { useContext } from 'react'

export default function Home() {
  const { currentSubject, selectSubject, getAllSubjects } = useContext(
    SubjectContext
  )

  const router = useRouter()
  const { subjectId } = router.query

  selectSubject(subjectId as string)

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
