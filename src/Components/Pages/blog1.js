import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Blog1 extends React.Component {
  render() {
    return (
      <div className="blog1">
      <div className="blog1title">
      <h1>YouTube will reportedly release a kids’ app curated by human!<br/></h1>
      </div>
      <div className="b1content">
      <img src={require('./youtube.jpg')} className="b1img"  width='800' height='500'/>
      <p>
      YouTube plans to release a non-algorithmic, whitelisted version of its YouTube Kids app some time in the near future as a way to avoid
      inadvertently suggesting questionable or graphic content to children, according to a report this evening from BuzzFeed News. The modified
      version of the app will also be restricted to videos from hand-selected channels that a team of human curators at YouTube will approve.
      <br/><br/>
      The decision, though it has yet to be officially announced, comes amid longstanding concerns over YouTube’s suggestion algorithm inherently steers
      viewers toward increasingly extremist content. Just last month, a report from Business Insider illustrated how the YouTube Kids app was suggesting
      children watch videos filled with misinformation and conspiracy theories about the shape of the Earth, the Moon landing, and whether aliens exist.
      <br/><br/>
      Last year, YouTube became embroiled in a controversy called “Elsagate” involving strange, surreal, and sometimes disturbing videos featuring Disney
      characters and superheroes that were specifically designed to game the YouTube Kids algorithm and rack up views. The platform has also come under
      attack for its hosting of extremist content and its heavy-handed approach to content moderation to appease advertisers that find their products
      advertised alongside questionable content. In addition to those controversies, YouTube has struggled to deal with the people behind the channels
      that peddle questionable content, including conspiracy theorist Alex Jones, who had his channel stripped of ads, and influencer Logan Paul, who
      remains on a 90-day suspension for running afoul of YouTube’s policies.
      <br/><br/>
      YouTube has made a number of efforts to try and crackdown specifically on child exploitation content, including removing advertising from millions
      of videos, imposing age restrictions on flagged content, and increasing the number of human moderators that scan its platform. To combat misinformation,
      YouTube announced last month that it would be using Wikipedia to help fact check videos suspected of peddling conspiracy theories, only for Wikipedia
      to turn around and publicly announce that it had never been informed of the decision.
      <br/><br/>
      We don’t know when exactly the special version of the YouTube Kids app will launch, but BuzzFeed reports that the option to Switch to the whitelisted,
      non-algorithmic version will be opt-in for parents and it could arrive as soon as this month. In a statement, a YouTube spokesperson did not deny the
      news, but did not explicitly confirm it, either. “We are always working to update and improve YouTube Kids, however we don’t comment on rumor or
      speculation,” the statement reads.
      <br/><br/>
      Source : <a href="https://www.theverge.com/2018/4/6/17208532/youtube-kids-non-algorithmic-version-whitelisted-conspiracy-theories" target="_blank"> The Verge </a>
      </p>
      </div>
      </div>
    );
  }
}

export default Blog1;
