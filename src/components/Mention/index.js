import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
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
        '&-editor':{
            // .input;
            lineHeight:1.5,
            padding: 0,
            display: 'block',
            '&-wrapper':{
                overflowY: 'auto',
                height: 'auto'
            }
        }
    }
});
@withStyles(styles)
export class App extends Component {
    static getMentions = getMentions;
    static defaultProps = {
        prefixCls: 'MuiMentionAnt',
        notFoundContent: '无匹配结果，轻敲空格完成输入',
        loading: false,
        multiLines: false,
    };
    static Nav = Nav;
    static toString = toString;
    static toContentState = toEditorState;
    static toEditorState = text => {
        console.warn('Mention.toEditorState is deprecated. Use toContentState instead.');
        return toEditorState(text);
    }
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
    }

    render() {
        const { prefixCls, loading, classes } = this.props;
        const { suggestions, focus } = this.state;
        const cls = classNames(classes['-wrapper'], {
            [`${prefixCls}-active`]: focus,
        });

        const notFoundContent = loading
            ? <Icon type="loading" />
            : this.props.notFoundContent;
        
        return (
            <RcMention
                {...this.props}
                className={classNames(cls,classes['-wrapper'])}
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

App.propTypes = {
    // prefixCls:PropTypes.string,
    suggestions:PropTypes.array,
    onSearchChange:PropTypes.func,
    onChange:PropTypes.func,
    loading: PropTypes.bool,
    className:PropTypes.string,
    focus:PropTypes.bool,
    multiLines: PropTypes.bool,
    // prefix:PropTypes.string,
    placeholder:PropTypes.string,
    getSuggestionContainer:PropTypes.func,
    onFocus:PropTypes.func,
    onBlur:PropTypes.func,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
}
export default withStyles(styles, {name: 'MuiMentionAnt'})(App);

