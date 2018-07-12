#  简单的卡片
## 虽然卡片可以支持多种动作，UI控件和溢出菜单，但请使用限制，并记住卡片是进入更复杂和详细信息的入口点。
   
````jsx
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from 'antd-material/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }
})
@withStyles(styles)
export class <%=component%> extends Component {
    render() {
       const { classes } = this.props;
       const bull = <span className={classes.bullet}>•</span>;
        return (
             <div>
                  <Card className={classes.card}>
                    <CardContent>
                      <Typography className={classes.title} color="textSecondary">
                        Word of the Day
                      </Typography>
                      <Typography variant="headline" component="h2">
                        be{bull}nev{bull}o{bull}lent
                      </Typography>
                      <Typography className={classes.pos} color="textSecondary">
                        adjective
                      </Typography>
                      <Typography component="p">
                        well meaning and kindly.<br />
                        {'"a benevolent smile"'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </div>
        )
    }
}
````