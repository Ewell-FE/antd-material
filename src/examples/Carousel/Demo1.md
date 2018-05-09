#  基本
## 最简单的用法。


````jsx
import Carousel from '@/components/Carousel'
import {withStyles} from 'material-ui/styles';
const style = theme =>{
    return{
        picture:{
            background:'#364d79',
            color:'#fff',
            height:160,
            lineHeight:'160px'
        }
    }
}
@withStyles(style,{name:'MuiCarouselAnt'})
export class <%=component%> extends Component {
    render() {
    const {classes} = this.props
        return (
              <Carousel>
                 <div className={classes.picture}>1</div>
                 <div className={classes.picture}>2</div>
                 <div className={classes.picture}>3</div>
                 <div className={classes.picture}>4</div>
              </Carousel>
        )
    }
}
````