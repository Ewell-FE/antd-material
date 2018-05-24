#  默认值
## 默认值通过数组的方式指定。


````jsx
import Cascader from '@/components/Cascader'

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
             <Cascader  defaultValue={['zhejiang', 'hangzhou', 'xihu']}  options={options} onChange={this.onChange} />
        )
    }
}
````