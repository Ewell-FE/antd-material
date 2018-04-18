# 异步加载
## 异步加载数据
````jsx
import Select from '@/components/Select'
const Async = Select.Async;
let options = [{ github: 'jedwatson', name: 'Jed Watson' },
                       { github: 'bruderstein', name: 'Dave Brotherstone' },
                          { github: 'jossmac', name: 'Joss Mackison' },
                          { github: 'jniechcial', name: 'Jakub Niechciał' },
                          { github: 'craigdallimore', name: 'Craig Dallimore' },
                          { github: 'julen', name: 'Julen Ruiz Aizpuru' },
                          { github: 'dcousens', name: 'Daniel Cousens' },
                          { github: 'jgautsch', name: 'Jon Gautsch' },
                          { github: 'dmitry-smirnov', name: 'Dmitry Smirnov' }];
export class <%=component%> extends Component {

    getContributors (input,callback) {
    		input = input.toLowerCase();
    		var data = {
    			options: options.slice(0, 6),
    			complete: options.length <= 6,
    		}
    		setTimeout(function() {
            			callback(null, data);
            		}, 5000);
    	}
    	gotoContributor (value, event) {
        		window.open('https://github.com/' + value.github);
        	}
    render() {
        return (
               <Async
                    placeholder='请选择'
                    multi={true}
                    onValueClick={this.gotoContributor}
                    valueKey="github"
                    labelKey="name"
                    width={300}
                    loadOptions={this.getContributors}/>
        )
    }
}
````