import React, {Component} from 'react';
import { connect } from 'react-redux';
import MainTemplate from '../../templates/MainTemplate';
import CardList from '../../organisms/CardList';
import {receiveRepos} from "../../store/actions/receiveRepos";

class TopicPage extends Component{
    componentDidMount(){
        this.props.receiveRepos();
    }
    render(){
        return(
            <MainTemplate>
                <CardList data={this.props.data}/>
            </MainTemplate>
        )
    }
}

const mapStateToProps = state => ({
    data: state.repos.data
});
const mapDispatchToProps = dispatch => ({
    receiveRepos: topic => {
        dispatch(receiveRepos(topic))
    }
});
export default connect(
    mapStateToProps, mapDispatchToProps
)(TopicPage);
