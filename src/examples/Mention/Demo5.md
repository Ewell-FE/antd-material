#  无效或只读
## 通过 disabled 属性设置是否生效。通过 readOnly 属性设置是否只读。


````jsx
import Mention from 'antd-material/core/Mention'
const toStringMention = Mention.toStrings;

export class <%=component%> extends Component {
      onChange = (editorState) => {
        console.log(toStringMention(editorState));
      }

    render() {
       const users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];
       return (
            <div>
              <div style={{ marginBottom: 10 }}>
                <Mention
                  style={{ width: '100%' }}
                  onChange={this.onChange}
                  placeholder="this is disabled Mention"
                  suggestions={users}
                  disabled
                />
              </div>
              <Mention
                style={{ width: '100%' }}
                onChange={this.onChange}
                placeholder="this is readOnly Mention"
                suggestions={users}
                readOnly
              />
            </div>
       );
    }
}
````