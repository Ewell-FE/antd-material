import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Api from './Api'
import Title from './Title'
import Templete from '../Template'

import demo1 from './demo1';import demo2 from './demo2';import Demo3 from './Demo3';import Demo4 from './Demo4';

export default class App extends Component {
    render() {
        return (
            <div style={{width:900,padding:'0 24px',margin:'0 auto'}}>
                <Title />
                
                     <Typography variant="display1" gutterBottom>
                                    按钮类型
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                    按钮有四种类型
                                </p>
                    <Templete code={`
import React, {Component} from 'react';
import Button from '@/components/Button'
export default class App extends Component {
    render() {
        return (
            <div>
                <Button type="Primary" disabled>Primary</Button>
                <Button>Default</Button>
                <Button type="Dashed">Dashed</Button>
                <Button type="Danger">Danger</Button>
            </div>
        )
    }
}`}>
                        <demo1/>
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                    按钮大小
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                    按钮有四种类型
                                </p>
                    <Templete code={`

import React, {Component} from 'react';
import Button from '@/components/Button'

export default class App extends Component {
    render() {
        return (
            <div>
                <Button size="small" type="Primary">small</Button>
                <Button size="medium" type="Primary">medium</Button>
                <Button size="large" type="Primary">large</Button>
            </div>
        )
    }
}`}>
                        <demo2/>
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                    图表按钮
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                    按钮有四种类型
                                </p>
                    <Templete code={`
import React, {Component} from 'react';
import Button from '@/components/Button'
import Icon from '@/components/Icon'

export default class App extends Component {
    render() {
        return (
            <div>
                <Button><Icon type="music"></Icon></Button>
                <Button><Icon type="download"></Icon> Download</Button>
                <Button> heart<Icon type="heart"></Icon></Button>
            </div>
        )
    }
}`}>
                        <Demo3/>
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                    按钮组
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                    按钮有四种类型
                                </p>
                    <Templete code={`
import React, {Component} from 'react';
import Button from '@/components/Button'

import Icon from '@/components/Icon'
const ButtonGroup = Button.Group
export default class App extends Component {
    render() {
        return (
            <div>
                <ButtonGroup>
                    <Button><Icon type="music"></Icon></Button>
                    <Button><Icon type="download"></Icon> Download</Button>
                    <Button> heart<Icon type="heart"></Icon></Button>
                </ButtonGroup>
            </div>
        )
    }
}`}>
                        <Demo4/>
                    </Templete>
                
                <Api />
            </div>
        )
    }
}