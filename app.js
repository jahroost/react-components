
// class GroceryListItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       done: false
//     }
//   }
  
//   onListItemClick() {
//     console.log('I got clicked')
    
//   }
  
//   render () {
//     return (
//       <li onClick={onListItemClick}>{this.props.item}</li>
//     )
//   }
// }


// var GroceryList = (props) => {


//   return (
//     <div>
//       <h2>Grocery List</h2>
//       <ul>
//         {props.groceries.map(item => <GroceryListItem item={item} />)}
//       </ul>
//     </div>
//   )
  
// }

// ReactDOM.render(<GroceryList groceries={['milk', 'sugar']}/>, document.getElementById('app'))





//---------------------------------------------------------------
// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library
class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    // `state` is just an object literal
    this.state = {
      done: false
    };
  }

  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    // Making the style conditional on our `state` lets us 
    // update it based on user interactions.
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    // You can pass inline styles using React's `style` attribute to any component
    // snake-cased css properties become camelCased this this object
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );
  }
}

// Update our `TodoList` to use the new `TodoListItem` component
// This can still be a stateless function component!
var TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <TodoListItem todo={todo} />
    )}
  </ul>
);

ReactDOM.render(<TodoList todos={['milk', 'sugar']}/>, document.getElementById('app'))
