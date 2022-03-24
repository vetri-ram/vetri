import React from 'react';
import './IndexHooks.scss';
import Header from './Pages/Header';
import SideMenu from './Pages/SideMenu';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HooksState from './UseState/Hookks';
import HooksEffect from './UseState/HooksEff';
import Home from './Pages/Home';
import HooksContext from './UseContext/MyApp';
const Indexhook = () => {
    return (
        <React.Fragment>
            <Router>

                <Header/>
                <Switch>
             <div className='indexDiv'>
              <div><SideMenu /></div>
              <div>
              <Route exact path="/" component={Home}/>
              <Route exact path="/state" component={HooksState}/>
              <Route path="/effect" component={HooksEffect}/>
              <Route path="/ref" component={HooksState}/>
              <Route path="/context" component={HooksContext}/>
              
              </div>
              
           </div>
           </Switch>
        </Router>
        </React.Fragment>
    );
}

export default Indexhook;
