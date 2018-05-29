# 大小
## 三种大小的选择框，当 size 分别为 large 和 small 时，输入框高度为 40px 和 24px ，默认高度为 32px。
````jsx
import Select from '@/components/Select'
import Radio  from '@/components/Radio'

export class <%=component%> extends Component {
    constructor(props){
        super(props)
        this.state={
            size:'default'
        }
    }
    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    }
    render() {
        const children4 = [];
        const { size } = this.state;
            for (let i = 10; i < 36; i++) {
                 children4.push({ value:i.toString(36) + i,label:i.toString(36) + i});
            }
        return (
             <div>
                 <Radio.Group value={size} onChange={this.handleSizeChange}>
                       <Radio.Button value="large">Large</Radio.Button>
                       <Radio.Button value="default">Default</Radio.Button>
                       <Radio.Button value="small">Small</Radio.Button>
                 </Radio.Group>
                 <br /><br />
                 <Select placeholder='请选择' size={size} options={children4}/>
                 <br /> <br />
                 <Select placeholder='请选择'  multi={true} size={size} width={300} options={children4}/>
             </div>
        )
    }
}
````