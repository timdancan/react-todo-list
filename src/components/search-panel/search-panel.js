import { Component } from 'react'
import './search-panel.css';

export default class SearchPanel extends Component {
  
  state = {
    term: ''
  }

  onTermChange = (e) => {
    const {onSearchChange = () => {}} = this.props;
    this.setState({
      term: e.target.value
    });

    onSearchChange(e.target.value);
  };
  
  render() {
    return(
      <input 
      className="form-control search-input" 
      placeholder='text here to search' 
      type="text" 
      value={this.state.term} 
      onChange={this.onTermChange}/>
    )
  }

}
