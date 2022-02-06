import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return(
        <>
             <Router>
                 <Switch>
                     <Route path='/'>{ Home }</Route>
                     <Route path='/about'>{ About }</Route>
                 </Switch>
             </Router> 
        </>
    )
}

export default App;
