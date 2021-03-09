export default function (theme) {
    return {
        root: {
            "font-size": "14px",
            "line-height": "1.5",
            "color": "rgba(0,0,0,.65)",
            "box-sizing": "border-box",
            "margin": "0",
            "padding": "0",
            "list-style": "none",
            "position": "absolute",
            "z-index": "1050",
            '& .yh-time-picker-panel-combobox':{
                display:'flex',
                '& .yh-time-picker-panel-select':{
                    flex:1
                },
            },
            '& .yh-calendar-today .yh-calendar-date':{
                borderColor:theme.colors.primary,
                color:theme.colors.primary

            },
            '& .yh-calendar-selected-day .yh-calendar-date,& .yh-calendar-selected-date .yh-calendar-date,& .yh-calendar-month-panel-selected-cell .yh-calendar-month-panel-month,& .yh-calendar-year-panel-selected-cell .yh-calendar-year-panel-year':{
                background:theme.colors.primary,
                color:'#fff',
                "&:hover":{
                    color:'#fff',
                    background:theme.colors.primary
                }
            },
            '& .yh-time-picker-panel-select li:hover,& .yh-calendar-date:hover,& .yh-calendar-month-panel-cell .yh-calendar-month-panel-month:hover,& .yh-calendar-year-panel-year:hover':{
                background:theme.colors.light,
            },
            '& .yh-calendar-today-btn, .yh-calendar-ok-btn, .yh-calendar-time-picker-btn':{
                color:theme.colors.primary,
                "&:hover":{
                    color:theme.primary[400]
                }
            },
            '& .yh-calendar-year-select:hover, .yh-calendar-month-select:hover, .yh-calendar-day-select:hover':{
                color:theme.primary[400]
            },
            '& .yh-calendar-prev-month-btn:hover, .yh-calendar-next-month-btn:hover, .yh-calendar-prev-year-btn:hover, .yh-calendar-next-year-btn:hover':{
                color:theme.primary[400]
            },
            "& .yh-calendar-month-panel-header > a:hover,& .yh-calendar-year-panel-header > a:hover":{
                color:theme.primary[400]
            },
            '& .yh-calendar-week-number .yh-calendar-tbody > tr:hover,& .yh-calendar-week-number .yh-calendar-tbody > tr:hover .yh-calendar-date':{
                background:theme.colors.light,
            },
            '& .yh-calendar-week-number .yh-calendar-tbody > tr .yh-calendar-selected-day .yh-calendar-date,& .yh-calendar-week-number .yh-calendar-tbody > tr:hover .yh-calendar-selected-day .yh-calendar-date':{
                borderColor:'transparent',
                background:theme.colors.light,
                color:'inherit'
            },
            '& .yh-calendar-week-number .yh-calendar-tbody >.yh-calendar-active-week':{
                background:theme.colors.light,
                '& .yh-calendar-date':{
                    fontWeight:600
                }
            },
            '& .yh-calendar-range .yh-calendar-in-range-cell':{
                background:theme.colors.light,
            },
            '& .yh-time-picker-panel-inner':{
                boxShadow:'none',
                borderColor:'transparent',
                '& .yh-time-picker-panel-input-wrap':{
                    display:'none'
                },
                '& .yh-time-picker-panel-select':{
                    height:'216px'
                }
            },
            '& .yh-calendar-range-left .yh-time-picker-panel-inner':{
                borderRight:'2px solid #e8e8e8',
                borderRadius:'0',
                borderBottom:'1px solid #e8e8e8'
            },
            '& .yh-calendar-range-right .yh-time-picker-panel-inner':{
                borderBottom:'1px solid #e8e8e8',
                borderRadius:'0',
            }
        },
        span:{
            "&:focus":{
                "outline":'none',
            }
        }
    }
}