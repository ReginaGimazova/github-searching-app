import React, {Component} from 'react';
import MainTemplate from '../../templates/MainTemplate';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#24292E',
        }
    }
});

class HomePage extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <MainTemplate>
                    <p>aaaaaa</p>
                </MainTemplate>
            </MuiThemeProvider>

        );
    }
}

export default HomePage;
