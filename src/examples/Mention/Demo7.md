#  异步加载
## 匹配内容列表为异步返回


````jsx
import Mention from 'antd-material/core/Mention'
const toStringMention = Mention.toStrings;
const users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];
export class <%=component%> extends Component {
      state = {
          suggestions: [],
          loading: false,
        }
        fetchSuggestions = (value, callback) => {
          setTimeout(() => {
            callback(users.filter(item => item.indexOf(value) !== -1));
          }, 500);
        }
        onSearchChange = (value) => {
          this.fetchSuggestions(value, (suggestions) => {
            this.setState({
              suggestions,
              loading: false,
            });
          });
          this.setState({
            loading: true,
          });
        }

    render() {
       const { suggestions, loading } = this.state;
       return (
            <Mention
               style={{ width: '100%' }}
               loading={loading}
               suggestions={suggestions}
               onSearchChange={this.onSearchChange}
             />
       );
    }
}
````