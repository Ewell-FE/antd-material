#  基本
## 基本标签的用法，可以通过添加 closable 变为可关闭标签。可关闭标签具有 onClose afterClose 两个事件。

````jsx
import Tag from 'antd-material/core/Tag'
export class Demo1md extends Component {
    render() {
        return (
            <div>
                <Tag>Tag</Tag>
                <Tag><a href="https://github.com/ant-design/ant-design/issues/1862">Link</a></Tag>
                <Tag closable={true} afterClose={(e) => {
                }}>可关闭</Tag>
                <Tag closable={true} disabled={true}>禁止关闭</Tag>
            </div>
        )
    }
}
````