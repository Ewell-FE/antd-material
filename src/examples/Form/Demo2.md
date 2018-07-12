#  垂直排列
## 标题在输入框头部的垂直模式 layout="vertical"

````jsx
import Form from 'antd-material/core/Form'
import Button from 'antd-material/core/Button'

const roleLength2=value => ((value && value.length>=30) ? '不能大于30个字符':undefined);

export class <%=component%> extends Component {

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
````