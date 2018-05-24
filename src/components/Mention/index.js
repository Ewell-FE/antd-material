import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import shallowequal from 'shallowequal';
import classNames from 'classnames';
import RcMention, { Nav, toString, toEditorState, getMentions } from 'rc-editor-mention';
import Icon from '../Icon';
const styles = theme => ({
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

    },
    mentionWrap:{
        '& .MuiMentionAnt-dropdown':{
                marginTop: '1.5em',
                maxHeight: '250px',
                minWidth: '120px',
                backgroundColor: '#fff',
                boxShadow: '0 1px 6px rgba(0, 0, 0, .2)',
                borderRadius: '4px',
                boxSizing: 'border-box',
                zIndex: 1050,
                left: '-9999px',
                top: '-9999px',
                position: 'absolute',
                outline: 'none',
                overflowX: 'hidden',
                overflowY: 'auto',
                fontSize: '12px',
                textAlign:'left',
                '& .&-notfound&-item':{
                    color: 'rgba(0,0,0, .25)',
                    //@{iconfont-css-prefix}-loading {
                    //.@{iconfont-css-prefix}-loading {
                    //  color: @primary-color;
                    // textAlign: 'center',
                    // display: 'block',
                    //}
                },
        '&-item': {
            position: 'relative',
            display: 'block',
            padding: '7px 8px',
            fontWeight: 'normal',
            color: 'rgba(0,0,0, .65)',
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            transition: 'background 0.3s',
            '&:hover': {
                    backgroundColor:'#ecf6fd',
            },
            '&.focus,&-active':{
                    backgroundColor: '#ecf6fd',
            },
            '&-disabled':{
                color: 'rgba(0,0,0,.25)',
                cursor: 'not-allowed',
            '&:hover': {
                    color: 'rgba(0,0,0,.25)',
                    backgroundColor: '#fff',
                    cursor: 'not-allowed',
                }
            },
            '&-selected':{
               '&,&:hover': {
                        backgroundColor: '#f7f7f7',
                        fontWeight: 'bold',
                        color: 'rgba(0,0,0, .65)',
                    }
                },

            '&-divider': {
                    height: '1px',
                    margin: '1px 0',
                    overflow: 'hidden',
                    backgroundColor: '#e9e9e9',
                    lineHeight: 0,
                }
            }
        }
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
    constructor(props) {
        super(props)
        this.state = {
            suggestions: props.suggestions,
            focus: false,
        }
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
        const { prefixCls, loading, classes,getSuggestionContainer } = this.props;
        const { suggestions, focus } = this.state;
        const cls = classNames('', {
            [`${prefixCls}-active`]: focus,
        });

        const notFoundContent = loading
            ? <Icon type="loading" />
            : this.props.notFoundContent;

        return (
            <div className={classNames(classes.mentionWrap,'mentionWrap')}>
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
                    getSuggestionContainer={getSuggestionContainer?getSuggestionContainer:()=>document.getElementsByClassName('mentionWrap')[0]}
                />
            </div>
        )
    }
}

Mention.propTypes = {
    // prefixCls:PropTypes.string,
    suggestions:PropTypes.array,
    onSearchChange:PropTypes.func,
    onChange:PropTypes.func,
    loading: PropTypes.bool,
    className:PropTypes.string,
    // focus:PropTypes.bool,
    multiLines: PropTypes.bool,
    prefix:PropTypes.string,
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
