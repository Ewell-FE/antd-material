# 配合Form使用
## 受控模式，例如配合 Form 使用。


````jsx
import Button from 'antd-material/core/Button'
import Form from 'antd-material/core/Form'
const { getMentions } = Mention;
const checkMention = value =>(getMentions(toContentState(value)).length < 2? "More than one must be selected!":undefined)
export class <%=component%> extends Component {
    Submit = (value) => {
        console.log(value)
    }

    render() {
       return (
            <div>
               <Form layout="horizontal" form="Form"
                     initialValues={{}}
                     //labelWidth="15%"
                     wrapperWidth="220px"
                     Submit={(values) => this.Submit(values)} ref="form"
                     fields={[{
                             type:'mention',
                             name:'mention',
                             label: "提及",
                             //placeholder:'@afc123',
                             required:true,
                             validate:checkMention,
                             defaultValue:toContentState('@afc123'),
                             suggestions:['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']
                         }
                     ]}>
                      <Button type="Primary" onClick={()=>this.refs.form.submit()}>提交</Button>
               </Form>
            </div>
       );
    }
}
````