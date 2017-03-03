import React, { Component } from 'react';
import SectionHeading from '../SectionHeading/SectionHeading.component';
import SectionText from '../SectionText/SectionText.component';
import TransportSchedule from '../TransportSchedule/TransportSchedule.component';
import styles from './Transport.stylesheet.css';
import { Element } from 'react-scroll';
import { isAny } from '../../helpers/isMobile';

class Transport extends Component {

  componentDidMount() {
    if (!isAny()) {
      window.setTimeout(() => {
        new window.YT.Player('transportVideo', {
          videoId: this.props.videoId, // YouTube Video ID
          playerVars: {
            autoplay: 1,        // Auto-play the video on load
            controls: 0,        // Show pause/play buttons in player
            showinfo: 0,        // Hide the video title
            modestbranding: 1,  // Hide the Youtube Logo
            loop: 1,            // Run the video in a loop
            fs: 1,              // Hide the full screen button
            cc_load_policy: 0, // Hide closed captions
            iv_load_policy: 3,  // Hide the Video Annotations
            autohide: 1,         // Hide video controls when playing
            start: 7,
            end: 80
          },
          events: {
            onReady: (event) => {
              event.target.mute();
            },
            onStateChange: (event) => {
              if (event.data === 0) {
                event.target.seekTo(7);
              }
            }
          }
        });
      }, 1000)
    }
  }

  render() {
    const TransportStyles = {
      background: isAny() ? 'linear-gradient(to bottom, #634730, #0e0a06)' : 'rgba(0, 0, 0, 0.55)'
    };
    return (
      <Element name="Transport">
        <section className={styles.Transport} style={TransportStyles}>
          <div id="transportVideo" className={styles.video}></div>
          <SectionHeading text='Transport' />
          <div className={styles.contentWrapper}>
            <SectionText text={this.props.text} />
            <TransportSchedule schedule={this.props.schedule} />
          </div>
        </section>
      </Element>
    )
  }
}

export default Transport;
