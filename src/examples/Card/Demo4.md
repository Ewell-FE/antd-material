#  复杂的交互
## 在桌面上，卡片内容可以扩展
````jsx
import classnames from 'classnames';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from '@/components/Avatar'
import tf from '@/routers/assets/paella.jpg'
const styles4 = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 194,
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  }
})
@withStyles(styles4)
export class <%=component%> extends Component {
   constructor(props) {
      super(props)
      this.state={ expanded: false };
   }
   
    handleExpandClick = () => {
       this.setState({ expanded: !this.state.expanded });
     };

    render() {
      const { classes } = this.props;
      return (
              <div>
                     <Card className={classes.card}>
                       <CardHeader
                         avatar={
                           <Avatar aria-label="Recipe" className={classes.avatar}>
                             R
                           </Avatar>
                         }
                         action={
                           <IconButton>
                             <MoreVertIcon />
                           </IconButton>
                         }
                         title="Shrimp and Chorizo Paella"
                         subheader="September 14, 2016"
                       />
                       <CardMedia
                         className={classes.media}
                         image={tf}
                         title="Contemplative Reptile"
                       />
                       <CardContent>
                         <Typography component="p">
                           This impressive paella is a perfect party dish and a fun meal to cook together with
                           your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                         </Typography>
                       </CardContent>
                       <CardActions className={classes.actions} disableActionSpacing>
                         <IconButton aria-label="Add to favorites">
                           <FavoriteIcon />
                         </IconButton>
                         <IconButton aria-label="Share">
                           <ShareIcon />
                         </IconButton>
                         <IconButton
                           className={classnames(classes.expand, {
                             [classes.expandOpen]: this.state.expanded,
                           })}
                           onClick={this.handleExpandClick}
                           aria-expanded={this.state.expanded}
                           aria-label="Show more"
                         >
                           <ExpandMoreIcon />
                         </IconButton>
                       </CardActions>
                       <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                         <CardContent>
                           <Typography paragraph variant="body2">
                             Method:
                           </Typography>
                           <Typography paragraph>
                             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                             minutes.
                           </Typography>
                           <Typography paragraph>
                             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                             heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                             browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                             chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                             salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                             minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                           </Typography>
                           <Typography paragraph>
                             Add rice and stir very gently to distribute. Top with artichokes and peppers, and
                             cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
                             Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into
                             the rice, and cook again without stirring, until mussels have opened and rice is
                             just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)
                           </Typography>
                           <Typography>
                             Set aside off of the heat to let rest for 10 minutes, and then serve.
                           </Typography>
                         </CardContent>
                       </Collapse>
                     </Card>
                   </div>
        )
    }
}
````