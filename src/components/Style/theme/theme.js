/**
 * Created by lilei on 2018/3/28.
 */
import {blue, green, red, yellow, grey} from '@material-ui/core/colors';
export default function (config = {primaryColor: blue}) {
    let primaryColor = config.primaryColor
    return {
        '@global': {
            body: {
                fontFamily: 'Monospaced Number,Chinese Quote,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif'
            },
            a: {
                textDecoration: 'underline'
            }
        },
        primary: primaryColor,
        colors: {
            primary: primaryColor[600],
            light: primaryColor[50],
            info: primaryColor[600],
            success: green[600],
            processing: primaryColor[600],
            error: red[600],
            warning: yellow[600],
            normal: '#d9d9d9',
        },
        clearfix: {
            zoom: 1,
            '&:after': {
                display: 'block',
                clear: 'both',
                content: '""',
                visibility: 'hidden',
                height: 0
            }
        },
        disabled: {
            color: grey[400],
            backgroundColor: grey[200],
            dark: grey[400],
            "&:hover": {
                backgroundColor: '#f5f5f5'
            }
        },
        rate: {
            activeColor: yellow[600],
            fontSize: 24
        },
        size: {
            small: "24px",
            default: "32px",
            large: "40px"
        },
        button: {
            hover: primaryColor[300]
        },
        radio: {
            primary: primaryColor[300],
            disabled: '#e6e6e6'
        },
        table: {
            hovering: '#E6F7FF',
            tableHead: '#fafafa'
        },
        select: {
            selected: '#fafafa',
            color: 'rgba(0,0,0,.65)',
            hover: '#E6F7FF'
        },
        alert: {
            width: 100,
            success: '#b7eb8f',
            successBg: '#f6ffed',
            warn: '#ffe58f',
            warnBg: '#fffbe6',
            info: '#91d5ff',
            infoBg: '#e6f7ff',
            error: '#ffa39e',
            errorBg: '#fff1f0',

        },
        tooltip: {
            color: '#fff',
            fontSize: '14px',
            background: 'rgba(0,0,0,.75)'
        },
        typography: {
            // Use the system font.
            fontFamily: 'Tahoma, Helvetica, Arial,"Hiragino Sans GB", "Microsoft Yahei"'
        },
        overrides: {}
    }
}