import { Typography, Box } from '@material-ui/core'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import ModuleGradesAccordion from '../components/Grades/ModuleGradesAccordion'
import PageLayout from '../components/Layout/PageLayout'
import Module from '../models/module'

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
      fontSize: theme.typography.pxToRem(18),
      textAlign: 'right'
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

export default function Grades() {
  const classes = useStyles()

  return (
    <PageLayout>
      <Typography component="h1">
        <h1>Notas</h1>
      </Typography>

      <Box className={classes.modulesGroup}>
        {grades.map((module) => (
          <ModuleGradesAccordion key={module.id} module={module} />
        ))}
      </Box>
    </PageLayout>
  )
}
