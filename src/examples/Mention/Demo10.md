#  自定义触发字符
## 通过 prefix 属性自定义触发字符。默认为 @, 可以定义为数组。


````jsx
import Mention from '@/components/Mention'
let usersData = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];
let tags = ['1.0', '2.0', '3.0'];

export class <%=component%> extends Component {
     state = {
       suggestions: [],
      };
      onChange = (editorState) => {
        console.log(toStrings(editorState));
      }

       onSelect = (suggestion) => {
        console.log('onSelect', suggestion);
      }

      onSearchChange = (value, trigger) => {
        console.log('onSearchChange', value, trigger);
        const dataSource = trigger === '@' ? usersData : tags;
        this.setState({
          suggestions: dataSource.filter(item => item.indexOf(value) !== -1),
        });
      }
    render() {
       return (
           <Mention
                   style={{ width: '100%' }}
                   onChange={this.onChange}
                   placeholder="input @ to mention people, # to mention tag"
                   prefix={['@', '#']}
                   onSearchChange={this.onSearchChange}
                   suggestions={this.state.suggestions}
                   onSelect={this.onSelect}
                 />
       );
    }
}
````