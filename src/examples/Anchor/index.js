import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Api from './Api'
import Title from './Title'
import Templete from '../Template'
import Anchor from '@/components/Anchor'
import Link from '@/components/Anchor/Link'




export class Demo1md extends Component {
    render() {
        return (
            <div>
                <Anchor target={()=>document.getElementsByTagName('main')[0]}>
                    <Link href="#components-anchor-demo-basic" title="Basic demo" />
                    <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
                    <Link href="#API" title="API">
                        <Link href="#Anchor-Props" title="Anchor Props" />
                        <Link href="#Link-Props" title="Link Props" />
                    </Link>
                </Anchor>
                <div id="components-anchor-demo-basic">
                    <p>components-anchor-demo-basic</p>
                    <p>components-anchor-demo-basic</p>
                    <p>components-anchor-demo-basic</p>
                    <p>components-anchor-demo-basic</p>
                    <p>components-anchor-demo-basic</p>
                    <p>components-anchor-demo-basic</p>
                    <p>components-anchor-demo-basic</p>
                    <p>components-anchor-demo-basic</p>
                    <p>components-anchor-demo-basic</p>
                    <p>components-anchor-demo-basic</p>
                </div>
                <div id="components-anchor-demo-fixed">
                    <p>components-anchor-demo-fixed</p>
                    <p>components-anchor-demo-fixed</p>
                    <p>components-anchor-demo-fixed</p>
                    <p>components-anchor-demo-fixed</p>
                    <p>components-anchor-demo-fixed</p>
                    <p>components-anchor-demo-fixed</p>
                    <p>components-anchor-demo-fixed</p>
                    <p>components-anchor-demo-fixed</p>
                    <p>components-anchor-demo-fixed</p>
                    <p>components-anchor-demo-fixed</p>
                </div>
                <div id="API">
                    <p>API</p>
                    <p>API</p>
                    <p>API</p>
                    <p>API</p>
                    <p>API</p>
                    <p>API</p>
                    <p>API</p>
                    <p>API</p>
                    <p>API</p>
                    <p>API</p>
                    <div id="Anchor-Props">
                        <p>Anchor-Props</p>
                        <p>Anchor-Props</p>
                        <p>Anchor-Props</p>
                        <p>Anchor-Props</p>
                        <p>Anchor-Props</p>
                        <p>Anchor-Props</p>
                        <p>Anchor-Props</p>
                        <p>Anchor-Props</p>
                        <p>Anchor-Props</p>
                        <p>Anchor-Props</p>
                        <p>Anchor-Props</p>
                        <p>Anchor-Props</p>
                        <p>Anchor-Props</p>
                        <p>Anchor-Props</p>
                        <p>Anchor-Props</p>
                    </div>
                    <div id="Link-Props">
                        <p>Link-Props</p>
                        <p>Link-Props</p>
                        <p>Link-Props</p>
                        <p>Link-Props</p>
                        <p>Link-Props</p>
                        <p>Link-Props</p>
                        <p>Link-Props</p>
                        <p>Link-Props</p>
                        <p>Link-Props</p>
                        <p>Link-Props</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default class App extends Component {
    render() {
        return (
            <div style={{width:900,padding:'0 24px',margin:'0 auto'}}>
                <Title />
                
                     <Typography variant="display1" gutterBottom>
                                      基本
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     最简单的用法，适用于简短的警告提示,共有四种样式 success、info、warning、error。
                                </p>
                    <Templete code={`import Anchor from '@/components/Anchor'
import Link from '@/components/Anchor/Link'

export class Demo1md extends Component {
    render() {
        return (
            <div>
                <Anchor target={()=>document.getElementsByTagName('main')[0]}>
                    <Link href="#components-anchor-demo-basic" title="Basic demo" />
                    <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
                    <Link href="#API" title="API">
                        <Link href="#Anchor-Props" title="Anchor Props" />
                        <Link href="#Link-Props" title="Link Props" />
                    </Link>
                </Anchor>
                <div id="components-anchor-demo-basic">
                    <p>components-anchor-demo-basic</p>
                    <p>components-anchor-demo-basic</p>
                    <p>components-anchor-demo-basic</p>
                    <p>components-anchor-demo-basic</p>
                    <p>components-anchor-demo-basic</p>
                    <p>components-anchor-demo-basic</p>
                    <p>components-anchor-demo-basic</p>
                    <p>components-anchor-demo-basic</p>
                    <p>components-anchor-demo-basic</p>
                    <p>components-anchor-demo-basic</p>
                </div>
                <div id="components-anchor-demo-fixed">
                    <p>components-anchor-demo-fixed</p>
                    <p>components-anchor-demo-fixed</p>
                    <p>components-anchor-demo-fixed</p>
                    <p>components-anchor-demo-fixed</p>
                    <p>components-anchor-demo-fixed</p>
                    <p>components-anchor-demo-fixed</p>
                    <p>components-anchor-demo-fixed</p>
                    <p>components-anchor-demo-fixed</p>
                    <p>components-anchor-demo-fixed</p>
                    <p>components-anchor-demo-fixed</p>
                </div>
                <div id="API">
                    <p>API</p>
                    <p>API</p>
                    <p>API</p>
                    <p>API</p>
                    <p>API</p>
                    <p>API</p>
                    <p>API</p>
                    <p>API</p>
                    <p>API</p>
                    <p>API</p>
                    <div id="Anchor-Props">
                        <p>Anchor-Props</p>
                        <p>Anchor-Props</p>
                        <p>Anchor-Props</p>
                        <p>Anchor-Props</p>
                        <p>Anchor-Props</p>
                        <p>Anchor-Props</p>
                        <p>Anchor-Props</p>
                        <p>Anchor-Props</p>
                        <p>Anchor-Props</p>
                        <p>Anchor-Props</p>
                        <p>Anchor-Props</p>
                        <p>Anchor-Props</p>
                        <p>Anchor-Props</p>
                        <p>Anchor-Props</p>
                        <p>Anchor-Props</p>
                    </div>
                    <div id="Link-Props">
                        <p>Link-Props</p>
                        <p>Link-Props</p>
                        <p>Link-Props</p>
                        <p>Link-Props</p>
                        <p>Link-Props</p>
                        <p>Link-Props</p>
                        <p>Link-Props</p>
                        <p>Link-Props</p>
                        <p>Link-Props</p>
                        <p>Link-Props</p>
                    </div>
                </div>
            </div>
        )
    }
}`}>
                        <Demo1md />
                    </Templete>
                
                <Api />
            </div>
        )
    }
}