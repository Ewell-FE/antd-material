#  基本
## 最简单的用法，在浮层中可以选择或者输入日期。


````jsx
import DatePicker from '@/components/DatePicker'

const {MonthPicker, RangePicker, WeekPicker} = DatePicker

export class <%=component%> extends Component {

    onChange =(date, dateString) => {
        console.log(date, dateString);
    }

    render() {
        return (
            <div style={{textAlign:'left'}}>
                <DatePicker style={{width:'200px'}} onChange={this.onChange}/>
                <br />
                <br />
                <MonthPicker style={{width:'200px'}} onChange={this.onChange} placeholder="Select month" />
                <br />
                <br />
                <RangePicker style={{width:'400px'}} onChange={this.onChange} />
                <br />
                <br />
                <WeekPicker  style={{width:'200px'}} placeholder="please select week" onChange={this.onChange} />
            </div>
        )
    }
}
````