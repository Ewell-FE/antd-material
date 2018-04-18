#  UI控件
## 使用图标，文本和UI控件（通常放在卡的底部）明确调出卡内的补充操作。
````jsx
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import SkipNextIcon from 'material-ui-icons/SkipNext'
import wx from '@/routers/assets/live-from-space.jpg'
const styles3 = theme => ({
  card: {
      display: 'flex',
   },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  }
})
@withStyles(styles3,{ withTheme: true })
export class <%=component%> extends Component {

    render() {
      const { classes,theme } = this.props;
     return (
              <div>
                   <Card className={classes.card}>
                     <div className={classes.details}>
                       <CardContent className={classes.content}>
                         <Typography variant="headline">Live From Space</Typography>
                         <Typography variant="subheading" color="textSecondary">
                           Mac Miller
                         </Typography>
                       </CardContent>
                       <div className={classes.controls}>
                         <IconButton aria-label="Previous">
                           {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                         </IconButton>
                         <IconButton aria-label="Play/pause">
                           <PlayArrowIcon className={classes.playIcon} />
                         </IconButton>
                         <IconButton aria-label="Next">
                           {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                         </IconButton>
                       </div>
                     </div>
                     <CardMedia
                       className={classes.cover}
                       image={wx}
                       title="Live from space album cover"
                     />
                   </Card>
                 </div>
        )
    }
}
````