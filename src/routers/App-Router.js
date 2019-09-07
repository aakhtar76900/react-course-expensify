import React from 'react';
import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom';
import Header from '../components/Header';
import Dashboard from  '../components/Dashboard';
import CreateExpense from '../components/CreateExpense';
import EditExpense from '../components/EditExpense';
import NoMatch from '../components/NoMatch';
import Help from '../components/Help';

const AppRouter = () => {
    return (
        <BrowserRouter>
        <div>
        <Header />
            <Switch>
                <Route path="/" component={Dashboard} exact />
                <Route path="/create" component={CreateExpense}  />
                <Route path="/edit/:id" component={EditExpense} />
                <Route path="/help" component={Help}  />
                <Route component={NoMatch}  />
            </Switch>
        </div>
        
        </BrowserRouter>
    );
}

export default AppRouter;