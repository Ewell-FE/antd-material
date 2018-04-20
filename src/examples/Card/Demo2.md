#  媒体
## 使用图像加强内容的卡片示例。
````jsx
import qw from '@/routers/assets/contemplative_reptile.jpg'
const styles2 = theme => ({
 card: {
     maxWidth: 345,
 },
 media: {
   height: 200,
 }
})
@withStyles(styles2)
export class <%=component%> extends Component {

    render() {
      const { classes } = this.props;
      return (
              <div>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.media}
                      image={qw}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="headline" component="h2">
                        Lizard
                      </Typography>
                      <Typography component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                      <Button size="small" color="primary">
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </div>
        )
    }
}
````