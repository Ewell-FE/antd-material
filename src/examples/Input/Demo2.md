#  搜索框
## 带有搜索图表的输入框,并利用 withRef 获取真实dom元素


````jsx
import Input from '@/components/Input'
import Icon from '@/components/Icon'

const Search = Input.Search

export class <%=component%> extends Component {
    constructor(props) {
            super(props)
    }

    onPressEnter(){
        console.log(this.input.value)
    }

    render() {
        return (
            <div>
                <Input
                    style={{width: 200}}
                    withRef={(e)=>{this.input = e}}
                    onPressEnter={()=>{this.onPressEnter()}}
                    suffix={<Icon type="search" />}
                    placeholder="input search text"/>
                 <br />
                 <br />
                 <Search onSearch={e=>console.log(e)} style={{width:200}}/>
                 <br />
                 <br />
                 <Search onSearch={e=>console.log(e)} style={{width:200}} enterButton={true}/>

            </div>
        )
    }
}
````