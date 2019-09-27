import React from 'react'
import Project from './Project'

import '../styling/css/slidefolio.css'
import '../styling/css/bootstrap.css'

class Profolio extends React.Component{

    renderHead= () =>{
        console.log("done")
        return(
        <div id="top" class="mainHeader">
    	     <img class="img-rounded" alt="Klajdi Gjeci Profile" src={require("../images/me.png")} />

        </div>)
    }

    renderNavBar(){
        return(
            <div id="nav">
          <nav class="navbar navbar-new" role="navigation">
         <div class="container">

        <div class="navbar-header">

      	<a href="#" class="navbar-brand">Klajdi Gjeci</a>
        </div>

      	  <ul class="nav navbar-nav navbar-right text-center">
      	    <li><a href="#top"><i class="service-icon fa fa-home"></i>&nbsp;Home</a></li>
              <li><a href="#about"><i class="service-icon fa fa-info"></i>&nbsp;About</a></li>
              <li><a href="#services"><i class="service-icon fa fa-laptop"></i>&nbsp;Main Links</a></li>
              <li><a href="#portfolio"><i class="service-icon fa fa-camera"></i>&nbsp;Projects</a></li>
              <li><a href="#contact"><i class="service-icon fa fa-envelope"></i>&nbsp;Contact</a></li>
          </ul>

        </div>
      </nav>
      </div>
  )
    }

    renderAbout(){
        return (
            <div id="about" class="about_us">
              <div class="container">
                <div class="row">
                  <div class="col-md-8 col-md-offset-2 text-center">
                    <h2>About Me</h2>
                    <p class="lead"> Little Introduction of myself: Hello, my name is Klajdi Gjeci, and I am currently on my Junior year at Central Washington University pursuing Bachelors in Computer Science. I really got into front-end developing after receiving my associate degree in computer Science on December 2017. Over the last two years I have been teaching myself technologies such as HTML5,CSS3, Javascript, React, Redux and others that aren't taught in depth in college. I have applied these skills to completing some personal projects (see below). My ultimate goal is becoming a Full-Stact Web Developer. As of right now, I am activly looking for a position where I could apply my skills and knowledge. I love feedback. Please contact me directly at klajdi.gjeci14@gmail.com or by fillling the form below for any inquries, questions about projects or just to say hi. :) Sincerely: Klajdi Gjeci</p>
                  </div>
                </div>
              </div>
            </div>
        )
    }

    renderLinks(){
        return(
            <div id="services" class="services">
              <div class="container">
                <div class="row">
                  <div class="col-md-4 col-md-offset-4 text-center">
                    <h2>My Links</h2>
                    <hr/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 text-center">
                    <div class="service-item">
                      <i class="service-icon fa fa-file fa-3x"></i>
                      <h3>Resume</h3>
                      <a href="https://drive.google.com/file/d/1oUcGBUWcriQXrXHBU0L9qjKY8vD27JMN/view?usp=sharing" target="_blank">This is a link to my most recent resume. </a>
                    </div>
                  </div>
                  <div class="col-md-4 text-center">
                    <div class="service-item">
                      <i class="service-icon fa fa-github fa-3x"></i>
                      <h3>Github</h3>
                      <a href="https://github.com/Klajdigjeci">This is my github link to download my projects there.</a>
                    </div>
                  </div>
                  <div class="col-md-4 text-center">
                    <div class="service-item">
                      <i class="service-icon fa fa-briefcase fa-3x"></i>
                      <h3>Transcripts | Unofficial</h3>
                      <a href="https://drive.google.com/file/d/1yMOEnmGnl7msfCV61rkVSA40EQyEedql/view?usp=sharing" target="_blank">The link to my unofficial transcripts.</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }

    renderProjects(){
        return (
            <div id="portfolio" class="portfolio">
            <div class="container">
            <div class="row push50">

                    <h2>My Projects</h2>
                    <hr/>
                    <div class="ui three column grid">
                      <div class="row">
                        <div class="column"><Project name="Project 1" description="Quick Desscription for project 1" image={require("../images/nature.jpg")}/></div>
                        <div class="column"><Project name="Project 2" description="Quick Desscription for project 2" image={require("../images/nature.jpg")}/></div>
                        <div class="column"><Project name="Project 3" description="Quick Desscription for project 3" image={require("../images/nature.jpg")}/></div>
                    </div>
                    <div class="row">
                        <div class="column"><Project name="Project 4" description="Quick Desscription for project 4" image={require("../images/nature.jpg")}/></div>
                        <div class="column"><Project name="Project 5" description="Quick Desscription for project 5" image={require("../images/nature.jpg")}/></div>
                    </div>


</div>
</div>
</div>
</div>
        )
    }

    renderContact(){
        return(
            <div id="contact">
              <div class="container">
                <div class="row">
                <div class="col-md-4 col-md-offset-4 text-center">
                    <h2>Contact Me</h2>
                    <hr/>
                  </div>
                  <div class="col-md-5 col-md-offset-3">
                    <form action={`mailto:klajdi.gjeci14@gmail.com?subject=Website Inqury`} method="post" enctype="text/plain" id="contact-form" class="form-horizontal">
                    <fieldset>
                                    <div class="form-group">
                                      <label class="col-sm-4 control-label" for="name">Your Name</label>
                                      <div class="col-sm-8">
                                        <input type="text"  placeholder="Your Name" class="form-control" name="name" id="name" />
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label class="col-sm-4 control-label" for="email">Email Address</label>
                                      <div class="col-sm-8">
                                        <input type="text" placeholder="Enter Your Email Address" class="form-control" name="email" id="email" />
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label class="col-sm-4 control-label" for="message">Your Message</label>
                                      <div class="col-sm-8">
                                        <textarea placeholder="Please Type Your Message" class="form-control" name="message" id="message" rows="3"></textarea>
                                      </div>
                                    </div>
                          <div class="col-sm-offset-4 col-sm-8">
                                <button type="submit" class="btn btn-success">Submit</button>
                                  <button type="reset" class="btn btn-primary">Reset Message</button>
                                </div>
                                </fieldset>
                                </form>

                  </div>
                </div>
              </div>
            </div>
        )
    }

    render(){
        return (
        <div>
            {this.renderHead()}
            {this.renderNavBar()}
            {this.renderAbout()}
            {this.renderLinks()}
            {this.renderProjects()}
            {this.renderContact()}
        </div>)}

}

export default Profolio;
