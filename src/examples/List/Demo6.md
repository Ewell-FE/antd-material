#  加载更多
## 可通过 loadMore 属性实现加载更多功能。


````jsx
import Avatar from '@material-ui/core/Avatar';
import List from 'antd-material/core/List'
import Button from 'antd-material/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress';
import reqwest from 'reqwest';
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
export class <%=component%> extends Component {
        state = {
            loading: true,
            loadingMore: false,
            showLoadingMore: true,
            data: [],
            bottom: false,
            right: false,
        }
       componentDidMount() {
          this.getData((res) => {
            this.setState({
              loading: false,
              data: res.results,
            });
          });
        }
       toggleDrawer = (side, open) => () => {
            this.setState({
              [side]: open,
            });
       };
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
        const sideList = (
          <div style={{width:'250px'}}>
            <p>aaaaaa</p>
            <Divider />
          </div>
        );

        const fullList = (
          <div  style={{width:'auto'}}>
            <p>bbbb</p>
            <Divider />

          </div>
        );
        return (
            <div>
             <List
                  loading={loading}
                  loadMore={loadMore}
                  dataSource={data}
                  itemLayout="horizontal"
                  renderItem={(item,index) => (
                      <List.ItemMeta
                          key={index}
                          actions={[<a onClick={this.toggleDrawer('right', true)}>edit</a>, <a onClick={this.toggleDrawer('bottom', true)}>more</a>]}
                          actionLeft
                          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                          title={item.name.last}
                          description="yh Design, a design language for background applications"
                          content={<div>content</div>}
                      />
                  )}
              >
              </List>
              <SwipeableDrawer
                anchor="bottom"
                open={this.state.bottom}
                onClose={this.toggleDrawer('bottom', false)}
                onOpen={this.toggleDrawer('bottom', true)}
              >
                <div
                  tabIndex={0}
                  role="button"
                  onClick={this.toggleDrawer('bottom', false)}
                  onKeyDown={this.toggleDrawer('bottom', false)}
                >
                  {fullList}
                </div>
              </SwipeableDrawer>
              <SwipeableDrawer
                anchor="right"
                open={this.state.right}
                onClose={this.toggleDrawer('right', false)}
                onOpen={this.toggleDrawer('right', true)}
              >
                <div
                  tabIndex={0}
                  role="button"
                  onClick={this.toggleDrawer('right', false)}
                  onKeyDown={this.toggleDrawer('right', false)}
                >
                  {sideList}
                </div>
              </SwipeableDrawer>
             </div>


        )
    }
}
````