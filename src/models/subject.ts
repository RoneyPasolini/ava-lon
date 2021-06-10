import Module from './module'

export default interface Subject {
  id: string
  title: string
  image: string
  modules: Module[]
}
