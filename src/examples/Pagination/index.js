import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Api from './Api'
import Title from './Title'
import Templete from '../Template'

import Pagination1 from './Pagination1';

export default class App extends Component {
    render() {
        return (
            <div style={{width:900,padding:'0 24px',margin:'0 auto'}}>
                <Title />
                
                     <Typography variant="display1" gutterBottom>
                                    
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                    
                                </p>
                    <Templete code={`
export default class App extends Component {
    render() {
        return (
            <div>
                <p>基础分页:</p>
                <Pagination defaultCurrent={3} total={50}/>
                <br />
                <p>更多分页:</p>
                <Pagination defaultCurrent={6} total={500}/>
                <br />
                <p>快速跳转到某一页:</p>
                <Pagination defaultCurrent={6} total={500}/>
                <br />
                <p>显示总条数:</p>
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
}
`}>
                        <Pagination1/>
                    </Templete>
                
                <Api />
            </div>
        )
    }
}