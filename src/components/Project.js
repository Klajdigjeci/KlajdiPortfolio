import React from 'react'

class Project extends React.Component{

    render(){
        return (

        <div class="ui card">
          <div class="image">
                <img src={this.props.image} alt="placeholder" />
          </div>
          <div class="content">
            <div class="header">{this.props.name}</div>
            <div class="description">
                {this.props.description}
              </div>
          </div>
          <div class="ui two bottom attached buttons">
            <div class="ui button">
              <i class="file icon"></i>
              In Depth Description
            </div>
            <div class="ui primary button">
              <i class="code icon"></i>
              Code
            </div>
          </div>

    </div>)
    }
}
export default Project;
