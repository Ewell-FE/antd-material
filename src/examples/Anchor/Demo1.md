#  基本
## 最简单的用法，适用于简短的警告提示,共有四种样式 success、info、warning、error。


````jsx
import Anchor from '@/components/Anchor'
import Link from '@/components/Anchor/Link'

export class <%=component%> extends Component {
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
````