#  搜索
## 可以直接搜索选项并选择。


````jsx
import Cascader from '@/components/Cascader';
function filter(inputValue, path) {
  return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
}
export class <%=component%> extends Component {

    onChange(value, selectedOptions) {
      console.log(value, selectedOptions);
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
            }, {
              value: 'xiasha',
              label: 'Xia Sha',
              disabled: true,
            }],
          }],
        }, {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [{
            value: 'nanjing',
            label: 'Nanjing',
            children: [{
              value: 'zhonghuamen',
              label: 'Zhong Hua men',
            },
            {
              value: 'zhonghuamen2',
              label: 'Zhong Hua men2',
            }],
          }],
        }];
        return (
             <Cascader
              options={options}
              onChange={this.onChange}
              placeholder="Please select"
              showSearch={{filter}}
              disabled
              />
        )
    }
}
````