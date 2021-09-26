import Subject from '../models/subject'

class GradeService {
  getStudantGrades() {
    const grades = [
      {
        id: 'M1',
        title: 'Module 1',
        activities: [
          {
            id: '1',
            title: 'Test 1',
            done: true,
            grade: 2,
            maxGrade: 10
          },
          {
            id: '2',
            title: 'Test 2',
            done: true,
            grade: 0,
            maxGrade: 10
          }
        ]
      },
      {
        id: 'M2',
        title: 'Module 2',
        activities: [
          {
            id: '2',
            title: 'Test 1',
            done: false,
            grade: 10,
            maxGrade: 10
          },
          {
            id: '3',
            title: 'Test 2',
            done: false,
            grade: 3.3333333,
            maxGrade: 10
          }
        ]
      }
    ]
    return grades
  }
}
export { GradeService }
