import Activity from './activity'

export default interface Module {
  id: string
  title: string
  activities: Activity[]
}
