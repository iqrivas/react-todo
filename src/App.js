import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      todos: []
    };
  }

  updateValue = event => {
    this.setState({
      value: event.target.value
    });
  };

  saveTodo = () => {
    if (this.state.value) {
      this.setState({
        todos: [...this.state.todos, this.state.value],
        value: "",
      });
    }
    console.log(this.state);
  };

  deleteTodo = (index) => {
    this.setState({
      todos: this.state.todos.filter((_,i)=> index !== i)
    });
  };

  render() {
    return (
      <React.Fragment>
        <Typography variant="h2" align="center" gutterBottom>
          To-Do List
      </Typography>
        <Grid container justify="center">
          <Grid item>
            <TodoForm saveTodo={this.saveTodo} updateValue={this.updateValue} value={this.state.value} />
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item md={8}>
            <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  };
}

export default App;
