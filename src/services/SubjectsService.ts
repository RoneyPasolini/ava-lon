import Subject from '../models/subject'

const subjectsMock = [
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

export default class SubjectsService {
  private subjects = subjectsMock

  findById(id): Subject {
    let subjectFound = null
    this.subjects.forEach((subject) => {
      if (id === subject.id) {
        subjectFound = subject
      }
    })
    return subjectFound
  }

  findAll() {
    return subjectsMock
  }
}
