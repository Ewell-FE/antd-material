#
##

````jsx
import Button from '@/components/Button'
import Icon from '@/components/Icon'

export class <%=component%> extends Component {
    render() {
        return (
            <div>
                 <Button><Icon type="music"></Icon></Button>
                 <Button><Icon type="download"></Icon> Download</Button>
                 <Button> heart<Icon type="heart"></Icon></Button>
            </div>
        )
    }
}
````