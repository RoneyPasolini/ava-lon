import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core'

import SubjectCard from './SubjectCard'
import Subject from '../../models/subject'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    }
  })
)

interface Props {
  subjects: Subject[]
}

export default function SubjectGrid({ subjects }: Props) {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.root}
      spacing={2}
      justify="center"
      alignItems="center"
    >
      {subjects.map((subject) => (
        <Grid item xs={12} sm={6} md={4} key={subject.id}>
          <SubjectCard subject={subject} />
        </Grid>
      ))}
    </Grid>
  )
}
