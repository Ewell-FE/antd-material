#  使用
## LocaleProvider 使用 React 的 context 特性，只需在应用外围包裹一次即可全局生效。


````jsx
import LocaleProvider from '@/components/LocaleProvider'
import en_US from '@/components/LocaleProvider/en_US'
import Pagination from '@/components/Pagination'
import DatePicker from '@/components/DatePicker'
import TimePicker from '@/components/TimePicker'
import Modal from '@/components/Modal'
import Button from '@/components/Button'
import Popconfirm from '@/components/Popconfirm'
import Message from '@/components/Message'
import Transfer from '@/components/Transfer'
import Select from '@/components/Select';

const {MonthPicker, RangePicker, WeekPicker} = DatePicker

export class <%=component%> extends Component {
    state = { visible: false }
    showModal = () => {
        this.setState({
        visible: true,
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
        visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
        visible: false,
        });
    }
    onChange =(date, dateString) => {
        console.log(date, dateString);
    }
    render() {
        return (
            <LocaleProvider locale={en_US}>
                <div style={{textAlign:'left'}}>
                    <Pagination
                        showQuickJumper
                        onChange={(page)=>{console.log('page:'+page)}}
                        defaultCurrent={10}
                        total={50}
                    />
                    <br />
                    <DatePicker style={{width:'200px'}} onChange={this.onChange}/>
                    <br />
                    <br />
                    <MonthPicker style={{width:'200px'}} onChange={this.onChange}/>
                    <br />
                    <br />
                    <RangePicker style={{width:'400px'}} onChange={this.onChange} />
                    <br />
                    <br />
                    <WeekPicker  style={{width:'200px'}} onChange={this.onChange} />
                    <br />
                    <br />
                    <TimePicker style={{width:'200px'}} onChange={this.onChange}/>
                    <br />
                    <br />
                    <Button type="Primary" onClick={this.showModal}>Open</Button>
                    <Modal
                        title="Basic Modal"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        afterClose={()=>console.log('after close')}
                        destroyOnClose={true}
                    >
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
                    <br />
                    <br />
                    <Popconfirm  title="Are you sure delete this task?">
                        <Button type='Primary'>Delete</Button>
                    </Popconfirm>
                    <br />
                    <br />
                    <Transfer dataSource={[]}
                            targetKeys={[]}
                            titles={['Source', 'Target']}
                            selectedKeys={[]}
                            render={item => item.title}
                    />
                    <br />
                    <br />
                    <Select onChange={this.onChange}
                        value={this.state.value}
                        style={{ width: 120, marginLeft: 20 }}
                        defaultActiveFirstOption={false}
                        placeholder={'Please Select'}
                        options={[]}>
                    </Select>
                </div>
            </LocaleProvider>
        )
    }
}
````