#
##

````jsx
import Button from '@/components/Button'
import Icon from '@/components/Icon'
const ButtonGroup = Button.Group

export class <%=component%> extends Component {
    render() {
        return (
            <div>
                <Button size="small" type="Primary">small</Button>
                <Button size="medium" type="Primary">medium</Button>
                <Button size="large" type="Primary">large</Button>
            </div>
        )
    }
}
````