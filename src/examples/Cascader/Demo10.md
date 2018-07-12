#  自定义字段名
## 自定义字段名。


````jsx
import Cascader from 'antd-material/core/Cascader'

export class <%=component%> extends Component {

    onChange(value) {
      console.log(value);
    }
    render() {
    const options =  [{
                      code: 'zhejiang',
                      name: 'Zhejiang',
                      items: [{
                        code: 'hangzhou',
                        name: 'Hangzhou',
                        items: [{
                          code: 'xihu',
                          name: 'West Lake',
                        }],
                      }],
                    }, {
                      code: 'jiangsu',
                      name: 'Jiangsu',
                      items: [{
                        code: 'nanjing',
                        name: 'Nanjing',
                        items: [{
                          code: 'zhonghuamen',
                          name: 'Zhong Hua Men',
                        }],
                      }],
                    }];
        return (
             <Cascader filedNames={{ label: 'name', value: 'code', children: 'items' }} options={options} placeholder="Please select"  onChange={this.onChange} />
        )
    }
}
````