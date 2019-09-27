import React from 'react'
import {Link} from 'react-router-dom'
import '../styling/NewAnimation.css'

class NewAnimation extends React.Component{

    state= {clicked: true, search: "Click here to continue!"}

    changeInputValue = () =>{
        this.setState({search:"Klajdi Gjeci",clicked:false})
    }

    renderHelp(){
        console.log("called")

                if(this.state.clicked){
                    console.log("called Search")
                    return (<button id="search" className="search"> Search </button>)
                }else{
                    return (<Link to='/newAnimationPageTwo'>
                        <button type="button" className="search">Now Click Here</button>
                    </Link>)
                }
    }

    render(){
            return(
                <div>
                    <p className="gmail"> Gmail </p>
                    <p className="images"> Images </p>
                    <p className="about"> About </p>
                    <p className="store">Store </p>
                    <h1 className="K">  K </h1>
                    <h1 className="O">  O </h1>
                    <h1 className="O2">  O </h1>
                    <h1 className="G">  G </h1>
                    <h1 className="L">  L </h1>
                    <h1 className="E">  E </h1>
                    <p className="gicon"> ☷ </p>
                    <p className="gicon-2"> &#128512; </p>
                    <input class="searchbar" id="searchbar" value={this.state.search} onClick={this.changeInputValue} onChange={this.changeInputValue} />
                    {this.renderHelp()}
                    <button className="feelingLucky"> Feeling Lucky </button>
                    </div>
        )

}
}


export default NewAnimation;
