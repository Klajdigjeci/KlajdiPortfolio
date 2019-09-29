import React from 'react'
import {Link} from 'react-router-dom'
import '../styling/FrontPage.css'

class FrontPage extends React.Component{
    render(){
        return (<div class="frontPage">
            <div class="ui grid">
            <div class="sixteen wide column"></div>
            <div class="sixteen wide column"></div>
            <div class="sixteen wide column"></div>
        <div class="sixteen wide column"><h1 class="mainText"> Klajdi Gjeci Portfolio </h1></div>
        <div class="sixteen wide column"></div>
        <div class="sixteen wide column"></div>
        <div class="sixteen wide column"></div>
        <div class="eight wide column">
            <Link to='/newAnimation'>
            <figure class="newAnimation">
                <img src={require("../images/newAnimation.PNG")} alt="my img" width="300" height="150"/>
            </figure>
            </Link>
        </div>
        <div class="eight wide column">
            <figure>
                <img src={require("../images/oldAnimation.PNG")} alt="my img" width="300" height="150"/>
            </figure>
        </div>

        <div class="eight wide column">
            <a href="newAnimation"> New Animation </a>
            <p> * full screen for best view of animation </p>
        </div>
        <div class="eight wide column">
            <a href="../../oldAnimation.html"> Old Animation </a>
        </div>
        <div class="sixteen wide column"></div>
        <div class="sixteen wide column"></div>
        <div class="sixteen wide column"></div>
        <div class="sixteen wide column"></div>
        <div class="sixteen wide column"></div>
        <div class="sixteen wide column"></div>

        <div class="sixteen wide column">
            <form action="../../klajdiPortfolio/klajdiportfolio.html">
                <button type="submit" className="profolio-btn">Take me directly to the profolio</button>
            </form>
        </div>
      </div>
        </div>)
    }
}
export default FrontPage
