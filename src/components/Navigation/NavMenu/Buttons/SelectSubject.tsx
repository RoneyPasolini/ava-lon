import React, { useContext } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { SubjectContext } from '../../../../contexts/SubjectContext'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fullWidth: {
      width: '90%'
    }
  })
)

export default function SelectSubject() {
  const { currentSubject, selectSubject, getAllSubjects } = useContext(
    SubjectContext
  )
  const allSubjects = getAllSubjects()

  const changeSubject = (event) => {
    const subjectId = event.target.value
    if (subjectId) {
      selectSubject(subjectId as string)
    }
  }

  const classes = useStyles()
  return (
    <div>
      <FormControl className={classes.fullWidth}>
        <InputLabel htmlFor="select-subject">Matéria</InputLabel>
        <Select
          id="select-subject"
          native
          value={currentSubject?.id || ''}
          onChange={(event) => changeSubject(event)}
        >
          <option aria-label="None" value="" disabled />
          {allSubjects.map((subject) => {
            return (
              <option key={subject.id} value={subject.id}>
                {subject.title}
              </option>
            )
          })}
        </Select>
      </FormControl>
    </div>
  )
}
