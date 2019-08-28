import React from  'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = ({todos}) => (
            <List>
              {todos.map((todo,index) => {
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
);


export default TodoList