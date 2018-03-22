import React, {Component} from 'react';
import "./style.less"
class App extends Component {
    constructor(props){
        super(props)
        this.state={}
    }


    render() {
        return (
            <div id="error">
                <div className="content">
                <img alt="错误提示图" className="img" src={require('@/assets/errorPage.png')}/>
                <div className='err-msg'>
                      <div className="errCode">500</div>
                    <p className="errMsg">抱歉，服务器出错了</p>
                    <a className='link' href="/authority/home">返回首页</a>
                </div>
                </div>
            </div>
        )
    }
}

export default App
