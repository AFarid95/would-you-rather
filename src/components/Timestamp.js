import React from 'react';

export default class Timestamp extends React.Component {
  
  render() {
    
    const dateTime = new Date(this.props.timestamp)
    
    const attributeDateTime = dateTime.toISOString()
    const displayedDateTime = dateTime.toLocaleString('en-GB', {hourCycle: 'h12'})
    
    return (
      <time className='text-secondary' dateTime={attributeDateTime}>{displayedDateTime}</time>
    )
  }
}