#  基本使用
## 常规输入框


````jsx
import Form from '@/components/Form'
import Button from '@/components/Button'

const roleLength=value => ((value && value.length>=30) ? '不能大于30个字符':undefined);

export class <%=component%> extends Component {

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
````