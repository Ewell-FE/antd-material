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
                <Form form='roleForm1'
                  initialValues={{}}
                  Submit={(values) => this.Submit(values)} ref="form1"
                  fields={[{
                      name: "roleName",
                      label: "用户名",
                      required: true,
                      validate:roleLength
                  }, {
                      name: "remark",
                      label: "密码",
                      rows: '5',
                      validate:roleLength
                  }]}>
                    <Button style={{verticalAlign:'top'}} onClick={() => {this.refs.form1.submit()}}>保 存</Button>
                  </Form>

            </div>
        )
    }
}
const roleLength2=value => ((value && value.length>=30) ? '不能大于30个字符':undefined);

export class Demo2md extends Component {

    Submit(values){
        console.log(values)
    }

    render() {
        return (
            <div>
                <Form layout="vertical" form='roleForm2'
                  initialValues={{}}
                  Submit={(values) => this.Submit(values)} ref="form2"
                  fields={[{
                      name: "roleName",
                      label: "角色名",
                      required: true,
                      validate:roleLength2
                  }, {
                      name: "remark",
                      label: "角色描述",
                      type: 'textarea',
                      rows: '5',
                      validate:roleLength2
                  }]}>
                  <Button onClick={() => {this.refs.form2.submit()}}>保 存</Button>
                 </Form>
            </div>
        )
    }
}
const roleLength3=value => ((value && value.length>=30) ? '不能大于30个字符':undefined);

export class Demo3md extends Component {

    Submit(values){
        console.log(values)
    }

    render() {
        return (
            <div>
                <Form layout="horizontal" form='roleForm3'
                  initialValues={{}}
                  Submit={(values) => this.Submit(values)} ref="form3"
                  fields={[{
                      name: "roleName",
                      label: "角色名",
                      required: true,
                      validate:roleLength3
                  }, {
                      name: "remark",
                      label: "角色描述",
                      type: 'textarea',
                      rows: '5',
                      validate:roleLength3
                  }]}/>
                  <Button onClick={() => {this.refs.form3.submit()}}>保 存</Button>
            </div>
        )
    }
}
const roleLength4=value => ((value && value.length>=30) ? '不能大于30个字符':undefined);

export class Demo4md extends Component {

    Submit(values){
        console.log(values)
    }

    render() {
        return (
            <div>
                <Form layout="grid" form='roleForm4'
                  initialValues={{}}
                  Submit={(values) => this.Submit(values)} ref="form4"
                  fields={[{
                      span:6,
                      name: "roleName",
                      label: "角色名",
                      required: true,
                      validate:roleLength4
                  }, {
                      span:6,
                      name: "remark",
                      label: "角色描述",
                      rows: '5',
                      validate:roleLength4
                  }]} />
                  <br />
                  <br />
                  <br />
                  <Form layout="grid" form='roleForm2'
                    initialValues={{}}
                    Submit={(values) => this.Submit(values)} ref="form5"
                    fields={[{
                        span:4,
                        name: "roleName",
                        label: "用户性",
                        required: true,
                        validate:roleLength4
                    }, {
                         span:4,
                         name: "remark",
                         label: "年龄",
                         rows: '5',
                         validate:roleLength4
                     }, {
                          span:4,
                          name: "remark",
                          label: "性别",
                          rows: '5',
                          validate:roleLength4
                      }]} />
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
                                      水平排列 默认排列方式
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     水平登录栏，常用在顶部导航栏中。layout="inline"
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
                <Form form='roleForm1'
                  initialValues={{}}
                  Submit={(values) => this.Submit(values)} ref="form1"
                  fields={[{
                      name: "roleName",
                      label: "用户名",
                      required: true,
                      validate:roleLength
                  }, {
                      name: "remark",
                      label: "密码",
                      rows: '5',
                      validate:roleLength
                  }]}>
                    <Button style={{verticalAlign:'top'}} onClick={() => {this.refs.form1.submit()}}>保 存</Button>
                  </Form>

            </div>
        )
    }
}`}>
                        <Demo1md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      垂直排列
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     标题在输入框头部的垂直模式 layout="vertical"
                                </p>
                    <Templete code={`import Form from '@/components/Form'
import Button from '@/components/Button'

const roleLength2=value => ((value && value.length>=30) ? '不能大于30个字符':undefined);

export class Demo2md extends Component {

    Submit(values){
        console.log(values)
    }

    render() {
        return (
            <div>
                <Form layout="vertical" form='roleForm2'
                  initialValues={{}}
                  Submit={(values) => this.Submit(values)} ref="form2"
                  fields={[{
                      name: "roleName",
                      label: "角色名",
                      required: true,
                      validate:roleLength2
                  }, {
                      name: "remark",
                      label: "角色描述",
                      type: 'textarea',
                      rows: '5',
                      validate:roleLength2
                  }]}>
                  <Button onClick={() => {this.refs.form2.submit()}}>保 存</Button>
                 </Form>
            </div>
        )
    }
}`}>
                        <Demo2md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      垂直排列
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     标题和输入框一行的垂直模式 layout="horizontal"
                                </p>
                    <Templete code={`import Form from '@/components/Form'
import Button from '@/components/Button'

const roleLength3=value => ((value && value.length>=30) ? '不能大于30个字符':undefined);

export class Demo3md extends Component {

    Submit(values){
        console.log(values)
    }

    render() {
        return (
            <div>
                <Form layout="horizontal" form='roleForm3'
                  initialValues={{}}
                  Submit={(values) => this.Submit(values)} ref="form3"
                  fields={[{
                      name: "roleName",
                      label: "角色名",
                      required: true,
                      validate:roleLength3
                  }, {
                      name: "remark",
                      label: "角色描述",
                      type: 'textarea',
                      rows: '5',
                      validate:roleLength3
                  }]}/>
                  <Button onClick={() => {this.refs.form3.submit()}}>保 存</Button>
            </div>
        )
    }
}`}>
                        <Demo3md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      Grid模式
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     Grid栅格的方式来进行表单布局 layout="grid"
                                </p>
                    <Templete code={`import Form from '@/components/Form'
import Button from '@/components/Button'

const roleLength4=value => ((value && value.length>=30) ? '不能大于30个字符':undefined);

export class Demo4md extends Component {

    Submit(values){
        console.log(values)
    }

    render() {
        return (
            <div>
                <Form layout="grid" form='roleForm4'
                  initialValues={{}}
                  Submit={(values) => this.Submit(values)} ref="form4"
                  fields={[{
                      span:6,
                      name: "roleName",
                      label: "角色名",
                      required: true,
                      validate:roleLength4
                  }, {
                      span:6,
                      name: "remark",
                      label: "角色描述",
                      rows: '5',
                      validate:roleLength4
                  }]} />
                  <br />
                  <br />
                  <br />
                  <Form layout="grid" form='roleForm2'
                    initialValues={{}}
                    Submit={(values) => this.Submit(values)} ref="form5"
                    fields={[{
                        span:4,
                        name: "roleName",
                        label: "用户性",
                        required: true,
                        validate:roleLength4
                    }, {
                         span:4,
                         name: "remark",
                         label: "年龄",
                         rows: '5',
                         validate:roleLength4
                     }, {
                          span:4,
                          name: "remark",
                          label: "性别",
                          rows: '5',
                          validate:roleLength4
                      }]} />
            </div>
        )
    }
}`}>
                        <Demo4md />
                    </Templete>
                
                <Api />
            </div>
        )
    }
}