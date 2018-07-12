#  大小
## 不同大小的级联选择器。


````jsx
import Cascader from 'antd-material/core/Cascader'

export class <%=component%> extends Component {

    onChange(value) {
      console.log(value);
    }
    render() {
        const options = [{
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [{
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [{
              value: 'xihu',
              label: 'West Lake',
            }],
          }],
        }, {
          value: 'jiangsu',
          label: 'Jiangsu',
          disabled: true,
          children: [{
            value: 'nanjing',
            label: 'Nanjing',
            children: [{
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            }],
          }],
        }, {
           value: 'fujian',
           label: 'fujian',
           children: [{
             value: 'xiamen',
             label: 'xiamen',
             children: [{
               value: 'gulanyu',
               label: 'Gu Lan Yu',
             }],
           }],
         }];
        return (
             <div>
                 <Cascader size="large" options={options} onChange={this.onChange} /><br /><br />
                 <Cascader options={options} onChange={this.onChange} /><br /><br />
                 <Cascader size="small" options={options} onChange={this.onChange} /><br /><br />
             </div>

        )
    }
}
````