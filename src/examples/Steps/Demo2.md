#  步骤切换
## 通常配合内容及按钮使用，表示一个流程的处理进度。


````jsx
import Steps from '@/components/Steps'
import message from '@/components/Message'
import Button from '@/components/Button'

const Step = Steps.Step;


export class <%=component%> extends Component {
 constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  render() {
    const { current } = this.state;
    const steps = [{
      title: 'First',
      content: 'First-content',
    }, {
      title: 'Second',
      content: 'Second-content',
    }, {
      title: 'Last',
      content: 'Last-content',
    }];
    const content={
        marginTop: '16px',
        border: '1px dashed #e9e9e9',
        borderRadius: '6px',
        backgroundColor: '#fafafa',
        minHeight: '200px',
        textAlign: 'center',
        paddingTop: '80px',
    }
    return (
      <div>
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-content" style={content}>{steps[this.state.current].content}</div>
        <div className="steps-action" style={{marginTop:'10px'}}>
          {
            this.state.current < steps.length - 1
            &&
            <Button type="Primary" onClick={() => this.next()}>Next</Button>
          }
          {
            this.state.current === steps.length - 1
            &&
            <Button type="Primary" onClick={() => message.success('Processing complete!')}>Done</Button>
          }
          {
            this.state.current > 0
            &&
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          }
        </div>
      </div>
    );
  }
}
````