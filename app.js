// TODO
/*var GroceryList = () => {
  <ul>
   <li>item1</li>
   <li>item2</li>
  </ul>
};

const elt = <h1>Hello, world</h1>

ReactDOM.render(GroceryList, document.getElementById('app'));
*/
var Cucumbers = () => (
  <li>Cucumber</li>
);

var Kale = () => (
  <li>Kale</li>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
  }
  onGroceryItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
    return (
      <li style={style} onClick={this.onGroceryItemClick.bind(this)}>{this.props.grocery}</li>
    );
  }
}
/*
var GroceryListItem = (props) => (
  <ul>
    <li>{props.groceries[0]}</li>
    <li>{props.groceries[1]}</li>
    <li>{props.groceries[2]}</li>
  </ul>
);
*/

var GroceryList = (props) => (
  <ul>
    {props.groceries.map(grocery =>
      <GroceryListItem key={grocery}
                       grocery={grocery} />
    )}
  </ul>
);

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceries={['Kale', 'Rhubarb', 'Vodka']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));


