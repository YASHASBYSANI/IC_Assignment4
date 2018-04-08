import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Blog3 extends React.Component {
  render() {
    return (
      <div className="blog3">
      <div className="blog3title">
      <h1> Facebook says it’ll now require political-leaning advertisers to verify their identity!</h1>
      </div>
      <div className="b3content">
      <img src={require('./fb.jpg')} className="b3img" height='500'/>
      <p>
      Facebook advertisers who want to promote their views on key political issues — like abortion and Second Amendment rights — will now have to
      verify their identity and location, the company announced today. These “issue ads” will also be labeled as “political ads” on the platform,
      along with information about who’s paying for their existence. The company says artificial intelligence and actual humans will comb through
      advertisers to identify those that need to be labeled and verified. Users can also report ads that seem political in nature and are missing
      verification.
      <br/><br/>
      In addition to advertisers needing to prove who they are, managers of “large” pages will have to do so, as well. Facebook hasnt said what
      constitutes a large page, but the managers of those pages will have to demonstrate where they live and who they are. The company says this
      should make it harder for fake Pages to spring up and for them to go viral, a la the Macedonian teens. These changes will come to the US at
       first and will roll out around the world this summer. Facebook previously instituted this verification for electoral ads.
      <br/><br/>
      CEO Mark Zuckerberg published a post announcing these changes today, along with news that he and the company support the proposed Honest Ads
      Act. Although Facebook had never explicitly said it didn’t support the legislation, which would regulate online political advertising, it was
      assumed it might not want regulation in the space. Zuckerberg writes, “Election interference is a problem that’s bigger than any one platform,
      and that’s why we support the Honest Ads Act. This will help raise the bar for all political advertising online.”
      <br/><br/>
      All these changes come as Facebook deals with global election interference launched from its platform. Russia’s Internet Research Agency, for
      example, managed to launch thousands of fake accounts that were used to promote divisive issues during the 2016 election. Though those were
      native posts — not ads — today’s changes speak to two ways Facebook is trying to combat similar interference. Allowing issue-based ads to be
       published by unconfirmed parties was a major loophole; and by starting to verify large groups, it’s possible that Facebook will be able to
        catch some malicious Pages, like those used by the IRA.
      <br/><br/>
      Just this week, Facebook suspended 273 accounts and pages tied to Russia’s Internet Research Agency. These pages didn’t have to do with elections
      abroad as much as with influencing Russian users. This is likely why Facebook wants pages to be verified, so it can prevent another IRA situation
      from happening again.
      <br/><br/>
      Source : <a href="https://www.theverge.com/2018/4/6/17206670/facebook-issue-ad-verification-advertisers-pages">The Verge </a>
      </p>
      </div>
      </div>
    );
  }
}

export default Blog3;
