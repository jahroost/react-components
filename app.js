
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <li onClick={onListItemClick}>{this.props.item}</li>
    )
  }
}


var onListItemClick = (event) => {
  console.log('I got clicked')  
}
var GroceryList = (props) => {


  return (
    <div>
      <h2>Grocery List</h2>
      <ul>
        {props.groceries.map(item => <GroceryListItem item={item} />)}
      </ul>
    </div>
  )
  
}

ReactDOM.render(<GroceryList groceries={['milk', 'sugar']}/>, document.getElementById('app'))