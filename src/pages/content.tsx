import { SectionsTabs } from '../components/Content/SectionsTabs'
import PageLayout from '../components/Layout/PageLayout'
// import { SubjectContext } from '../contexts/SubjectContext'
// import { useContext } from 'react'

export default function Content() {
  // const { currentSubject } = useContext(SubjectContext)

  return (
    <PageLayout>
      <SectionsTabs />
    </PageLayout>
  )
}
