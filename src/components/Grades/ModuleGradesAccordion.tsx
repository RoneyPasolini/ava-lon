import {
  Typography,
  AccordionSummary,
  AccordionDetails,
  Accordion,
  Box,
  Grid
} from '@material-ui/core'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import Activity from '../../models/activity'
import Module from '../../models/module'

import ActivityGradeBox from './ActivityGradeBox'
import Score from './Score'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    }
  })
)

interface Props {
  module: Module
}

export default function ModuleGradesAccordion({ module }: Props) {
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

  const classes = useStyles()

  return (
    <Accordion className={classes.module}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography className={classes.heading}>{module.title}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.secondaryHeading}>
              <Score
                grade={getActivitiesAverageGrade(module) * 10}
                maxGrade={10}
              />
            </Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          {module.activities.map((activity: Activity) => (
            <ActivityGradeBox key={activity.id} activity={activity} />
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}
