#  其他路由
## 和 react-router@4，或其他路由进行结合使用。。


````jsx
import Breadcrumb from '@/components/Breadcrumb'
import Alert from '@/components/Alert'
import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import {withStyles} from 'material-ui/styles';
const BreadcrumbItem=Breadcrumb.BreadcrumbItem
@withStyles(styles, {name: 'YhuiBreadcrumbAnt'})
const styles = theme => {
    return {
        demo:{
            margin: '16px',
            textAlign: 'left'
        },
        demoNav: {
          height: '30px',
          lineHeight: '30px',
          marginBottom: '16px',
          background: '#f8f8f8',
          
          '& a':{
            lineHeight: '30px',
              padding: '0 8px',
          }
        },
        appList: {
            marginTop: '16px'
        }
    }
}
export class Demo3md extends Component {
    render() {
      const {classes} = this.props
const Apps = () => (
  <ul className={classes.appList}>
    <li>
      <Link to="/apps/1" replace>Application1</Link>：<Link to="/apps/1/detail" replace>Detail</Link>
    </li>
    <li>
      <Link to="/apps/2" replace>Application2</Link>：<Link to="/apps/2/detail" replace>Detail</Link>
    </li>
  </ul>
);
    
const breadcrumbNameMap = {
  '/apps': 'Application List',
  '/apps/1': 'Application1',
  '/apps/2': 'Application2',
  '/apps/1/detail': 'Detail',
  '/apps/2/detail': 'Detail',
};

const Home = withRouter((props) => {
  const { location } = props;
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = '/'+pathSnippets.slice(0, index + 1).join('/');
    return (
      <BreadcrumbItem key={url}>
        <Link to={url} replace>
          {breadcrumbNameMap[url]}
        </Link>
      </BreadcrumbItem>
    );
  });
  const breadcrumbItems = [(
    <BreadcrumbItem key="home">
      <Link to="/" replace>Home</Link>
    </BreadcrumbItem>
  )].concat(extraBreadcrumbItems);
  return (
    <div className={classes.demo}>
      <div className={classes.demoNav}>
        <Link to="/" replace>Home</Link>
        <Link to="/apps" replace>Application List</Link>
      </div>
      <Switch>
        <Route path="/apps" component={Apps} />
        <Route render={() => <span>Home Page</span>} />
      </Switch>
      <Alert style={{ margin: '16px 0' }} message="Click the navigation above to switch:" />
      <Breadcrumb>
        {breadcrumbItems}
      </Breadcrumb>
    </div>
  );
});

        return (
            
               
               <Router>
                   <Home />
                 </Router>
        )
    }
}
````
 