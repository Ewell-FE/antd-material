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
            <div>
                <DatePicker style={{width:'200px'}} onChange={this.onChange}/>
                <br />
                <br />
                <MonthPicker onChange={this.onChange} placeholder="Select month" />
                <br />
                <br />
                <RangePicker onChange={this.onChange} />
                <br />
                <br />
                <WeekPicker placeholder="please select week" onChange={this.onChange} />
            </div>
        )
    }
}
````