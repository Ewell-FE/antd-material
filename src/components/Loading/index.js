/**
 * Created by sasha on 2018/9/3.
 */
import React, {Component} from 'react';
import "./style.less"
import PropTypes from 'prop-types';
export default  class Loading extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    static defaultProps={
        size:'small'
    }

    render(){
        const {children,loading,size='default',wrapperStyle={}}  = this.props
        return(
                <div style={wrapperStyle} className='loading-mask'>
                    {loading && <div className={`loading-root ${size}`}><div className='loading-bgk'><img src={require("./loading.svg")} alt=""/>{size==='small'&&<span>Loading......</span>}</div></div>}
                {children}
            </div>
        )
    }
}

Loading.propTypes = {
    size: PropTypes.oneOf(['small','default','large']),
    loading: PropTypes.bool
};
