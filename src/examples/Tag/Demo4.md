#  热门标签
## 可实现类似 Checkbox 的效果，点击切换选中效果。

````jsx
import Tag from '@/components/Tag'
const CheckableTag=Tag.CheckableTag
export class Demo4md extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: ['Movies', 'Books', 'Music'],
            selectedTags: [],//选中的标签
        }
    }

    handleChecked = (tag, checked) => {
        const {selectedTags} = this.state;
        const nextSelectedTags = checked ?
            [...selectedTags, tag] :
            selectedTags.filter(t => t !== tag);
        this.setState({selectedTags: nextSelectedTags});
    }

    render() {
        const {tags, selectedTags} = this.state
        return (
            <div>
                {
                    tags.map((tag, i) => {
                        return (
                            <CheckableTag key={i} checked={selectedTags.indexOf(tag) > -1}
                                          onChange={(checked) => this.handleChecked(tag, checked)}>{tag}</CheckableTag>
                        )
                    })
                }
            </div>
        )
    }
}
````