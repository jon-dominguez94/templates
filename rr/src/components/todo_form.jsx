import React from 'react';

class TodoForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      body: ''
    };
  }

  render() {
    <div>
      <form>
        <input type="text" placeholder="body"/>
      </form>
    </div>
  }
}

export default TodoForm;