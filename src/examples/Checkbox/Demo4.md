#  Checkbox 组
## 方便的从数组生成 Checkbox 组。


````jsx
import Checkbox from '@/components/Checkbox';

export class <%=component%> extends Component {
    onChange(checkValues){
        console.log(checkValues)
    }

    render() {
        const options=['Red','Yellow','Blue'];
        const optionsObj=[
            {value:'Red',label:'Red'},
            {value:'Yellow',label:'Yellow'},
            {value:'Blue',label:'Blue'}
        ];
        const optionswidthdisabled=[
            {value:'Red',label:'Red'},
            {value:'Yellow',label:'Yellow'},
            {value:'Blue',label:'Blue',disabled:true}
        ];
        return (
            <div>
                <Checkbox.Group 
                    options={options}
                    defaultValue={['Red']}
                    onChange={this.onChange}
                />
                <Checkbox.Group 
                    options={optionsObj} 
                    defaultValue={['Yellow']}
                    onChange={this.onChange}
                />
                <Checkbox.Group 
                    options={optionswidthdisabled} 
                    defaultValue={['Blue','Red']}
                    onChange={this.onChange}
                />
                <Checkbox.Group 
                    options={optionsObj} 
                    defaultValue={['Yellow']}
                    onChange={this.onChange}
                    disabled
                />
            </div> 
        )
    }
}
````