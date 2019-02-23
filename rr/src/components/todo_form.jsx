import React from 'react';

class TodoForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      body: ''
    };
  }

  render() {
    return(
      <div>
        <form>
          <input type="text" placeholder="body"/>
          <button>Create Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;