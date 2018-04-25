#  位置
## 位置有 12 个方向。


````jsx
import Tooltip from '@/components/Tooltip'
import Button from '@/components/Button'

export class <%=component%> extends Component {
    render() {
    const text = <span>prompt text</span>;
    const buttonWidth = 70
        return (
            <div>
                <div style={{ whiteSpace: 'nowrap' }}>
                  <Tooltip placement="top-start" title={text}>
                    <Button>TS</Button>
                  </Tooltip>
                  <Tooltip placement="top" title={text}>
                    <Button>Top</Button>
                  </Tooltip>
                  <Tooltip placement="top-end" title={text}>
                    <Button>TE</Button>
                  </Tooltip>
                </div>
                <div style={{ width: buttonWidth, float: 'left',marginLeft: buttonWidth*2}}>
                  <Tooltip placement="left-start"  title={text}>
                    <Button>LS</Button>
                  </Tooltip>
                  <Tooltip placement="left" title={text}>
                    <Button>Left</Button>
                  </Tooltip>
                  <Tooltip placement="left-end" title={text}>
                    <Button>LE</Button>
                  </Tooltip>
                </div>
                <div style={{ width: buttonWidth, float: 'right', marginRight: buttonWidth * 2}}>
                  <Tooltip placement="right-start"  title={text}>
                    <Button>RS</Button>
                  </Tooltip>
                  <Tooltip placement="right" title={text}>
                    <Button>Right</Button>
                  </Tooltip>
                  <Tooltip placement="right-end" title={text}>
                    <Button>RE</Button>
                  </Tooltip>
                </div>
                <div style={{ clear: 'both', whiteSpace: 'nowrap' }}>
                  <Tooltip placement="bottom-start" title={text}>
                    <Button>BS</Button>
                  </Tooltip>
                  <Tooltip placement="bottom" title={text}>
                    <Button>Bottom</Button>
                  </Tooltip>
                  <Tooltip placement="bottom-end" title={text}>
                    <Button>BE</Button>
                  </Tooltip>
                </div>
              </div>
        )
    }
}
````