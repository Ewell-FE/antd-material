#  建议渲染父节点
## 指定提示渲染的父节点


````jsx
import Mention from 'antd-material/core/Mention'
import Button from 'antd-material/core/Button'
import Popover from 'antd-material/core/Popover'
export class <%=component%> extends Component {
    state = {
        visible: false,
    }
    getSuggestionContainer = () => {
        return this.popover.dom.parentNode.nextSibling;
     }
     onChange = (editorState) =>{
       console.log(toStrings(editorState));
     }
    onSelect = (suggestion) => {
      console.log('onSelect', suggestion);
    }
    render() {
       const mention = (
             <Mention
               style={{ width: '100%' }}
               onChange={this.onChange}
               defaultValue={toContentState('@afc163')}
               suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
               onSelect={this.onSelect}
               getSuggestionContainer={this.getSuggestionContainer}
             />
       );
       return (
            <div className="popoverWrappper">
                 <Popover content={mention} className={'popover'}
                         title="Title"
                         placement='top'
                         trigger='click'
                         visible={this.state.visible}
                         withRef={ele=>this.popover = ele}
                         container={()=>{return document.getElementsByClassName('popoverWrappper')[0]}}>
                   <Button type="Primary">Click Me</Button>
                 </Popover>
            </div>
       );
    }
}
````