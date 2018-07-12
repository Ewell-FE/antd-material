#  向上展开
## 想上展开建议


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
            style={{ width: '100%' }}
            onChange={this.onChange}
            suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
            onSelect={onSelect}
            placement="top"
          />
       );
    }
}
````