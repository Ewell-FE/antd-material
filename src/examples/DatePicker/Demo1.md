#  基本
## 最简单的用法，在浮层中可以选择或者输入日期。


````jsx
import DatePicker from '@/components/DatePicker'

const {MonthPicker, RangePicker} = DatePicker

function onChange(date, dateString) {
  console.log(date, dateString);
}

export class <%=component%> extends Component {
    render() {

        onChange =(date, dateString) => {
            console.log(date, dateString);
        }

        return (
            <div>
                <DatePicker />
                <br />
                <br />
                <MonthPicker onChange={this.onChange} placeholder="Select month" />
                <br />
                <br />
                <RangePicker onChange={this.onChange} />
            </div>
        )
    }
}
````