import SubjectGrid from '../components/Subject/SubjectGrid'
import PageLayout from '../components/Layout/PageLayout'
import Subject from '../models/subject'
import { useRouter } from 'next/router'
import SubjectsService from '../services/SubjectsService'

export default function Home() {
  const router = useRouter()
  const { subjectId } = router.query

  const subjectsService = new SubjectsService()
  const subject = subjectsService.findById(subjectId)

  function AllSubjects() {
    return (
      <>
        <h1>Matérias</h1>
        <SubjectGrid subjects={subjectsService.findAll()} />
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
      {subject ? <Subject {...subject} /> : <AllSubjects />}
    </PageLayout>
  )
}
