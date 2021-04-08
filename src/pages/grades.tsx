import {
  Typography,
  AccordionSummary,
  AccordionDetails,
  Accordion,
  Paper,
  Box
} from '@material-ui/core'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import PageLayout from '../components/PageLayout'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modulesGroup: {
      width: '100%',
      textAlign: 'left'
    },
    module: {
      backgroundColor: theme.palette.background.default
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
      flexBasis: '33.33%',
      flexShrink: 0
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(18)
    },
    activitiesGroup: {
      display: 'flex',
      flexDirection: 'column'
    },
    activitiesGroupText: {
      marginRight: '1rem'
    },
    activityBox: {
      padding: '1rem',
      marginTop: '.5rem',
      marginBottom: '1rem',
      minWidth: '10rem',
      alignItems: 'space-around'
    }
  })
)

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
] as Module[]

interface Activity {
  id: string
  title: string
  done: boolean
  grade: number
  maxGrade: number
}

interface Module {
  id: string
  title: string
  activities: Activity[]
}

export default function Grades() {
  const classes = useStyles()

  function getActivitiesAverageGrade(module: Module) {
    let totalScore = 0
    let totalMaxScore = 0
    for (let i = 0; i < module.activities.length; i++) {
      totalScore += module.activities[i].grade
      totalMaxScore += module.activities[i].maxGrade
    }
    const average = totalScore / totalMaxScore
    return average
  }

  function Grade({ grade, maxGrade }: { grade: number; maxGrade: number }) {
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

  return (
    <PageLayout>
      <Typography component="h1">
        <h1>Notas</h1>
      </Typography>

      <Box className={classes.modulesGroup}>
        {grades.map((module) => (
          <Accordion key={module.id} className={classes.module}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                {module.title}
              </Typography>
              <Typography className={classes.secondaryHeading}>
                <Grade
                  grade={getActivitiesAverageGrade(module) * 10}
                  maxGrade={10}
                />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                {module.activities.map((activity) => (
                  <Paper
                    key={activity.id}
                    variant="outlined"
                    className={classes.activityBox}
                  >
                    <Typography
                      variant="h6"
                      component="span"
                      className={classes.activitiesGroupText}
                    >
                      {activity.title}
                    </Typography>
                    <Typography variant="body2" component="span">
                      <Grade
                        grade={activity.grade}
                        maxGrade={activity.maxGrade}
                      ></Grade>
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </PageLayout>
  )
}
