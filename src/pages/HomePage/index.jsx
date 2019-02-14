import React, {Component} from 'react';
import { connect } from 'react-redux';
import { receiveRepos } from '../../store/actions/receiveRepos';
import MainTemplate from '../../templates/MainTemplate';
import TopicList from '../../organisms/TopicList';

class HomePage extends Component {
    render() {
        return (
            <MainTemplate>
               <TopicList data={this.props.data} receiveRepos={this.props.receiveRepos}/>
            </MainTemplate>
        );
    }
}
const mapStateToProps = state => ({
    data: state.topics.data,
});

const mapDispatchToProps = dispatch => ({
    receiveRepos: topic => {
        dispatch(receiveRepos(topic))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
