import { Box } from '@material-ui/core'

interface Props {
  grade: number
  maxGrade: number
}

export default function Score({ grade, maxGrade }: Props) {
  const gradePercent = (grade / maxGrade) * 100
  const color =
    gradePercent >= 80
      ? 'success.main'
      : gradePercent >= 40
      ? 'warning.main'
      : 'error.main'
  const formatedGrade =
    grade.toString().indexOf('.') !== -1
      ? (Math.round(grade * 100) / 100).toFixed(2)
      : grade
  const formatedMaxGrade =
    maxGrade.toString().indexOf('.') !== -1
      ? (Math.round(maxGrade * 100) / 100).toFixed(2)
      : maxGrade
  return (
    <Box
      component="span"
      color={color}
    >{`${formatedGrade} / ${formatedMaxGrade}`}</Box>
  )
}
