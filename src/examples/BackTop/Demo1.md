#  两种使用方法:基本,自定义样式
## 可以自定义回到顶部按钮的样式，限制宽高：40px * 40px。


````jsx
import BackTop from '@/components/BackTop'

export class <%=component%> extends Component {
    render() {
        const inner={
          height: '40px',
          width: '40px',
          lineHeight: '40px',
          borderRadius: '4px',
          backgroundColor: '#1088e9',
          color: '#fff',
          textAlign: 'center',
          fontSize: '20px',
        }
        return (
            <div style={{padding:'0 150px'}}>
                <BackTop target={()=>document.getElementsByTagName('main')[0]} />
                <BackTop target={()=>document.getElementsByTagName('main')[0]} style={{bottom:'100px'}}>
                    <div className="ant-back-top-inner" style={inner}>UP</div>
                </BackTop>
                <div id="components-anchor-demo-basic" style={{height:'360px',color:'#fff',background:'#1890ff'}}>
                    <span style={{lineHeight: '360px'}}>components-anchor-demo-basic</span>
                </div>
                <div id="components-anchor-demo-fixed" style={{height:'360px',color:'#1890ff',background:'#fff'}}>
                    <span style={{lineHeight: '360px'}}>components-anchor-demo-fixed</span>
                </div>
                <div id="API">
                    <div  style={{height:'360px',color:'#fff',background:'#1890ff'}}>
                        <span style={{lineHeight: '360px'}}>API</span>
                    </div>
                    <div id="Anchor-Props" style={{height:'360px',color:'#1890ff',background:'#fff'}}>
                        <span style={{lineHeight: '360px'}}>Anchor-Props</span>
                    </div>
                    <div id="Link-Props" style={{height:'360px',color:'#fff',background:'#1890ff'}}>
                        <span style={{lineHeight: '360px'}}>Link-Props</span>
                    </div>
                </div>
            </div>
        )
    }
}
````