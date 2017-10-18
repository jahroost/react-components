
var GroceryListItem = (props) => (
  <li onClick={onListItemClick}>{props.item}</li>
)

var onListItemClick = (event) => {
  console.log('I got clicked')  
}
var GroceryList = (props) => {


  return (
    <div>
      <h2>Grocery List</h2>
      <ul>
        {this.props.map(item => <GroceryListItem item={item} />)}
      </ul>
    </div>
  )
  
}

ReactDOM.render(<GroceryList groceries={['milk', 'sugar']}/>, document.getElementById('app'))