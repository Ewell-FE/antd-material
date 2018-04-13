#  位置
## 位置有十二个方向。



````jsx
import Popover from '@/components/Popover'
import Button from '@/components/Button'

export class <%=component%> extends Component {
    constructor(props) {
        super(props);
    }
      positions=['topLeft','top','topRight','leftTop','rightTop','left','right',
                 'leftBottom','rightBottom','bottomLeft','bottom','bottomRight']
      styles={
          topLeft:{marginBottom:'15px',width:'33.3%',textAlign:'center'},
          top:{marginBottom:'15px',width:'33.3%',textAlign:'center'},
          bottom:{marginBottom:'15px',width:'33.3%',textAlign:'center'},
          topRight:{marginBottom:'15px',width:'33.3%',textAlign:'center'},
          rightTop:{marginBottom:'15px',width:'50%',textAlign:'right'},
          right:{marginBottom:'15px',width:'50%',top:'50%',textAlign:'right'},
          left:{marginBottom:'15px',width:'50%',top:'50%',textAlign:'left'},
          rightBottom:{marginBottom:'15px',width:'50%',textAlign:'right'},
          bottomRight:{marginBottom:'15px',width:'33.3%',textAlign:'center'},
          bottomLeft:{marginBottom:'15px',width:'33.3%',textAlign:'center'},
          leftBottom:{marginBottom:'15px',width:'50%',textAlign:'left'},
          leftTop:{marginBottom:'15px',width:'50%',textAlign:'left'}
        }
    render() {
        console.log(this.state)
        let self=this;
        return (
            <div style={{minHeight:'200px',display:'flex',flexFlow:'wrap',padding:'0 120px'}}>
            {
                this.positions.map((item,index)=>{
                    return(
                        <div style={this.styles[item]} key={index}>
                             <Popover
                               placement={item}
                               title={<div>this is title</div>}
                               content={<div>this is content</div>}
                               trigger='click'
                               >
                                   <Button>
                                   {item}
                                   </Button>
                               </Popover>
                        </div>
                    )
                })
            }

            </div>
        )
    }
}
````