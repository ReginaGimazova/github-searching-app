/* eslint-disable react/destructuring-assignment,react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainTemplate from '../../templates/MainTemplate';
import CardList from '../../organisms/CardList';
import { receiveRepos } from '../../store/actions/receiveRepos';

class TopicPage extends Component {
  componentDidMount() {
    this.props.receiveRepos();
  }

  render() {
    const { data } = this.props;
    return (
      <MainTemplate>
        <CardList data={data} />
      </MainTemplate>
    );
  }
}

const mapStateToProps = state => ({
  data: state.repos.data,
});
const mapDispatchToProps = dispatch => ({
  receiveRepos: (topic) => {
    dispatch(receiveRepos(topic));
  },
});
export default connect(
  mapStateToProps, mapDispatchToProps,
)(TopicPage);

TopicPage.propTypes = {
  data: PropTypes.array,
  receiveRepos: PropTypes.func,
};

TopicPage.defaultProps = {
  data: [],
  receiveRepos: undefined,
};
