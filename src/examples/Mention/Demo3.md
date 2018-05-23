#  受控模式
## 受控模式.


````jsx
import Mention from '@/components/Mention'
const toContentStates = Mention.toContentState;

export class <%=component%> extends Component {
     state = {
        value: toContentStates('@afc163'),
      }

      componentDidMount() {
        //console.log(this.mention)
        //this.mention.focus();
      }
      handleChange = (editorState) => {
        this.setState({
          value: editorState,
        });
      }

    render() {
       return (
        <Mention
                ref={ele => this.mention = ele}
                suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
                value={this.state.value}
                onChange={this.handleChange}
              />
       );
    }
}
````