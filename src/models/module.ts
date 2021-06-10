import Activity from './activity'
import Section from './section'

export default interface Module {
  id: string
  title: string
  activities: Activity[]
  sections: Section[]
}
