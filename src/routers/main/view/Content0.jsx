import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Button, Icon} from '../../../components';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends Component {
    render() {
        const props = {...this.props};
        delete props.isMode;
        return (
            <div>
                <OverPack
                    replay
                    playScale={[0.3, 0.1]}
                    {...props}
                >
                    <QueueAnim
                        type={['bottom', 'top']}
                        delay={200}
                        className={`${props.className}-wrapper`}
                        key="text"
                        id={`${props.id}-wrapper`}
                    >
          <span
              className="title"
              key="title"
              id={`${props.id}-title`}
          >
            {/*<img alt="" width="100%" src="https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png"/>*/}
            <h1 style={{color: '#fff',opacity: '.6'}}>logo</h1>
          </span>
                        <p
                            key="content"
                            id={`${props.id}-content`}
                        >
                            一个高效的页面动画解决方案
                        </p>
                        <Button onClick={()=>{window.location='/material/docs'}} key="button"
                                id={`${props.id}-button`}>
                            开始使用
                        </Button>
                    </QueueAnim>
                    <TweenOne
                        animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
                        className={`${props.className}-icon`}
                        key="icon"
                    >
                        <Icon type="down"/>
                    </TweenOne>
                </OverPack>
            </div>
        );
    }
}

Content.propTypes = {
    className: PropTypes.string,
};

Content.defaultProps = {
    className: 'banner0',
};

export default Content;
