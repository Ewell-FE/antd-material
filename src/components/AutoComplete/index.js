import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classnames from 'classnames'
import Typography from 'material-ui/Typography';
import Input from 'material-ui/Input';
import Chip from 'material-ui/Chip';
import Select from '../Select';
import Icon from '../Icon'
import { MenuItem } from 'material-ui/Menu';
let flag = true;
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
        input:{
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
        }
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


    render() {
        const { classes,dataSource,multi,labelKey,fullWidth,onSearch,optionRenderer,placeholder,ignoreCase,...other} = this.props;
        return (
            <div className={classnames(classes.root)}>
                <Input  classes={{input:classes.input}}
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
                            onChange:(result)=>this.onSelectChange(result),
                            onInputChange:(result)=>this.onInputChange(result),
                            ...other
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

