var GroceryListItem = (props) => (
  <li>{props.item}</li>
)

var GroceryList = (props) => (
  <div>
    <h2>Grocery List</h2>
    <ul>
      {props.groceries.map(item => <GroceryListItem item={item} />)}
    </ul>
  </div>
)


ReactDOM.render(<GroceryList groceries={['milk', 'sugar']}/>, document.getElementById('app'))