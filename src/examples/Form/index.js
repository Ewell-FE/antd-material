import React, {Component} from 'react';
import Typography from 'material-ui/Typography'
import Api from './Api'
import Title from './Title'
import Templete from '../Template'
import Form from '@/components/Form'
import Button from '@/components/Button'

const roleLength=value => ((value && value.length>=30) ? '不能大于30个字符':undefined);

export class Demo1md extends Component {

    Submit(values){
        console.log(values)
    }

    render() {
        return (
            <div>
                <Form form='roleForm'
                  initialValues={{}}
                  Submit={(values) => this.Submit(values)} ref="form1"
                  fields={[{
                      name: "roleName",
                      label: "角色名",
                      required: true,
                      validate:roleLength
                  }, {
                      name: "remark",
                      label: "角色描述",
                      type: 'textarea',
                      rows: '5',
                      validate:roleLength
                  }]}/>
                  <Button onClick={() => {this.refs.form1.submit()}}>保 存</Button>
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
                                      基本使用
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     常规输入框
                                </p>
                    <Templete code={`import Form from '@/components/Form'
import Button from '@/components/Button'

const roleLength=value => ((value && value.length>=30) ? '不能大于30个字符':undefined);

export class Demo1md extends Component {

    Submit(values){
        console.log(values)
    }

    render() {
        return (
            <div>
                <Form form='roleForm'
                  initialValues={{}}
                  Submit={(values) => this.Submit(values)} ref="form1"
                  fields={[{
                      name: "roleName",
                      label: "角色名",
                      required: true,
                      validate:roleLength
                  }, {
                      name: "remark",
                      label: "角色描述",
                      type: 'textarea',
                      rows: '5',
                      validate:roleLength
                  }]}/>
                  <Button onClick={() => {this.refs.form1.submit()}}>保 存</Button>
            </div>
        )
    }
}`}>
                        <Demo1md />
                    </Templete>
                
                <Api />
            </div>
        )
    }
}