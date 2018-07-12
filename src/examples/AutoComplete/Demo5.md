#  配合Form使用
##受控模式，例如配合 Form 使用。

````jsx
import Button from 'antd-material/core/Button'
import Form from 'antd-material/core/Form'
export class <%=component%> extends Component {
    Submit(values){
        console.log(values)
    }
    render() {
        return (
             <div>
               <Form layout="horizontal" form="Form"
                     initialValues={{}}
                     wrapperWidth="220px"
                     Submit={(values) => this.Submit(values)} ref="form"
                     fields={[{
                             type:'autoComplete',
                             name:'autoComplete',
                             label: "自动匹配",
                             //required:true,
                             style:{width:"200px"},
                             dataSource:[
                             {value:'afc163',label:'afc163'},
                             {value:'benjycui',label:'benjycui'},
                             {value:'yiminghe',label:'yiminghe'},
                             {value:'RaoHai',label:'RaoHai'},
                             {value:'中文',label:'中文'},
                             {value:'にほんご',label:'にほんご'}]
                     }]}>
                      <Button type="Primary" onClick={()=>this.refs.form.submit()}>提交</Button>
               </Form>
             </div>
        )
    }
}
````