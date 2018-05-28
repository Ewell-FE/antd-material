#  头像
## 自定义建议（含头像），注意，自定义时，onSearchChange不能为空


````jsx
import Mention from '@/components/Mention'
const Nav = Mention.Nav;
let webFramework = [
  { name: 'React', type: 'JavaScript', icon: 'https://zos.alipayobjects.com/rmsportal/LFIeMPzdLcLnEUe.svg' },
  { name: 'Angular', type: 'JavaScript', icon: 'https://zos.alipayobjects.com/rmsportal/PJTbxSvzYWjDZnJ.png' },
  { name: 'Dva', type: 'Javascript', icon: 'https://zos.alipayobjects.com/rmsportal/EYPwSeEJKxDtVxI.png' },
  { name: 'Flask', type: 'Python', icon: 'https://zos.alipayobjects.com/rmsportal/xaypBUijfnpAlXE.png' },
];
export class <%=component%> extends Component {
   state = {
      suggestions: [],
    }
    onSearchChange = (value) => {
      const searchValue = value.toLowerCase();
      const filtered = webFramework.filter(item =>
        item.name.toLowerCase().indexOf(searchValue) !== -1
      );
      const suggestions = filtered.map(suggestion => (
        <Nav
          value={suggestion.name}
          data={suggestion}
          disabled={suggestion.disabled}
        >
          <span>
            <img alt={suggestion.name} style={{ height: 16, width: 16, marginRight: 5, float: 'left' }} src={suggestion.icon} />
            {suggestion.name} - {suggestion.type}
          </span>
        </Nav>
      ));
      console.log(suggestions)
      this.setState({ suggestions });
    }

    render() {
       const { suggestions } = this.state;
       return (
         <Mention
           style={{ width: '100%' }}
           suggestions={suggestions}
           onSearchChange={this.onSearchChange}
         />
       );
    }
}
````