import SubjectGrid from '../components/Subject/SubjectGrid'
import PageLayout from '../components/Layout/PageLayout'
import Subject from '../models/subject'

const subjects = [
  {
    id: '001',
    title: 'Matemática',
    image: '/img/math.jpg'
  },
  {
    id: '002',
    title: 'Ciência',
    image: '/img/science.jpg'
  }
] as Subject[]

export default function Home() {
  return (
    <PageLayout>
      <h1>Matérias</h1>
      <SubjectGrid subjects={subjects} />
    </PageLayout>
  )
}
