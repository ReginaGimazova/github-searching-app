/* eslint-disable react/prefer-stateless-function,react/destructuring-assignment,react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { receiveRepos } from '../../store/actions/receiveRepos';
import MainTemplate from '../../templates/MainTemplate';
import TopicList from '../../organisms/TopicList';

class HomePage extends Component {
  render() {
    const { data } = this.props;
    return (
      <MainTemplate>
        <TopicList data={data} receiveRepos={this.props.receiveRepos} />
      </MainTemplate>
    );
  }
}
const mapStateToProps = state => ({
  data: state.topics.data,
});

const mapDispatchToProps = dispatch => ({
  receiveRepos: (topic) => {
    dispatch(receiveRepos(topic));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);

HomePage.propTypes = {
  data: PropTypes.array,
  receiveRepos: PropTypes.func,
};

HomePage.defaultProps = {
  data: [],
  receiveRepos: undefined,
};
