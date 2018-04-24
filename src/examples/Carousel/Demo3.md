#  渐显
## 切换效果为渐显。


````jsx
import Carousel from '@/components/Carousel'
import {withStyles} from 'material-ui/styles';
const style3 = theme =>{
    return{
        picture:{
            background:'#364d79',
            color:'#fff',
            height:160,
            lineHeight:'160px'

        }
    }
}
@withStyles(style3,{name:'MuiCarouselAnt'})
export class <%=component%> extends Component {
    constructor(props){
        super(props)
    }
    render() {
    const {classes} = this.props
        return (
              <Carousel effect="fade">
                 <div className={classes.picture}>1</div>
                 <div className={classes.picture}>2</div>
                 <div className={classes.picture}>3</div>
                 <div className={classes.picture}>4</div>
              </Carousel>
        )
    }
}
````