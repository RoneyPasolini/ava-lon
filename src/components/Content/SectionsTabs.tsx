import VerticalTabs from '../utils/VerticalTabs'
import Section from '../../models/section'

const sections = [
  {
    title: 'Seção 1',
    content: <p>Conteúdo 1</p>
  },
  {
    title: 'Seção 2',
    content: <p>Conteúdo 2</p>
  },
  {
    title: 'Seção 1',
    content: <p>Conteúdo 1</p>
  },
  {
    title: 'Seção 2',
    content: <p>Conteúdo 2</p>
  },
  {
    title: 'Seção 1',
    content: <p>Conteúdo 1</p>
  },
  {
    title: 'Seção 2',
    content: <p>Conteúdo 2</p>
  },
  {
    title: 'Seção 1',
    content: <p>Conteúdo 1</p>
  },
  {
    title: 'Seção 2',
    content: <p>Conteúdo 2</p>
  },
  {
    title: 'Seção 1',
    content: <p>Conteúdo 1</p>
  },
  {
    title: 'Seção 2',
    content: <p>Conteúdo 2</p>
  },
  {
    title: 'Seção 1',
    content: <p>Conteúdo 1</p>
  },
  {
    title: 'Seção 2',
    content: <p>Conteúdo 2</p>
  },
  {
    title: 'Seção 1',
    content: <p>Conteúdo 1</p>
  },
  {
    title: 'Seção 2',
    content: <p>Conteúdo 2</p>
  },
  {
    title: 'Seção 1',
    content: <p>Conteúdo 1</p>
  },
  {
    title: 'Seção 2',
    content: <p>Conteúdo 2</p>
  },
  {
    title: 'Seção 2',
    content: <p>Conteúdo 2</p>
  },
  {
    title: 'Seção 1',
    content: <p>Conteúdo 1</p>
  },
  {
    title: 'Seção 2',
    content: <p>Conteúdo 2</p>
  },
  {
    title: 'Seção 1',
    content: <p>Conteúdo 1</p>
  },
  {
    title: 'Seção 2',
    content: <p>Conteúdo 2</p>
  },
  {
    title: 'Seção 1',
    content: <p>Conteúdo 1</p>
  },
  {
    title: 'Seção 2',
    content: <p>Conteúdo 2</p>
  },
  {
    title: 'Seção 1',
    content: <p>Conteúdo 1</p>
  },
  {
    title: 'Seção 2',
    content: <p>Conteúdo 2</p>
  },
  {
    title: 'Seção 1',
    content: <p>Conteúdo 1</p>
  },
  {
    title: 'Seção 2',
    content: <p>Conteúdo 2</p>
  }
] as Section[]

export function SectionsTabs() {
  return <VerticalTabs tabs={sections} />
}
