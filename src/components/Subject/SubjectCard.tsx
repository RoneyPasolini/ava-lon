import React from 'react'
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'

import Subject from '../../models/subject'

const useStyles = makeStyles({
  root: {
    maxWidth: 500
  },
  media: {
    height: 140
  }
})

interface Props {
  subject: Subject
}

export default function SubjectCard({ subject }: Props) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={subject.image}
          title={subject.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {subject.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
