import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class Content extends React.Component {

  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'content6',
  };

  state = {
    show: 0,
  };

  onChange = (key) => {
    this.setState({ show: parseInt(key) })
  }

  getBlockChildren = (item, i) => {
    const tag = item.tag;
    const img = item.img;
    const text = item.text;
    return (
      <TabPane
        key={i}
        tab={(<span
          className={`${this.props.className}-tag`}
          id={`${this.props.id}-tagBlock${i}`}
        >
          <i><img src={tag.icon} width="100%" /></i>
          {tag.tag}
        </span>)}
      >
        <TweenOne.TweenOneGroup
          enter={{ y: 30, delay: 300, opacity: 0, type: 'from', ease: 'easeOutQuad' }}
          leave={null}
          component=""
        >
          {this.state.show === i && (
            <div key="content">
              <div
                className={`${this.props.className}-img`}
                id={`${this.props.id}-imgBlock${i}`}
              >
                {img}
              </div>
              <div
                className={`${this.props.className}-text`}
                id={`${this.props.id}-textBlock${i}`}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>)}
        </TweenOne.TweenOneGroup>
      </TabPane>
    );
  };

  render() {
    const props = { ...this.props };
    delete props.isMode;
    const childrenData = [
      {
        tag: { tag: 'PHONE', icon: 'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg' },
        img: <img width="100%" src="https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png" />,
        text: `<h3>技术</h3>
丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
<h3>融合</h3>
解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
<h3>开放</h3>
符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。`,
      },
      {
        tag: { tag: 'TABLET', icon: 'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg' },
        img: <img width="100%" src="https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png" />,
        text: `<h3>技术</h3>
丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
<h3>融合</h3>
解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
<h3>开放</h3>
符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。`,
      },
      {
        tag: { tag: 'DESKTOP', icon: 'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg' },
        img: <img width="100%" src="https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png" />,
        text: `<h3>技术</h3>
丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
<h3>融合</h3>
解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
<h3>开放</h3>
符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。`,
      },
    ];
    const tabsChildren = childrenData.map(this.getBlockChildren);
    return (
      <div
        {...props}
        className={`content-template-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="h1"
            key="h1"
            reverseDelay={200}
            id={`${props.id}-title`}
          >
            蚂蚁金融云提供专业的服务
          </TweenOne>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from', delay: 100 }}
            component="p"
            key="p"
            reverseDelay={100}
            id={`${props.id}-content`}
          >
            科技想象力，金融创造力
          </TweenOne>
          <TweenOne.TweenOneGroup
            key="tabs"
            enter={{ y: 30, opacity: 0, delay: 200, type: 'from' }}
            leave={{ y: 30, opacity: 0 }}
            className={`${props.className}-tabs`}
            id={`${props.id}-tabs`}
          >
            <Tabs key="tabs" onChange={this.onChange} activeKey={`${this.state.show}`}>
              {tabsChildren}
            </Tabs>
          </TweenOne.TweenOneGroup>
        </OverPack>
      </div>
    );
  }
}

export default Content;
