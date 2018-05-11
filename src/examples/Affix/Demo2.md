#  滚动容器
## 用 target 设置 Affix 需要监听其滚动事件的元素，默认为 window。


````jsx
import Affix from '@/components/Affix'
import Button from '@/components/Button'

export class <%=component%> extends Component {
    render() {
        const backgroundStyle={
            paddingTop: '60px',
            height: '300px',
            backgroundImage: "url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg')",
        }
        const scrollContainerStyle={
            height: '100px',
            overflowY: 'scroll'
        }
        
        return (
             <div className="scrollable-container"  style={scrollContainerStyle} ref={(node) => { this.container = node; }}>
                 <div className="background" style={backgroundStyle}>
                   <Affix target={() => this.container}>
                     <Button type="Primary">
                       Fixed at the top of container
                     </Button>
                   </Affix>
                 </div>
             </div>
        )
    }
}
````