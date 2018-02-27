import React from 'react';
import {Provider} from 'react-redux';
import createStore from '../../lib/store';
import Dashboard from '../dashboard/index';
import {BrowserRouter, Route, Link} from 'react-router-dom';

const store = createStore();

class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => console.log('__STATE__: ', store.getState()));
  }

  render() {
    return (
      <div className="app">
        {/* <header className="header-content">
          <h4>Categories</h4>
          <nav>
            <ul>
              <li><Link to='/'>Dashboard</Link></li>
            </ul>
          </nav>
        </header> */}
        <main className="main-content">
          <Provider store={store}>
            <BrowserRouter>
              <Route exact path="/" component={Dashboard} />
            </BrowserRouter>
          </Provider>
        </main>
      </div>
    );
  }
}

export default App;
