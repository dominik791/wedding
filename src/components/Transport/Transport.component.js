import React, { Component, PropTypes } from 'react';
import SectionHeading from '../SectionHeading/SectionHeading.component';
import SectionText from '../SectionText/SectionText.component';
import TransportSchedule from '../TransportSchedule/TransportSchedule.component';
import styles from './Transport.stylesheet.css';
import { Element } from 'react-scroll';

class Transport extends Component {

  componentDidMount() {
    window.setTimeout(() => {
      new window.YT.Player('transportVideo', {
        videoId: this.props.videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
          loop: 1,
          fs: 1,
          cc_load_policy: 0,
          iv_load_policy: 3,
          autohide: 1,
          start: 7,
          end: 80
        },
        events: {
          onReady: (event) => {
            event.target.mute();
            event.target.playVideo();
          },
          onStateChange: (event) => {
            if (event.data === 0) {
              event.target.seekTo(7);
            }
          }
        }
      });
    }, 1000);
  }

  render() {
    return (
      <Element name="Transport">
        <section className={styles.Transport}>
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

Transport.propTypes = {
  text: PropTypes.string,
  schedule: PropTypes.arrayOf(PropTypes.object)
};

export default Transport;
