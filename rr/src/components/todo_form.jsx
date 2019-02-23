import React from 'react';

class TodoForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      body: ''
    };
  }

  update(field){
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  render(){
    return(
      <div>
        <form>
          <input type="text" value={this.state.body} placeholder="body" onChange={ () => this.update('body') }/>
          <button>Create Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;