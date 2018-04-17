#  自定义关闭
## 可以自定义关闭，自定义的文字会替换原先的关闭 Icon。


````jsx
import Alert from '@/components/Alert'

export class <%=component%> extends Component {
    render() {
        return (
             <div>
                <Alert
                    message="Success Text"
                    description="Success Description Success Description Success Description Success Description Success Description Success Description"
                    type="success"
                    closeText="Close Now"
                    affix={false}

                />
                <Alert
                    message="warn Text"
                    description="warn Description warn Description warn Description warn Description warn Description warn Description"
                    type="warn"
                    closeText="Close Now"
                    affix={false}
                />
                <Alert
                    message="info Text"
                    description="info Description info Description info Description info Description info Description info Description"
                    type="info"
                    closeText="Close Now"
                    affix={false}
                />
                <Alert
                    message="Error Text"
                    description="Error Description Error Description Error Description Error Description Error Description Error Description"
                    type="error"
                    closeText="Close Now"
                    affix={false}
                />
             </div>
        )
    }
}
````