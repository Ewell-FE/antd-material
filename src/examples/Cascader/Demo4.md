#  移入展开
## 通过移入展开下级菜单，点击完成选择。


````jsx
import Cascader from '@/components/Cascader'

export class <%=component%> extends Component {

    onChange(value) {
      console.log(value);
    }
    displayRender(label) {
      return label[label.length - 1];
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
             <Cascader
             options={options}
             expandTrigger="hover"
             displayRender={this.displayRender}
             onChange={this.onChange} />
        )
    }
}
````