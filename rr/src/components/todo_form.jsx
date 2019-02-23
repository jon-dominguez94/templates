import React from 'react';

class TodoForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      body: '',
      id: this.props.length
    };

    this.update = this.update.bind(this);
  }

  update(field){
    return e => (
      this.setState({
        [field]: e.target.value
      })
    );
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createTodo(this.state);
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.body} placeholder="body" onChange={ this.update('body') }/>
          <button>Create Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;