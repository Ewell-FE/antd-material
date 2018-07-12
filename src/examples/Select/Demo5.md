# 搜索框
## 自动补全和远程数据结合
````jsx
import Select from 'antd-material/core/Select';
import querystring from 'querystring';
const Option = Select.Option

let timeout;
let currentValue;

function fetchData(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
      var str = querystring.encode({
        code: 'utf-8',
        q: value,
      });
    fetch("https://suggest.taobao.com/sug?"+  str)
      .then(response => response.json())
      .then((d) => {
        if (currentValue === value) {
          var result = d.result;
          var data = [];
          result.forEach((r) => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

export class <%=component%> extends Component {
    state = {
        data: [],
        value: ''
    }

    handleChange = (value)=> {
        this.setState({ value });
        fetchData(value, data => this.setState({ data }));
    }
    render() {
        const options = this.state.data.map(d => <Option key={d.value}>{d.text}</Option>);
            return (
              <Select
                style={{ width: 200 }}
                combobox
                value={this.state.value}
                defaultActiveFirstOption={false}
                showArrow={false}
                filterOption={false}
                onChange={this.handleChange}
                placeholder={'请输入'}
              >
                {options}
              </Select>
            )
    }
}
````