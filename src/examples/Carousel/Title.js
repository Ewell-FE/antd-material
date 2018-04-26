import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Carousel 走马灯
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>旋转木马，一组轮播的区域。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>当有一组平级的内容。</p>
                <p style={{margin:'12px 0 30px 0'}}>当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。</p>
                <p style={{margin:'12px 0 30px 0'}}>常用于一组图片或卡片轮播。</p>
            </div>
        )
    }
}