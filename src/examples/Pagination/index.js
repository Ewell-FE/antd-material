import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Api from './Api'
import Title from './Title'
import Templete from '../Template'

import Demo1 from './Demo1';import Demo2 from './Demo2';import Demo3 from './Demo3';import Demo4 from './Demo4';import Demo5 from './Demo5';

export default class App extends Component {
    render() {
        return (
            <div style={{width:900,padding:'0 24px',margin:'0 auto'}}>
                <Title />
                
                     <Typography variant="display1" gutterBottom>
                                    基础分页
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                    页码比较少的基础分页
                                </p>
                    <Templete code={`
import React, {Component} from 'react';
import Pagination from '@/components/Pagination';

export default class App extends Component{
    render(){
        return (
            <Pagination defaultCurrent={3} total={50}/>
        )
    }
}`}>
                        <Demo1/>
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                    更多分页
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                    页码比较多的更多分页
                                </p>
                    <Templete code={`
import React, {Component} from 'react';
import Pagination from '@/components/Pagination';

export default class App extends Component{
    render(){
        return (
            <Pagination defaultCurrent={3} total={500}/>
        )
    }
}`}>
                        <Demo2/>
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                    改变
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                    改变每页显示条目数
                                </p>
                    <Templete code={`
import React, {Component} from 'react';
import Pagination from '@/components/Pagination';

export default class App extends Component{
    render(){
        return (
            <Pagination showSizeChanger defaultCurrent={3} total={500}/>
        )
    }
}`}>
                        <Demo3/>
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                    跳转
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                    快速跳转到某一页
                                </p>
                    <Templete code={`
import React, {Component} from 'react';
import Pagination from '@/components/Pagination';

export default class App extends Component{
    render(){
        return (
            <Pagination showQuickJumper defaultCurrent={3} total={500}/>
        )
    }
}`}>
                        <Demo4/>
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                    总数
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                    通过设置 showTotal 展示总共有多少数据
                                </p>
                    <Templete code={`
import React, {Component} from 'react';
import Pagination from '@/components/Pagination';

export default class App extends Component{
    render(){
        return (
            <div>
                <Pagination
                    defaultCurrent={1}
                    total={50}
                    onChange={(page)=>{console.log('当前页:'+page)}}
                    showQuickJumper
                    showTotal={(total)=>(\`总共 \${total} 条\`)}/>
                <Pagination
                    defaultCurrent={1}
                    total={50}
                    onChange={(page)=>{console.log('当前页:'+page)}}
                    showQuickJumper
                    showTotal={(total,range)=>(\`\${range[0]}-\${range[1]} / \${total} 条\`)}/>
            </div>
        )
    }
}`}>
                        <Demo5/>
                    </Templete>
                <Api />
            </div>
        )
    }
}