import {
  createStyles,
  makeStyles,
  Paper,
  Theme,
  Typography
} from '@material-ui/core'
import Score from './Score'
import Activity from '../../models/activity'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    activityTitle: {
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

interface Props {
  activity: Activity
}

export default function ActivityGradeBox({ activity }: Props) {
  const classes = useStyles()

  return (
    <Paper variant="outlined" className={classes.activityBox}>
      <Typography
        variant="h6"
        component="span"
        className={classes.activityTitle}
      >
        {activity.title}
      </Typography>
      <Typography variant="body2" component="span">
        <Score grade={activity.grade} maxGrade={activity.maxGrade} />
      </Typography>
    </Paper>
  )
}
