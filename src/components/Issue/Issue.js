import React from 'react';

class Issue extends React.Component {

  render (){
	  return(
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={this.props.thumbnail}/>
          <span className="card-title">{this.props.title}</span>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {this.props.title}
            <i className="material-icons right">more_vert</i>
          </span>
          <p><a href="#">Tag1</a> <a href="#">Tag2</a> <a href="#">Tag3</a></p>
        </div>
        <div className="card-action">
          <div className="chip">
            KeonHee
            <img src="images/man.png" alt="Contact Person"/>
          </div>
          <div className="chip">
            <i className="material-icons">thumb_up</i>
            Like   5
          </div>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {this.props.title}
            <i className="material-icons right">close</i>
          </span>
          {this.props.content}
        </div>
      </div>
	  )
  }
}

export default Issue;
