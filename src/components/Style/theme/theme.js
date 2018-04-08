/**
 * Created by lilei on 2018/3/28.
 */
import {blue, green, red, yellow,grey} from 'material-ui/colors';
const primaryColor = blue
export default {
    colors: {
        primary: primaryColor[600],
        info: primaryColor[600],
        success: green[600],
        processing: primaryColor[600],
        error: red[600],
        warning: yellow[600],
        normal: '#d9d9d9',
        hovering:'#E6F7FF',
        tableHead:'#fafafa'
    },
    clearfloat:{
        zoom:1,
        '&:after':{
            display:'block',
            clear:'both',
            content:'""',
            visibility:'hidden',
            height:0
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
    button: {
        hover: primaryColor[300]
    },
    typography: {
        // Use the system font.
        fontFamily: 'Tahoma, Helvetica, Arial,"Hiragino Sans GB", "Microsoft Yahei"'
    },
    overrides: {}
}