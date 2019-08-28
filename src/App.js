import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


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

  render() {
    return (
      <React.Fragment>
        <Typography variant="h2" align="center" gutterBottom>
          To-Do List
      </Typography>
        <Grid container justify="center">
          <Grid item>
            <form onSubmit={event => {
              event.preventDefault();
              this.saveTodo();
            }}>
              <TextField type="text" placeholder="Add todo..." margin="normal" value={this.state.value} onChange={this.updateValue} />
            </form>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item md={8}>
            <List>
              {this.state.todos.map((todo,index) => {
                return (
                  <ListItem button key={index}>
                    <Checkbox />
                    <ListItemText primary={todo} />
                    <ListItemSecondaryAction>
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  };
}

export default App;
