#  格式化展示
## 通过 formatter 格式化数字，以展示具有具体含义的数据，往往需要配合 parser 一起使用。


````jsx
import InputNumber from 'antd-material/core/InputNumber'
export class Demo4md extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onChange = (value) => {
        console.log('changed', value);
    }

    render() {
        return (
            <div>
                <InputNumber placeholder="Basic usage" step={3} min={1} max={1000} defaultValue={3}
                             formatter={value => '$' + value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                             onChange={this.onChange}/>
                <InputNumber defaultValue={100} min={0} max={100} formatter={value => value + '%'}
                             parser={value => value.replace('%', '')}
                             onChange={this.onChange}
                />
            </div>
        )
    }
}

````