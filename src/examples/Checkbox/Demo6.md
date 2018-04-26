#  布局
## Checkbox.Group 内嵌 Checkbox 并与 Grid 组件一起使用，可以实现灵活的布局。


````jsx
import Checkbox from '@/components/Checkbox';
const CheckboxGroup = Checkbox.Group;
import Grid from 'material-ui/Grid';
export class <%=component%> extends Component {

    render() {
      return (
        <CheckboxGroup>
           <Grid container spacing={24}>
                 <Grid item xs={3}>
                       <Checkbox value='one'>One</Checkbox>
                 </Grid>
                 <Grid item xs={3}>
                       <Checkbox value='two'>Two</Checkbox>
                 </Grid>
                 <Grid item xs={3}>
                       <Checkbox value='three'>Three</Checkbox>
                 </Grid>
                 <Grid item xs={3}>
                       <Checkbox value='four'>Four</Checkbox>
                 </Grid>
                 <Grid item xs={3}>
                       <Checkbox value='five'>Five</Checkbox>
                 </Grid>
           </Grid>
        </CheckboxGroup>
      )
    }
}
````