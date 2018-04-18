#  顶部公告
## 页面顶部通告形式，默认有图标且type 为 'warning'。


````jsx
import Alert from '@/components/Alert'
import Button from '@/components/Button'

export class <%=component%> extends Component {
    constructor(props) {
            super(props);

            this.state={
                alert1:false,
                alert2:false,
                alert3:false
            }
        }
    render() {
        const {alert1,alert2,alert3}=this.state
        return (
             <div>
                 <Button type="Primary" onClick={()=>{this.setState({alert1:true})}}>默认Type为warning且Icon显示</Button>
                 {alert1?
                     <Alert
                         message="banner Text"
                         description="banner Description banner Description banner Description banner Description banner Description banner Description"
                         closable
                         onClose={onClose}
                         banner
                         width={350}
                     />:''
                  }
                 <Button type="Primary" onClick={()=>{this.setState({alert2:true})}}>自定义Type为error</Button>
                 {alert2?
                     <Alert
                         message="Error banner Text"
                         description="Error banner Description Error banner Description Error banner Description Error Description Error Description Error Description"
                         type="error"
                         closable
                         onClose={onClose}
                         banner
                         width={350}
                     />:''
                 }
                 <Button type="Primary" onClick={()=>{this.setState({alert3:true})}}>自定义Type为error且Icon隐藏</Button>
                 {alert3?
                     <Alert
                         message="Error banner Text & no Icon"
                         description="Error banner Description Error banner Description Error banner Description Error Description Error Description Error Description"
                         type="error"
                         closable
                         onClose={onClose}
                         showIcon={false}
                         banner
                         width={350}
                     />
                    :''
                    }

             </div>
        )
    }
}
````