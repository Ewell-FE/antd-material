#  基本
## 最简单的用法。


````jsx
import Mention from 'antd-material/core/Mention'
const { toStrings, toContentState } = Mention;

export class <%=component%> extends Component {
    onChange = (contentState) =>{
        console.log(toStrings(contentState));
    }

     onSelect = (suggestion) => {
       console.log('onSelect', suggestion);
    }
    render() {
        return (
            <Mention
                style={{ width: '100%' }}
                onChange={this.onChange}
                defaultValue={toContentState('@afc163')}
                suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
                onSelect={this.onSelect}
              />
        )
    }
}
````