#  自定义已选项
## 例如给最后一项加上邮编链接。


````jsx
import Cascader from '@/components/Cascader'

export class <%=component%> extends Component {

    onChange(value) {
      console.log(value);
    }
    handleAreaClick(e, label, option) {
      e.stopPropagation();
      console.log('clicked', label, option);
    }
    displayRender = (labels, selectedOptions) => labels.map((label, i) => {
      const option = selectedOptions[i];
      if (i === labels.length - 1) {
        return (
          <span key={option.value}>
            {label} (<a onClick={e => this.handleAreaClick(e, label, option)}>{option.code}</a>)
          </span>
        );
      }
      return <span key={option.value}>{label} / </span>;
    });
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
              code: 752100,
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
              label: 'Zhong Hua Men',
              code: 453400,
            }],
          }],
        }];
        return (
             <Cascader
             options={options}
             onChange={this.onChange}
             defaultValue={['zhejiang', 'hangzhou', 'xihu']}
             displayRender={this.displayRender}
             style={{ width: '100%' }}/>
        )
    }
}
````