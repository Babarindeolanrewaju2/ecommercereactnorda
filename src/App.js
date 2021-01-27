/* eslint-disable react/jsx-no-undef */
import './App.css';
import Items from './Items';
import Search from './Search';

function App() {
  return (
    <div className="App">
      <div class="shop-area pt-120 pb-120">
        <div class="container">
          <div class="row">
              <Search />
              <Items />
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
