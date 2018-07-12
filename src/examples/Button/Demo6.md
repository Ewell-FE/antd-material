#  加载中
## 添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态


````jsx
import Button from 'antd-material/core/Button'

export class <%=component%> extends Component {
    constructor(props) {
            super(props)
            this.state={
                loading:false
            }
    }

    clickMe(){
        this.setState({
                    loading:true
        })
        setTimeout(()=>{
            this.setState({
                loading:false
            })
        },1000)
    }

    render() {
        return (
            <div>
                <Button type="Primary" size="small" loading={true}>Primary</Button>
                <Button loading={true}>Primary</Button>
                <Button type="Danger" onClick={()=>{this.clickMe()}} size="large" loading={this.state.loading}>click Me!</Button>
            </div>
        )
    }
}
````