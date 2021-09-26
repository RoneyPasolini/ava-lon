import { Typography, Box } from '@material-ui/core'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import ModuleGradesAccordion from '../components/Grades/ModuleGradesAccordion'
import PageLayout from '../components/Layout/PageLayout'
import Module from '../models/module'
import { GradeService} from '../services/GradeService'

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
const gradeServise = new GradeService()
const grades = gradeServise.getStudantGrades() as Module[]

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
