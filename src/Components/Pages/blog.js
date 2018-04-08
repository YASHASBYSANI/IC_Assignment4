import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Blog extends Component {
  render() {
    return (
      <div className="bmain">
      <div className="bimage">

      <div className="bheader"><h1>THREE INTERESTING BLOGS!</h1></div>
      <Link to="/blog1">
      <div className="box b1" id="one">
      <h1 className="bname">YouTube will reportedly release <br/>a kids’ app curated by<br/> human!</h1>
      <h5 className="author">By : <span className="name">Yashas B M</span>  |  April 7, 2018 </h5>
      <p>
      YouTube plans to release a non-algorithmic, whitelisted version of its YouTube Kids app some time in the near future as a way to avoid inadvertently
      suggesting questionable or graphic content to children, according to a report this evening from BuzzFeed News. The modified version of the app will
      also be restricted to videos from hand-selected channels that a team of human curators at YouTube will approve...
      </p>
      </div>
      </Link>

      <Link to="/blog2">
      <div className="box b2" id="two">
      <h1 className="bname">Apple is moving on from Intel because Intel isn’t moving anywhere!</h1>
      <h5 className="author">By :  <span className="name">Yashas B M</span> |  April 7, 2018 </h5>
      <p>
      <span>A report from Bloomberg this week has made public something that should already have been apparent to tech industry observers:
      Apple is planning to replace Intel processors in Mac computers with its own chips starting sometime around 2020. The two California
      companies have enjoyed a long and fruitful partnership ever since Apple made the Switch to Intel CPUs with the 2006 MacBook Pro and
      iMac, but recent trends have...</span>
      </p>
      </div>
      </Link>

      <Link to="/blog3">
      <div className="box b3" id="three">
      <h1 className="bname">Facebook says it’ll now require political-leaning advertisers to verify their identity!</h1>
      <h5 className="author">By :  <span className="name">Yashas B M</span>  |  April 7, 2018 </h5>
      <p>
      Facebook advertisers who want to promote their views on key political issues — like abortion and Second Amendment rights — will now have to
      verify their identity and location, the company announced today. These “issue ads” will also be labeled as “political ads” on the platform,
      along with information about who’s paying for their existence. The company says artificial intelligence and actual...
      </p>
      </div>
      </Link>

      </div>
      </div>
    );
  }
}

export default Blog;
