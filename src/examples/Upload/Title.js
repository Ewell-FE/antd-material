import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Upload上传
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>文件选择上传和拖拽上传控件。</p>
                <Typography variant="display1" gutterBottom>
                    何时使用
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。</p>
                <p style={{margin:'12px 0 30px 0'}}>当需要上传一个或一些文件时。</p>
                <p style={{margin:'12px 0 30px 0'}}>当需要展现上传的进度时。</p>
                <p style={{margin:'12px 0 30px 0'}}>当需要使用拖拽交互时。</p>

            </div>
        )
    }
}