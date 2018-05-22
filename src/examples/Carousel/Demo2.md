#  垂直
## 垂直显示


````jsx
import Carousel from '@/components/Carousel'
import {withStyles} from '@material-ui/core/styles';
const style2 = theme =>{
    return{
        picture:{
            background:'#364d79',
            color:'#fff',
            height:160,
            lineHeight:'160px'
        }
    }
}
@withStyles(style2,{name:'MuiCarouselAnt'})
export class <%=component%> extends Component {

    render() {
    const {classes} = this.props
        return (
              <Carousel  vertical={true}>
                 <div className={classes.picture}>1</div>
                 <div className={classes.picture}>2</div>
                 <div className={classes.picture}>3</div>
                 <div className={classes.picture}>4</div>
              </Carousel>
        )
    }
}
````