import React, { Component } from 'react';
import Contact from '../../components/Contact/Contact.component';

class ContactContainer extends Component {
  render() {
    return (
      <div>
        <Contact text={this.props.text}
                 bridePhotoUrl={this.props.bridePhotoUrl}
                 groomPhotoUrl={this.props.groomPhotoUrl}
                 bridePhone={this.props.bridePhone}
                 groomPhone={this.props.groomPhone} />
      </div>
    )
  }
}

export default ContactContainer;
