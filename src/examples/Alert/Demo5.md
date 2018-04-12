#  平滑的卸载
## 平滑、自然的卸载提示,Alert动画关闭后调用回调函数


````jsx
import Alert from '@/components/Alert'
const onAfterClose = function () {
    console.log('I was closed after transition.');
};
export class <%=component%> extends Component {
    render() {
        return (
        <Alert
            message="Success Text afterClose"
            description="Success afterClose Success afterClose Success afterClose Success afterClose Success afterClose Success afterClose"
            type="success"
            closable
            afterClose={onAfterClose}
        />
        )
    }
}
````