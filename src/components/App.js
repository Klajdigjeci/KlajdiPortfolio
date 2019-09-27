import React from 'react'
import OldAnimation from './OldAnimation'
import NewAnimation from './NewAnimation'
import NewAnimationPageTwo from './NewAnimationPageTwo'
import Profolio from './Profolio.js'
import FrontPage from './FrontPage'
import '../styling/App.css'

import { Route, Link,Switch, BrowserRouter as Router } from 'react-router-dom'


class App extends React.Component{


    render(){
        return (

            <Router>
           <div>
               <div className="ui container">

               </div>
              <Switch>
                <Route exact path="/" component ={FrontPage} />
                 <Route path="/oldAnimation" component={OldAnimation} />
                 <Route path="/newAnimation" component={NewAnimation} />
                 <Route path="/newAnimationPageTwo" component={NewAnimationPageTwo} />
                 <Route path="/profolio" component={Profolio} />
            </Switch>
           </div>

         </Router>
    )
    }
}

export default App;
