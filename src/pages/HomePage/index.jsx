import React, {Component} from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import { connect } from 'react-redux';
import MainTemplate from '../../templates/MainTemplate';
import { receiveTopics } from '../../store/actions/receiveTopics';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#24292E',
        }
    }
});

class HomePage extends Component {
    componentDidMount(){
        this.props.receiveTopics();
        console.log(this.props.data);
    }
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <MainTemplate/>
            </MuiThemeProvider>

        );
    }
}
const mapStateToProps = state => ({
    data: state.topics.data,
});

const mapDispatchToProps = dispatch => ({
    receiveTopics: () => {
        dispatch(receiveTopics());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomePage);
