import React from 'react';

import Masonry from 'react-masonry-component';
import {Button, Card, CardTitle, Row, Col} from 'react-materialize';
import Issue from './Issue.js';


const masonryOptions = {
  transitionDuration: 0
};

class IssueList extends React.Component {



  render(){

    return(
      <div>
        <Masonry
          className={'my-gallery-class'} // default ''
          elementType={'div'} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        >
          <Issue thumbnail="images/javascript.png"
                 title="Javascript"
                 content="study together!"/>
          <Issue thumbnail="images/ruby.png"
                 title="Ruby"
                 content="study together!"/>
          <Issue thumbnail="images/java.png"
                 title="Java"
                 content="study together!"/>
          <Issue thumbnail="images/python.jpg"
                 title="Python"
                 content="study together!"/>
          <Issue thumbnail="images/cpp.jpg"
                 title="Cpp"
                 content="study together!"/>
        </Masonry>
      </div>

    );

  }

}

export default IssueList;
