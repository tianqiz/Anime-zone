import React, {Component} from 'react';
import Header from './common/header/index';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login'
import store from './store/index';
import Write from './pages/write'



class App extends Component {
  render(){
    return (
      <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />  
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Write}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>           
            </div>

          </BrowserRouter>            
      </Provider>

    );    
  }

}

export default App;
