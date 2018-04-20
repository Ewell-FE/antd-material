import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles';
import './style.less'
import classnames from 'classnames'
import Typography from 'material-ui/Typography';
import Input from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Chip from 'material-ui/Chip';
import Select from '../Select';
import Icon from '../Icon'
import 'react-select/dist/react-select.css';
let Creatable = Select.Creatable
class Option extends React.Component {
    handleClick = event => {
        this.props.onSelect(this.props.option, event);
    };
    render() {
        const { children, isFocused, isSelected, onFocus } = this.props;
        return (
            <MenuItem
                onFocus={onFocus}
                selected={isFocused}
                onClick={this.handleClick}
                component="div"
                style={{
                    fontWeight: isSelected ? 500 : 400,
                    color:isSelected?"#fff":'#333'
                }}
            >
                {children}
            </MenuItem>
        );
    }
}

function SelectWrapped(props) {
    const { classes,...other } = props;
    return (
        <Creatable
            optionComponent={Option}
            noResultsText={<Typography>{'No results found'}</Typography>}
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
                            label={children}
                            className={classnames(classes.chip,"chippp")}
                            deleteIcon={<Icon type="times-circle" onClick={onDelete} />}
                            onDelete={onDelete}
                        />
                    );
                }
                return <div className="Select-value">{children}</div>;
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
            top: `calc(100% + ${theme.spacing.unit}px)`,
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
    },
}};
@withStyles(styles)
export class AutoComplete extends Component {
    constructor(props) {
        super(props)
        this.state = {
            single: null,
            multi: null,
            multiLabel: null,
        }
    }

    handleChange = (name)=> value => {
        this.setState({
            [name]: value,
        });
    };
    onPromptTextCreator(result){
       let that = this
        setTimeout(function(){
            that.props.onSearch && that.props.onSearch(result)
        },0)
    }
    render() {
        const { classes,children,dataSource,multi,fullWidth,onSearch,placeholder,...other} = this.props;
        return (
            <div className={classnames(classes.root)}>
                <Input
                    disableUnderline={true}
                    fullWidth={fullWidth?true:false}
                    inputComponent={SelectWrapped}
                    placeholder={placeholder?placeholder:''}
                    value={multi?this.state.multi:this.state.single}
                    onChange={this.handleChange(multi?'multi':'single')}
                    id="react-select-single"
                    inputProps={{
                        classes,
                        name: 'react-select-single',
                        instanceId: 'react-select-single',
                        simpleValue: true,
                        multi: multi?true:false,
                        options: dataSource,
                        // children:childrens,
                        promptTextCreator:(result)=>this.onPromptTextCreator(result),
                    }}
                    {...other}
                />
            </div>
        )
    }
}
export default AutoComplete

