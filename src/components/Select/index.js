import Select from './select'
import Async from './async'
import {withStyles} from "material-ui/styles/index";

//计算高度
function getLineHeight(str) {
    let num = str.split('px')[0]
    return Number(num - 2)
}
//公共样式
const styles = theme => {
    let fontSize = theme.typography.fontSize,
        height = getLineHeight(theme.size.default),
        small = getLineHeight(theme.size.small),
        large = getLineHeight(theme.size.large),
        fontColor = theme.palette.text.primary;
    let childrenHeight = height - 6, childrenSmall = small - 6, childrenLarge = large - 6;
    let childTop = (height - childrenHeight) / 2,
        childrenSmallTop = (small - childrenSmall) / 2,
        childrenLargeTop = (large - childrenLarge) / 2;
    return {
        root: {
            display: 'inline-block',
            width: '100%',
            textAlign: 'left'
        },
        control: {
            '&>.Select': {
                clear: 'both',
                minHeight: small,
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
                        marginTop: childTop,
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
                },
            },
            '&>.Select.is-focused:not(.is-open) > .Select-control': {
                borderColor: theme.colors.primary,
                boxShadow: "0 0 0 2px rgba(24,144,255,.2)"
            },
            '& .Select.Select--multi': {
                '& .Select-control .Select-value': {
                    backgroundColor: '#fafafa',
                    border: '1px solid #e8e8e8',
                    height: childrenHeight,
                    lineHeight: childrenHeight + 'px',
                }
            },
        },
        large: {
            '& .Select': {
                '& .Select-control': {
                    fontSize: fontSize + 2,
                    '& .Select-value': {
                        marginTop: childrenLargeTop,
                    },
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
                }

            },
        },
        small: {
            '& .Select': {
                '& .Select-control': {
                    '& .Select-value': {
                        marginTop: childrenSmallTop,
                    },
                    '.Select-value,& .Select-placeholder,& .Select-input': {
                        height: small,
                        lineHeight: small + 'px',
                    }
                }
            },
            '& .Select.Select--multi': {
                '& .Select-control .Select-value': {
                    height: childrenSmall,
                    lineHeight: childrenSmall + 'px',
                }

            },
        },
    }
}

const newAsync = withStyles(styles, {name: 'MuiSelectAnt'})(Async)
const Creatable = withStyles(styles,{name: 'MuiSelectAnt'})(Select.Creatable)
const AsyncCreatable = withStyles(styles,{name: 'MuiSelectAnt'})(Select.AsyncCreatable)

Select.Async = newAsync
Select.Creatable = Creatable
Select.AsyncCreatable = AsyncCreatable
export default withStyles(styles, {name: 'MuiSelectAnt'})(Select)
