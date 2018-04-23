#  多彩标签
## 我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。

````jsx
import Tag from '@/components/Tag'
export class Demo3md extends Component {
    render() {
        return (
            <div>
                <Tag color='red'>red</Tag>
                <Tag color='green'>green</Tag>
                <Tag color='blue'>blue</Tag>
                <Tag color='orange'>orange</Tag>
            </div>
        )
    }
}
````