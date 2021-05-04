import React, { useEffect, useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import SubjectsService from '../../../../services/SubjectsService'
import Subject from '../../../../models/subject'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fullWidth: {
      width: '90%'
    }
  })
)

export default function SelectSubject() {
  const [subjectList, setSubjectList] = useState([] as Subject[])

  useEffect(() => {
    const subjectsService = new SubjectsService()
    setSubjectList(subjectsService.findAll())
  }, [])

  function changeSubject(event) {
    const subjectId = event.target.value
    if (subjectId !== '') {
      console.log(subjectId)
    }
  }

  const classes = useStyles()
  return (
    <div>
      <FormControl className={classes.fullWidth}>
        <InputLabel htmlFor="grouped-native-select">Matéria</InputLabel>
        <Select
          native
          defaultValue=""
          onChange={(event) => changeSubject(event)}
        >
          <option aria-label="None" value="" />
          {subjectList.map((subject) => {
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
