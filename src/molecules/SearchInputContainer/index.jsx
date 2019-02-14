import React, {Component} from 'react';
import { connect } from 'react-redux';
import { receiveTopics } from "../../store/actions/receiveTopics";
import SearchingInput from '../../atoms/SearchingInput';

class SearchInputContainer extends Component{
    handleChange = (event) => {
        this.props.receiveTopics(event.target.value);
    };
    render(){
        return(
            <SearchingInput handleChange={this.handleChange} />
        )
    }
}
const mapDispatchToProps = dispatch => ({
    receiveTopics: inputValue => {
        dispatch(receiveTopics(inputValue))
    }
});

export default connect(undefined, mapDispatchToProps)(SearchInputContainer);
