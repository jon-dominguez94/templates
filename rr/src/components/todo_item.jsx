import React from 'react';

class TodoItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      body: this.props.todo.body,
      id: this.props.todo.id,
      editing: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateTodo(this.state);
    this.setState({ editing: false });
  }

  render(){
    if(!this.state.editing){
      return (
        <li onClick={() => this.setState({ editing: true })}>
          {this.props.todo.body}
        </li>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.body}
            onChange={this.update('body')}
            type="text" />
        </form>
      );
    }
  }
}

export default TodoItem;