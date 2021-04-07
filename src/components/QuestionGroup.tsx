import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  makeStyles,
  FormLabel
} from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  questionTitle: {
    fontSize: '1.5em',
    fontWeight: 'bolder',
    color: theme.palette.text.primary,
    marginBottom: '1rem'
  },
  questionGroup: {
    marginTop: '2rem',
    marginBottom: '2rem',
    textAlign: 'left'
  },
  answerGroup: {
    display: 'flex',
    alignItems: 'center'
  },
  answer: {
    width: 'fit-content'
  }
}))

interface Answer {
  id: string
  text: string
}

interface Question {
  id: string
  title: string
  answers: Answer[]
}

interface QuestionGroupProps {
  index: number
  question: Question
}

export default function QuestionGroup({ index, question }: QuestionGroupProps) {
  const classes = useStyles()
  const [value, setValue] = useState(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }

  return (
    <Box key={question.id} className={classes.questionGroup}>
      <FormControl component="fieldset">
        <FormLabel component="legend" className={classes.questionTitle}>
          {`${index + 1} - ${question.title}`}
        </FormLabel>
        <RadioGroup
          aria-label={`question-${question.id}`}
          name={`question-${question.id}`}
          value={value}
          onChange={handleChange}
        >
          {question.answers.map((answer) => (
            <FormControlLabel
              key={answer.id}
              value={answer.id}
              control={<Radio />}
              label={answer.text}
              className={classes.answer}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  )
}
