import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {

  static defaultProps = {
    className: 'content1',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const animType = {
      queue: isMode ? 'bottom' : 'left',
      one: isMode ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '+=30', opacity: 0, type: 'from' },
    };
    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <QueueAnim
            type={animType.queue}
            className={`${props.className}-text`}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            <h1 key="h1" id={`${props.id}-title`}>
              antd-material的优势
            </h1>
            <p key="p" id={`${props.id}-content`}>
              1.无需考虑样式加载先后顺序的影响 <br/>

              因为所有样式都引用的皮肤对象上面的属性，所以不存在先后顺序一说 <br/>

              2.可以区块性的定制皮肤 <br/>

              这个用传统less还是很麻烦做到的，样式之间相互影(一般需要用ID来划分区块)，公共样式部分再抽离的做法。而jss则只需要引入对应的皮肤对象，然后随意修改覆盖对象里面的值即可。 <br/>

              3.皮肤覆盖顺序不同 <br/>

              传统样式都是个别样式引用/覆盖全局样式的方式来进行书写,material-ui则不同，个别样式引用全局样式，全局样式又覆盖个别样式。很绕，但material的styles模块确实是在全局模块定义了overrides属性来覆盖个别样式的。这种做法尤其是引入遵循jss规范的第三方模块的时候最为好用，我们只需查看dom元素对应的class名，就能做到任意覆盖样式，非常方便！
            </p>
          </QueueAnim>
          <TweenOne
            key="img"
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <span id={`${props.id}-img`}>
              <img alt="" width="100%" src="https://zos.alipayobjects.com/rmsportal/tvQTfCupGUFKSfQ.png" />
            </span>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Content;
