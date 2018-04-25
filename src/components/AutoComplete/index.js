import React, {Component} from 'react'
import PropTypes from 'prop-types';
import createClass from 'create-react-class';
import {withStyles} from 'material-ui/styles';
import './style.less'
import classnames from 'classnames'
import Typography from 'material-ui/Typography';
import Input from 'material-ui/Input';
import Chip from 'material-ui/Chip';
import Select from '../Select';
import Icon from '../Icon'
import 'react-select/dist/react-select.css';
function SelectWrapped(props) {
    const { classes,optionRenderer,...other } = props;
    return (
        <Select
            optionRenderer={optionRenderer}
            noResultsText={<Typography>{'No results found'}</Typography>}
            arrowRenderer={null}
            valueComponent={valueProps => {
                const { value, children, onRemove } = valueProps;
                const onDelete = event => {
                    event.preventDefault();
                    event.stopPropagation();
                    onRemove(value);
                };
                if (onRemove) {
                    return (
                        <Chip
                            tabIndex={-1}
                            label={value.value}
                            className={classnames(classes.chip)}
                            deleteIcon={<Icon type="times-circle" onClick={onDelete} />}
                            onDelete={onDelete}
                        />
                    );
                }
                return <div className="Select-value">{value.value}</div>;
            }}
            {...other}
        />
    );
}

const ITEM_HEIGHT = 48;
const styles = theme => {
   return  {
    root: {
        flexGrow: 1
    },
    chip: {
        margin: theme.spacing.unit / 4,
        border: "1px solid #e8e8e8",
        height: "24px",
        lineHeight: "24px",
        backgroundColor: "#fafafa"

    },
    '@global': {
        '.Select-control': {
            display: 'flex',
            alignItems: 'center',
            border: 0,
            height: 'auto',
            background: 'transparent',
            '&:hover': {
                boxShadow: 'none',
            },
        },
        '.Select-multi-value-wrapper': {
            flexGrow: 1,
            display: 'flex',
            flexWrap: 'wrap',
        },
        '.Select--multi .Select-input': {
            margin: 0,
        },
        '.Select.has-value.is-clearable.Select--single > .Select-control .Select-value': {
            padding: "0 0 0 10px",
            color:'#333',
        },
        '.Select-noresults': {
            padding: theme.spacing.unit * 2,
        },
        '.Select-input': {
            display: 'inline-flex !important',
            padding: 0,
            height: 'auto',
        },
        '.Select-input input': {
            background: 'transparent',
            border: 0,
            padding: 0,
            cursor: 'default',
            display: 'inline-block',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            margin: 0,
            outline: 0,
        },
        '.Select-placeholder, .Select--single .Select-value': {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            fontFamily: theme.typography.fontFamily,
            fontSize: theme.typography.pxToRem(16),
            padding: 0,
        },
        '.Select-placeholder': {
            opacity: 0.42,
            color: theme.palette.common.black,
        },
        '.Select-menu-outer': {
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[2],
            position: 'absolute',
            left: 0,
            top: "initial",
            width: '100%',
            zIndex: 2,
            maxHeight: ITEM_HEIGHT * 4.5,
        },
        '.Select.is-focused:not(.is-open) > .Select-control': {
            boxShadow: 'none',
        },
        '.Select-menu': {
            maxHeight: ITEM_HEIGHT * 4.5,
            overflowY: 'auto',
        },
        '.Select-menu div': {
            boxSizing: 'content-box',
            "&:hover":{
                backgroundColor: theme.select.hover,
                color: theme.select.color,
            }
        },
        '.Select-arrow-zone, .Select-clear-zone': {
            color: theme.palette.action.active,
            cursor: 'pointer',
            height: 21,
            width: 21,
            zIndex: 1,
        },
        // Only for screen readers. We can't use display none.
        '.Select-aria-only': {
            position: 'absolute',
            overflow: 'hidden',
            clip: 'rect(0 0 0 0)',
            height: 1,
            width: 1,
            margin: -1,
        },
    }
}};
@withStyles(styles)
export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            single: "",
            multi: "",
            multiLabel: null
        }
    }

    onPromptTextCreator(result){
       let that = this
        setTimeout(function(){
            that.props.onSearch && that.props.onSearch(result)
        },0)
    }

    onInputChange(result){
        this.props.onSearch && this.props.onSearch(result)
    }

    onSelectChange(result){
        if(this.props.multi){
            this.setState({
                multi: result,
            });
        }else{
            this.setState({
                single: result,
            });
        }
        this.props.onChange && this.props.onChange(result)
    }

    onInputFocus(e){
        if(this.props.multi){
            this.setState({
                multi: e.target.value,
            });
        }else{
            this.setState({
                single: e.target.value,
            });
        }
    }
    render() {
        const { classes,children,dataSource,multi,labelKey,fullWidth,onSearch,filterOption,optionRenderer,placeholder,ignoreCase,...other} = this.props;
        return (
            <div className={classnames(classes.root)}>
                <Input
                    disableUnderline={true}
                    fullWidth={fullWidth?true:false}
                    inputComponent={SelectWrapped}
                    placeholder={placeholder?placeholder:''}
                    value={multi?this.state.multi:this.state.single}
                    id="react-select-single"
                    inputProps={{
                        classes,
                        name: 'react-select-single',
                        instanceId: 'react-select-single',
                        value:multi?this.state.multi:this.state.single,
                        simpleValue: true,
                        onBlurResetsInput:false,
                        onSelectResetsInput:false,
                        multi: multi?multi:false,
                        options: dataSource,
                        valueKey:'value',
                        labelKey:labelKey?labelKey:'label',
                        optionRenderer:optionRenderer?optionRenderer:null,
                        autosize:true,
                        ignoreCase:ignoreCase?ignoreCase:false,
                        onChange:(result)=>this.onSelectChange(result),
                        onInputChange:(result)=>this.onInputChange(result),
                    }}
                    {...other}
                />
            </div>
        )
    }
}
App.propTypes = {
    options:PropTypes.array,
    labelKey: PropTypes.string,
    ignoreCase: PropTypes.bool,//大小写
    multi: PropTypes.bool,//多选
    removeSelected:PropTypes.bool,//是否从options中去除选中项
    // labelKey: PropTypes.oneOf(['square', 'circle']),//形状square,circle
    // count: PropTypes.number,//

}
export default App

