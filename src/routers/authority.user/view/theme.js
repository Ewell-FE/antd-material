/**
 * Created by sasha on 2018/2/9.
 */
import React from 'react';
import {createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
    overrides: {
        MuiTabScrollButton: {
            // Name of the styleSheet
            root: {
                // Name of the rule
                flex: '0 0 16px'
            },
        },
    },
});


export default theme;