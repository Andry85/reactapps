import React from 'react';


function isSearched(searchTerm) {
  return function(item) {
    return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  }
}


const Search = ({ value, onChange, children }) => 
  <form>
    {children} <input
    type="text"
    value={value}
    onChange={onChange}
    />
  </form>





function Table(props) {
    const { list, pattern, onDismiss } = props;

    const largeColumn = {
    width: '40%',
    };
    const midColumn = {
    width: '30%',
    };
    const smallColumn = {
    width: '10%',
    };

    return (
          <div className="table">
              {list.filter(isSearched(pattern)).map(item =>
                  <div key={item.objectID}>
                    <span style={largeColumn}>
                    <a href={item.url}>{item.title}</a>
                    </span>
                    <span style={midColumn}>
                    {item.author}
                    </span>
                    <span style={smallColumn}>
                    {item.num_comments}
                    </span>
                    <span style={smallColumn}>
                    {item.points}
                    </span>
                    <span style={smallColumn}>
                      <Button onClick={() => onDismiss(item.objectID)}>
                        Отбросить
                      </Button>
                    </span>
                  </div>
              )}

      </div>
    );
}

function Button(props) {
    const {
    onClick,
    className = '',
    children,
    } = props;
    return (
      <button
        onClick={onClick}
        className={className}
        type="button"
        >
        {children}
      </button>
    );
}

const listArray = [
  {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },
  {
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
  },
];


class App extends React.Component {

  constructor(props) {
      super(props);

      this.state={
        list: listArray,
        searchTerm: '',
      };

      this.onSearchChange = this.onSearchChange.bind(this);
      this.onDismiss = this.onDismiss.bind(this); 
  
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  


  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="App">

        <div className="page">
          <div className="interactions">
            <Search
              value={searchTerm}
              onChange={this.onSearchChange}
              >
              Поиск
            </Search>
          </div>
          <Table
            list={list}
            pattern={searchTerm}
            onDismiss={this.onDismiss} 
          />
        </div>

      </div>
    );
  }
}


export default App;

