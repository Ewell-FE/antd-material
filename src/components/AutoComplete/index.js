import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classnames from 'classnames'
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import Select from 'react-select';
import Icon from '../Icon'
import omit from 'omit'
//计算高度
function getLineHeight(str) {
    return parseInt(str, 10) - 2
}

const styles = theme => {
    let fontSize = theme.typography.fontSize,
        height = getLineHeight(theme.size.default),
        small = getLineHeight(theme.size.small),
        large = getLineHeight(theme.size.large),
        fontColor = theme.palette.text.primary;
    let childrenHeight = height - 6,
        childrenSmall = small - 6,
        childrenLarge = large - 6;
    let childTop = (height - childrenHeight) / 2,
        childrenSmallTop = (small - childrenSmall) / 2,
        childrenLargeTop = (large - childrenLarge) / 2;
    return  {
        root: {
            flexGrow: 1,
            display: 'inline-block',
            width: '100%',
            '& .Select': {
                clear: 'both',
                fontSize: fontSize,
                '&>.Select-control': {
                    height: '100%',
                    overflow: 'auto',
                    '& .Select-value,& .Select-placeholder,& .Select-input': {
                        height: height,
                        lineHeight: height + 'px',
                    },
                    '& .Select-value': {
                        color: 'rgba(0,0,0,.65)',
                        cursor: 'default',
                        marginRight: 4,
                        marginTop: 0,
                        fontSize: 'inherit',
                        borderRadius: '2px',
                        '&>.Select-value-icon': {
                            border: 'none',
                            float: 'right',
                            padding: '0 5px',
                            '&:hover': {
                                backgroundColor: '#fafafa',
                                color: 'rgba(0,0,0,.90)',
                            },
                        },
                        '& .Select-value-label': {
                            border: 'none',
                            color: fontColor,
                            padding: '0 5px',
                            verticalAlign: 'baseline'
                        }
                    }
                },
                '&>.Select-menu-outer': {
                    marginTop: 2,
                    borderRadius: 4,
                    fontSize: 'inherit',
                    boxShadow: '0 2px 8px rgba(0,0,0,.15)',
                    '& .Select-option.is-selected': {
                        backgroundColor: theme.select.selected,
                        color: theme.select.color,
                    },
                    '& .Select-option.is-focused': {
                        backgroundColor: theme.select.hover,
                        color: theme.select.color,
                    }
                },
            },
            '&>.Select.is-focused:not(.is-open) > .Select-control': {
                borderColor: theme.colors.primary,
                boxShadow: `0 0 0 2px ${theme.primary[100]}`
            },
            '& .Select.Select--multi': {
                '& .Select-control .Select-value': {
                    backgroundColor: '#fafafa',
                    border: '1px solid #e8e8e8',
                    height: childrenHeight,
                    lineHeight: childrenHeight + 'px',
                    marginTop: childTop
                }
            },
        },
        large: {
            '& .Select': {
                '& .Select-control': {
                    fontSize: fontSize + 2,
                    '.Select-value,& .Select-placeholder,& .Select-input': {
                        height: large,
                        lineHeight: large + 'px',
                    }
                }
            },
            '& .Select.Select--multi': {
                '& .Select-control .Select-value': {
                    height: childrenLarge,
                    lineHeight: childrenLarge + 'px',
                    marginTop: childrenLargeTop

                }

            },
        },
        small: {
            '& .Select': {
                '& .Select-control': {
                    '.Select-value,& .Select-placeholder,& .Select-input': {
                        height: small,
                        lineHeight: small + 'px',
                    }
                }
            },
            '& .Select.Select--multi': {
                '& .Select-control .Select-value': {
                    height: childrenSmall + 1,
                    lineHeight: childrenSmall + 'px',
                    marginTop: childrenSmallTop
                }

            },
        },
        chip: {
            margin: theme.spacing.unit / 4,
            border: "1px solid #e8e8e8",
            height: "24px",
            lineHeight: "24px",
            backgroundColor: "#fafafa"

        },
        inputRoot:{
            display:'block',
        },
        input:{
            textAlign:'left',
            padding:0,
            appearance: "none",
            boxSizing: "border-box",
            width: "100%",
            backgroundColor: "#fff",
            border: "1px solid #d9d9d9",
            boxShadow: "inset 0 1px 3px rgba(0, 0, 0, .05)",
            borderRadius: "4px",
            outline: "0",
            resize: "vertical",
            transition: "all .3s",
            "&:focus": {
                borderColor: theme.colors.primary,
                boxShadow: `0 0 0 2px ${theme.primary[100]}`
            },
            "&:disabled": {
                cursor: "not-allowed",
            }
        },
        selected:{
            backgroundColor: theme.select.selected,
            color: theme.select.color,
        },
    }};
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
                            label={optionRenderer?value.value:children}
                            className={classnames(classes.chip)}
                            deleteIcon={<Icon type="times-circle" onClick={onDelete} />}
                            onDelete={onDelete}
                        />
                    );
                }
                return <div className="Select-value">{optionRenderer?value.value:children}</div>;
            }}
            {...other}
        />
    );
}

@withStyles(styles)
export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            single: "",
            multi: "",
        }
    }

    onInputChange(result){
        if(result !== ''){
           this.props.onSearch && this.props.onSearch(result)
        }
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
    onFocus(value){
        this.props.onFocus && this.props.onFocus(value)
    }
    render() {
        const { classes,dataSource,multi,labelKey,fullWidth,optionRenderer,placeholder,ignoreCase,size,style} = this.props;
        let otherStyle = omit(style, ['width', 'height'])
        const otherProps = omit(this.props,['classes','dataSource','multi','labelKey','fullWidth','onSearch','optionRenderer','placeholder','ignoreCase','onFocus','size','style'])
        return (
            <div className={classnames(classes.root,classes[size])} style={{width: style.width,height:style.height}}>
                <Input  classes={{input:classes.input,root:classes.inputRoot}}
                        disableUnderline={true}
                        fullWidth={fullWidth?true:false}
                        inputComponent={SelectWrapped}
                        placeholder={placeholder?placeholder:''}
                        value={multi?this.state.multi:this.state.single}
                        inputProps={{
                            classes,
                            value:multi?this.state.multi:this.state.single,
                            simpleValue: true,
                            onBlurResetsInput:false,
                            // onSelectResetsInput:false,
                            multi: multi?multi:false,
                            options: dataSource,
                            valueKey:'value',
                            labelKey:labelKey?labelKey:'label',
                            optionRenderer:optionRenderer?optionRenderer:null,
                            autosize:true,
                            ignoreCase:ignoreCase?ignoreCase:false,
                            onFocus:(result)=>this.onFocus(result),
                            onChange:(result)=>this.onSelectChange(result),
                            onInputChange:(result)=>this.onInputChange(result),
                            ...otherProps,
                            ...otherStyle
                        }}
                />
            </div>
        )
    }
}
App.propTypes = {
    dataSource:PropTypes.array,
    labelKey: PropTypes.string,
    ignoreCase: PropTypes.bool,//大小写
    multi: PropTypes.bool,//多选
    removeSelected:PropTypes.bool,//是否从options中去除选中项
    onChange:PropTypes.func,//选项发生改变时触发
    onSearch:PropTypes.func//输入时的触发函数
}
export default App

