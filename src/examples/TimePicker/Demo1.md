#  基本
## 点击 TimePicker，然后可以在浮层中选择或者输入某一时间。


````jsx
import TimePicker from 'antd-material/core/TimePicker'

export class <%=component%> extends Component {

    onChange =(date, dateString) => {
        console.log(date, dateString);
    }

    render() {
        return (
            <div style={{textAlign:'left'}}>
                <TimePicker style={{width:'200px'}} onChange={this.onChange}/>
            </div>
        )
    }
}
````