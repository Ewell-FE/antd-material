/**
 * Created by lilei on 2018/3/21.
 */
import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Button from '@/components/Button'
import Icon from '@/components/Icon'

const ButtonGroup = Button.Group
console.log(ButtonGroup)
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="title" gutterBottom>
                    按钮样式
                </Typography>
                <Button type="Primary" disabled>Primary</Button>
                <Button style={{marginLeft:10}}>Default</Button>
                <Button style={{marginLeft:10}} type="Dashed">Dashed</Button>
                <Button style={{marginLeft:10}} type="Danger">Danger</Button>
                <br />
                <br />
                <br />
                <Typography variant="title" gutterBottom>
                    按钮大小
                </Typography>
                <Button size="small" type="Primary">small</Button>
                <Button size="medium" type="Primary" style={{marginLeft:10}}>medium</Button>
                <Button size="large" type="Primary" style={{marginLeft:10}}>large</Button>
                <br />
                <br />
                <br />
                <Typography variant="title" gutterBottom>
                    图标按钮
                </Typography>
                <Button><Icon type="music"></Icon></Button>
                <Button style={{marginLeft:10}}><Icon type="download"></Icon> Download</Button>
                <Button style={{marginLeft:10}}> heart<Icon type="heart"></Icon></Button>
                <br />
                <br />
                <br />
                <Typography variant="title" gutterBottom>
                    按钮组
                </Typography>
                <ButtonGroup>
                    <Button><Icon type="music"></Icon></Button>
                    <Button><Icon type="download"></Icon> Download</Button>
                    <Button> heart<Icon type="heart"></Icon></Button>
                </ButtonGroup>
            </div>
        )
    }
}