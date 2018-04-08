import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Blog2 extends Component {
  render() {
    return (
      <div className="blog2">
      <div className="blog2title">
      <h1>
      Apple is moving on from Intel because Intel isn’t moving anywhere
      </h1>
      </div>
      <div className="b2content">
      <img src={require("./intel.jpg")} className="b2img" height='550'/>
      <p>
      A report from Bloomberg this week has made public something that should already have been apparent to tech industry observers: Apple is
      planning to replace Intel processors in Mac computers with its own chips starting sometime around 2020. The two California companies have
      enjoyed a long and fruitful partnership ever since Apple made the Switch to Intel CPUs with the 2006 MacBook Pro and iMac, but recent
      trends have made the breakup between them inevitable. Intel’s chip improvements have stagnated at the same time as Apple’s have accelerated,
      and now iPhone systems-on-chip are outperforming laptop-class silicon from Intel’s Core line. Even if Intel never cedes its performance
      crown, the future that Apple is building will invariably be better served by its own chip designs.
      <br/><br/>
      Apple’s decision to ditch the world’s most popular CPU line for laptop and desktop computers may seem radical, but there are a number of key
      factors that actually make it obvious and unavoidable.
      <br/><br/>
      <h3>
      INTEL’S STAGNATION
      </h3>
      Attend any major tech exhibition and you’ll find Intel announcing or reannouncing mildly improved processors. Whether you’re at IFA in Berlin,
      CES in Las Vegas, or Computex in Taipei, the spiel is always the same: the future is wireless, battery life matters to everyone, and there are a
      lot of people with five-year-old PCs who might notice a difference if they buy a new Intel-powered computer. It’s all painfully incremental and
      out of sync with Apple’s product cadence. Apple will give you, at most, two years with an iPhone before enticing you into upgrading, whereas Intel
      is trying to convince people with PCs that are half a decade old to do the same.
      <br/><br/>
      In the past, Intel could rely on microarchitecture changes one year and production process shrinkage another year to maintain its momentum of
      improvement. But the infamous Moore’s Law sputtered to an end back in 2015. Intel is approaching the limits of what’s possible to achieve with
      silicon, and it hasn’t yet figured out its next step. The chart below, compiled by AnandTech, illustrates Intel’s predicament well. Notice how
      long the 14nm process node has endured, the question marks next to the release window for 10nm chips, and the almost total absence of a future
      road map. In previous years, Intel’s ambitious plans would be known well in advance. (The company hasn’t grown more secretive; it just doesn’t
      seem to have any secrets left.) And without the power efficiency gains that come from building smaller chips, Intel just can’t compete with ARM
      processors designed for efficiency first.
      <br/><br/>
      <img src={require('./intel1.jpg')} className="b2img2"/>
      <br/><br/>
      <h3>
      APPLE’S AMBITION
      </h3>
      If there’s one unifying theme to define everything that Apple does, it’s integration. From integrating components on a logic board to
      integrating an entire ecosystem of Apple devices like the iPhone, Macs, AirPods, and HomePod to integrating supply and distribution
      lines under its centralized control. Apple started designing its own iPhone chips because it didn’t want to be dependent on Qualcomm.
      A year ago, it started making its own graphics processors to shed its reliance on Imagination Technologies. Apple also created its own
      Face ID system, acquired the maker of its Touch ID system, and it was recently reported to be secretly developing its own MicroLED
      screens for the Apple Watch.
      <br/><br/>
      Apple will tell you that it’s obsessed with delighting the consumer, crafting elegantly designed objects, or some other lofty
      aspiration, but the company’s overriding ambition is to control every last minute aspect of its products. The Intel chips that
      have been at the heart of MacBooks and Macs for over a decade aren’t minute; they’re central to how each computer can be designed
      and engineered. Apple has stuck with them for so long because of Intel’s once-insurmountable lead, but the way we use computers
      is changing, the workloads on a CPU are changing, and Apple’s A-series of chips are better designed to handle that new world of
      computing. Plus, the iPhone has shown the advantages of designing hardware and software in harmony, requiring smaller batteries
      and less RAM than comparable Android rivals.
      <br/><br/>
      <h3>
      THE IOS LAPTOP
      </h3>
      Apple’s macOS, the operating system that runs on Intel’s x86 architecture, is now legacy software. This may sound like a blunt
      allegation to make, given that Apple still sells plenty of MacBooks and iMacs, but the development of that OS within Apple seems
      to have halted entirely. Today, macOS feels like it’s in maintenance mode, awaiting a widely anticipated change that will produce
      a unified iOS and macOS operating system, with iOS taking precedence.
      <br/><br/>
      Mobile computing has firmly established itself as the predominant mode of use these days, and that trend will only grow more
      pronounced in the future. Apple’s primary software focus is rightly fixed on iOS, which happens to run on ARM instructions, not
      Intel’s x86. So, if Apple is indeed intent on bringing iOS up into its less-portable computing line, and if it has chips that offer
      comparable performance to Intel’s consumer CPUs (which it does), why not build all of that on top of its own processor? Whether
      it’s presented as a new-age iPad Pro or MacBook Air, a device that combines the strengths of iOS and the convenience of a clamshell
      design with a generous touchpad is something a lot of people would love to have. By pursuing this course of action, Apple gets to
      scratch its vertical integration itch while sating existing demand.
      <br/><br/>
      <h3>
      THE MOBILE OFFICE
      </h3>
      The thing that makes it possible for Apple to even contemplate running its lithe mobile operating system on its more powerful
      computers is the way our computing habits are changing. Not only are we using mobile devices more often than desktop ones for
      entertainment, but we’re now doing most of our work on phones as well. You can be a professional photographer with just a Pixel 2,
      for instance. The phrase “phoning it in” certainly has a whole different ring to it in 2018 than it did at the beginning of this
      decade.
      <br/><br/>
      As investment and development dollars continue flowing into the dominant mobile platforms — Android and iOS — it’s logical to expect
      that every useful desktop application that hasn’t yet been adapted to them already is on its way there. Sure, Intel is likely to
      retain its dominance at the very high end of computing, but for the vast majority of people and situations, iOS will soon be able
      to provide all that users want. And once the software reaches that point, Apple will want to match it with hardware that’s powerful
      and ergonomic enough to take advantage.
      <br/><br/>
      <img src={require('./intel3.jpg')}className="b2img3" width='800'/>
      <br/><br/>
      It’s not just Apple that’s moving away from Intel processors. Google has been hiring and dabbling with its own custom chip designs,
      and Microsoft and Qualcomm this year started pushing Windows on ARM as an alternative to the typical Intel-powered laptops. The whole
      technology world is moving to developing and designing for mobile applications first, and Intel’s desktop roots keep holding it back
      from being competitive in that expanding market.
      <br/><br/>
      Apple’s moving on because Intel’s standing still
      <br/><br/>
      Source : <a href="https://www.theverge.com/2018/4/3/17191986/apple-intel-cpu-processor-design-competition">The Verge</a>
      </p>
      </div>
      </div>
      );
    }
  }

  export default Blog2;
