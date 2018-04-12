#  Grid模式
## Grid栅格的方式来进行表单布局 layout="grid"

````jsx
import Form from '@/components/Form'
import Button from '@/components/Button'

const roleLength4=value => ((value && value.length>=30) ? '不能大于30个字符':undefined);

export class <%=component%> extends Component {

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
````