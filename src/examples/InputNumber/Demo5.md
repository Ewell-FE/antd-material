#  小数
## 和原生的数字输入框一样，value 的精度由 step 的小数位数决定

````jsx
import InputNumber from '@/components/InputNumber'
export class Demo5md extends Component {
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
                 <InputNumber min={0} max={10} step={0.1} onChange={this.onChange}/>
            </div>
        )
    }
}

````