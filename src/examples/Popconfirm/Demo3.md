#  位置
## 位置有十二个方向。如需箭头指向目标元素中心，可以设置 arrowPointAtCenter。



````jsx
import Popconfirm from 'antd-material/core/Popconfirm'
import Message from 'antd-material/core/Message'
import Button from 'antd-material/core/Button'

export class <%=component%> extends Component {
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
        confirm =()=> {
          Message.info('Click on Yes.');
        }
    render() {
    const text = 'Are you sure delete this task?';
        return (
            <div style={{minHeight:'200px',display:'flex',flexFlow:'wrap',padding:'0 120px'}}>
            {
                this.positions.map((item,index)=>{
                    return(
                        <div style={this.styles[item]} key={index}>
                             <Popconfirm
                               placement={item}
                               title={text}
                               onConfirm={this.confirm}
                               >
                                   <Button>
                                   {item}
                                   </Button>
                               </Popconfirm>
                        </div>
                    )
                })
            }

            </div>
        )
    }
}
````