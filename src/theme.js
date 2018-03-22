/**
 * Created by lilei on 2018/1/10.
 */
import {createMuiTheme} from 'material-ui/styles';
const fontWeightMedium = 500;
export default createMuiTheme({
    status: {
        success: 'green'
    },
    typography: {
        // Use the system font.
        fontFamily: 'Tahoma, Helvetica, Arial,"Hiragino Sans GB", "Microsoft Yahei"',
        fontWeightMedium,
        body1: {
            fontWeight: fontWeightMedium,
        }
    },
    overrides: {
        MuiTab: {
            rootPrimarySelected: {
                color: '#319FCE'
            },
            label: {
                fontSize: '14px !important'
            }
        },
        MuiInputAdornment: {
            root: {
                position: 'absolute',
                right: '5px'
            }
        },
        MuiTableRow: {
            root: {
                height: '52px'

            }
        },
        MuiTableCell: {
            root: {
                borderBottom: '1px solid #E5E5E5'
            },
            typeHead: {
                fontSize: '14px'
            },
            typeBody: {
                fontSize: '14px'
            }
        },
        Pagination: {
            button: {
                border: 0
            }
        }
    }
})