#  加载更多
## 可通过 loadMore 属性实现加载更多功能。


````jsx
import Avatar from '@material-ui/core/Avatar';
import List from '@/components/List'
import Button from '@/components/Button'
import CircularProgress from '@material-ui/core/CircularProgress';
import reqwest from 'reqwest';
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

export class <%=component%> extends Component {
        state = {
            loading: true,
            loadingMore: false,
            showLoadingMore: true,
            data: [],
        }
       componentDidMount() {
          this.getData((res) => {
            this.setState({
              loading: false,
              data: res.results,
            });
          });
        }
        getData = (callback) => {
            reqwest({
              url: fakeDataUrl,
              type: 'json',
              method: 'get',
              contentType: 'application/json',
              success: (res) => {
                callback(res);
              },
            });
          }
        onLoadMore = () => {
          this.setState({
            loadingMore: true,
          });
          this.getData((res) => {
            const data = this.state.data.concat(res.results);
            this.setState({
              data,
              loadingMore: false,
            }, () => {
              window.dispatchEvent(new Event('resize'));
            });
          });
        }
    render() {
        const { loading, loadingMore, showLoadingMore, data } = this.state;
        const loadMore = showLoadingMore ? (
              <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
                {loadingMore && <CircularProgress />}
                {!loadingMore && <Button onClick={this.onLoadMore}>loading more</Button>}
              </div>
            ) : null;
        return (
             <List
                  loading={loading}
                  loadMore={loadMore}
                  dataSource={data}
                  itemLayout="horizontal"
                  renderItem={(item,index) => (
                      <List.ItemMeta
                          key={index}
                          actions={[<a>edit</a>, <a>more</a>]}
                          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                          title={item.name.last}
                          description="yh Design, a design language for background applications"
                          content={<div>content</div>}
                      />
                  )}
              >
              </List>


        )
    }
}
````