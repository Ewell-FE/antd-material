#  基本
## 默认选中第一项。

````jsx
import Tabs from '@/components/Tabs'
export class Demo1md extends Component {
    constructor(props) {
        super(props);
        this.state = {
             
        }
    }

 

    render() {
        const {tags, selectedTags} = this.state
        return (
            <div>
                 <Tabs></Tabs>
            </div>
        )
    }
}
````