import React, { Component } from 'react';

class Input extends Component {
  state = {
    firstName: '',
    showName: false

  }

  displayNameHandler = (e) => {
    let updatedName = e.target.value;
    this.setState({ firstName: updatedName });
    //console.log(updatedName);  
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      showName: true
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter the Name</label>
          <input type="text" name="firstName" onChange={this.displayNameHandler} value={this.state.firstName} />
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
          {this.state.showName && <p>"FirstName: " {this.state.firstName}</p>}
        </form>
      </div>
    );
  }
}
export default Input;

