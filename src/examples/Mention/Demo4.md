#  多行
## 多行模式，多行模式必须指定高度。


````jsx
import Mention from 'antd-material/core/Mention'
const toStringMention = Mention.toStrings;

export class <%=component%> extends Component {
      onChange = (editorState) =>{
        console.log(toStringMention(editorState));
      }

    render() {
       return (
        <Mention
            style={{ width: '100%', height: 100 }}
            onChange={this.onChange}
            suggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}
            multiLines
          />
       );
    }
}
````