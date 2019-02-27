import React from 'react';

class TodoForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      body: '',
      id: this.props.id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidUpdate(prevProps){
    if(prevProps.id !== this.props.id){
      this.setState({
        id: this.props.id
      });
    }
  }

  update(field){
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.createTodo(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          placeholder="What needs to be done?" 
          value={this.state.body} 
          onChange={this.update('body')} 
          type="text"/>
      </form>
    );
  }
}

export default TodoForm;