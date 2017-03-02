import React from 'react';
import styles from './WhiteWedding.stylesheet.css';
import SectionHeading from '../SectionHeading/SectionHeading.component';
import SectionText from '../SectionText/SectionText.component';

const WhiteWedding = ({ imgUrl, text }) => {
  return (
    <section className={styles.WhiteWedding}>
      <SectionHeading text="ślub" />
      <div className={styles.contentWrapper}>
        <SectionText text={text} />
        <div className={styles.imgWrapper}>
          <img src={imgUrl} className={styles.img} alt="church" />
        </div>
      </div>
    </section>
  )
};

export default WhiteWedding;
