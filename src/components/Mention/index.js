import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import shallowequal from 'shallowequal';
import classNames from 'classnames';
import RcMention, { Nav, toString, toEditorState, getMentions } from 'rc-editor-mention';
import Icon from '../Icon';
import './style.less'
const styles = theme =>({
    wrapper:{
        position:'relative',
        display: 'inline-block',
        width: '100%',
        verticalAlign: 'middle',
        '& .MuiMentionAnt-editor':{
            lineHeight:1.5,
            padding: 0,
            display: 'block',
            textAlign:'left',
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
            "&:focus,&:hover": {
                borderColor: theme.colors.primary,
                boxShadow: `0 0 0 2px ${theme.primary[100]}`
            },
            "&:disabled": {
                cursor: "not-allowed",
            },
            '& .MuiMentionAnt-editor-wrapper':{
                overflowY: 'auto',
                height: 'auto'
            },
        },
        '&.disabled':{
            '& .MuiMentionAnt-editor.readonly':{
                backgroundColor: '#f5f5f5',
                opacity: 1,
                cursor: 'not-allowed',
                color: 'rgba(0,0,0,.25)',
            }
        },
        '& textarea&':{
            maxWidth: '100%',
            height: 'auto',
            verticalAlign: 'bottom',
            transition: ' all .3s, height 0s',
        },
        '& .public-DraftEditorPlaceholder-root': {
            position: 'absolute',
            '& .public-DraftEditorPlaceholder-inner': {
                color: '#bfbfbf',
                opacity: '1',
                outline: 'none',
                whiteSpace: 'pre-wrap',
                wordWrap: 'break-word',
                height: 'auto',
                padding: '4px 7px'
            }
        },
        '& .DraftEditor-editorContainer .public-DraftEditor-content':{
            height: 'auto',
            padding: '4px 7px',
        },
    }
});
@withStyles(styles)
export class Mention extends Component {
    static defaultProps = {
        prefixCls: 'MuiMentionAnt',
        notFoundContent: '无匹配结果，轻敲空格完成输入',
        loading: false,
        multiLines: false
    };
    constructor(props,context) {
        super(props)
        this.state = {
            suggestions: props.suggestions,
            focus: false,
        }
    }
    componentDidMount() {
         this.props.withRef && this.props.withRef(this)
    }
    componentWillReceiveProps(nextProps) {
        const { suggestions } = nextProps;
        if (!shallowequal(suggestions, this.props.suggestions)) {
            this.setState({
                suggestions,
            });
        }
    }

    onSearchChange = (value, prefix) => {
        if (this.props.onSearchChange) {
            return this.props.onSearchChange(value, prefix);
        }
        debugger
        return this.defaultSearchChange(value);
    }

    onChange = (editorState) => {
        if (this.props.onChange) {
            this.props.onChange(editorState);
        }
    }

    defaultSearchChange(value){
        const searchValue = value.toLowerCase();
        const filteredSuggestions = (this.props.suggestions || []).filter(
            suggestion => {
                if (suggestion.type && suggestion.type === Nav) {
                    return suggestion.props.value ?
                        suggestion.props.value.toLowerCase().indexOf(searchValue) !== -1
                        : true;
                }
                return suggestion.toLowerCase().indexOf(searchValue) !== -1;
            },
        );
        this.setState({
            suggestions: filteredSuggestions,
        });
    }

    onFocus = (ev) => {
        this.setState({
            focus: true,
        });
        if (this.props.onFocus) {
            this.props.onFocus(ev);
        }
    }
    onBlur = (ev) => {
        this.setState({
            focus: false,
        });
        if (this.props.onBlur) {
            this.props.onBlur(ev);
        }
    }
    focus = () => {
        this.mentionEle._editor.focus();
    }
    mentionRef = ele => {
        this.mentionEle = ele;
        return ele;
    }

    render() {
        const { prefixCls, loading, classes } = this.props;
        const { suggestions, focus } = this.state;
        const cls = classNames('', {
            [`${prefixCls}-active`]: focus,
        });

        const notFoundContent = loading
            ? <Icon className="fa fa-spinner fa-pulse fa-fw loading" />
            : this.props.notFoundContent;

        return (
            <RcMention
                {...this.props}
                className={classNames(classes.wrapper,cls)}
                ref={this.mentionRef}
                onSearchChange={this.onSearchChange}
                onChange={this.onChange}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                suggestions={suggestions}
                notFoundContent={notFoundContent}
            />
        )
    }
}

Mention.propTypes = {
    // prefixCls:PropTypes.string,
    suggestions:PropTypes.array,
    onSearchChange:PropTypes.func,//输入框中 @ 变化时回调
    onChange:PropTypes.func,
    loading: PropTypes.bool,
    className:PropTypes.string,
    // focus:PropTypes.bool,
    multiLines: PropTypes.bool,
    prefix: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]),//触发弹出下拉框的字符
    placeholder:PropTypes.string,
    getSuggestionContainer:PropTypes.func,
    onFocus:PropTypes.func,
    onBlur:PropTypes.func,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
}

Mention.toStrings = toString
Mention.toContentState = toEditorState;
Mention.toEditorState = text => {
    console.warn('Mention.toEditorState is deprecated. Use toContentState instead.');
    return toEditorState(text);
}
Mention.getMentions = getMentions;
Mention.Nav = Nav;
export default withStyles(styles, {name: 'MuiMentionAnt'})(Mention)
