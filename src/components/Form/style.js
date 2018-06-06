/**
 * Created by lilei on 2018/5/29.
 */
export default function (theme) {
    return {
        "inline": {
            "display": "inline-block",
            "padding": "0 10px",
            "vertical-align": "middle",
            "& label": {
                "lineHeight": "32px",
                "vertical-align": "top",
                "display": "inline-block",
                "color": "rgba(0,0,0,0.65)",
                "fontSize": "14px",
                "textAlign": "right",
                "paddingRight": "10px",
                "& .required": {
                    "color": theme.colors.error,
                    "verticalAlign": "middle"
                }
            },
            "& .input": {
                "position": "relative",
                "display": "inline-block",
                "width": "200px",
                "marginBottom": " 24px",
                "font-size": "14px",
                "textAlign": "left",
                "lineHeight": "32px",
            }
        },
        "vertical": {
            "marginBottom": "24px",
            "textAlign": "left",
            "&>label":{
                "width": "100%",
            },
            "& label": {
                "textAlign": "left",
                "lineHeight": "32px",
                "vertical-align": "top",
                "fontSize": "14px",
                "display": "inline-block",
                "color": "rgba(0,0,0,0.65)",
                "& .required": {
                    "color": theme.colors.error,
                    "verticalAlign": "middle"
                }
            },
            "& .input": {
                "position": "relative",
                "font-size": "14px",
                "textAlign": "left",
                "lineHeight": "32px",

            }
        },
        "horizontal": {
            "padding": "0 10px",
            "verticalAlign": "middle",
            "& label": {
                "textAlign": "right",
                "lineHeight": "32px",
                "vertical-align": "top",
                "fontSize": "14px",
                "display": "inline-block",
                "color": "rgba(0,0,0,0.65)",
                "paddingRight": "10px",
                "& .required": {
                    "color": theme.colors.error,
                    "verticalAlign": "middle"
                }
            },
            "& .input": {
                "position": "relative",
                "display": "inline-block",
                "marginBottom": "24px",
                "font-size": "14px",
                "textAlign": "left",
                "lineHeight": "32px",

            }
        },
        "grid": {
            "padding": "0 10px",
            "verticalAlign": "middle",
            "& label": {
                "textAlign": "right",
                "lineHeight": "32px",
                "vertical-align": "top",
                "fontSize": "14px",
                "display": "inline-block",
                "color": "rgba(0,0,0,0.65)",
                "paddingRight": "10px",
                "& .required": {
                    "color": theme.colors.error,
                    "verticalAlign": "middle"
                }
            },
            "& .input": {
                "position": "relative",
                "display": "inline-block",
                "marginBottom": "24px",
                "font-size": "14px",
                "textAlign": "left",
                "lineHeight": "32px",

            }
        },
        "inputError": {
            "&.error": {
                borderColor: theme.colors.error
            },
            "&.warn": {
                borderColor: theme.colors.warning
            }
        },
        "errorInfo": {
            "position": "absolute",
            "bottom": "-26px",
            "left": "0",
            "font-size": "12px"
        },
        "error": {
            color: theme.colors.error
        },
        "warn": {
            color: theme.colors.warning
        }
    }
}