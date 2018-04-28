#  动态添加和删除
## 用数组生成一组标签，可以动态添加和删除，通过监听删除动画结束的事件 afterClose 实现。

````jsx
import Tag from '@/components/Tag'
import Input from '@/components/Input'
import {withStyles} from 'material-ui/styles';
const styles = theme => ({
    root: {
        display: 'inline-block',
        "& > input,& > span": {
            width: 100,
            verticalAlign: 'middle',
        }
    }
})

@withStyles(styles, {name: 'MuiInput-ant-demo'})
export class Demo2md extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: ['Unremovable', 'Tag 2', 'Tag 3'],
            inputVisible: false,
            inputValue: '',
        }
    }

    //添加
    onAdd = () => {
        this.setState({inputVisible: true})
    }

    onChange = (e) => {
        const {tags} = this.state
        if(e.target.value){
               tags.push(e.target.value)
        }
        this.setState({tags,inputVisible: false})
    }

    render() {
        const {tags, inputVisible} = this.state
        return (
            <div>
                {
                    tags.map((tag, key) => {
                        return (
                            <Tag closable={key !== 0 && true}
                                 afterClose={(e) => {
                                     console.log(e)
                                 }}
                                 key={key}>{tag}</Tag>
                        )
                    })
                }
                {
                    !inputVisible && <Tag onClick={() => this.onAdd()}>添加</Tag>
                }
                {
                    inputVisible && <div className={this.props.classes.root}>
                        <Input size="small" placeholder="small size" onBlur={(e) => this.onChange(e)}/>
                        <br/>
                    </div>

                }
            </div>
        )
    }
}
````