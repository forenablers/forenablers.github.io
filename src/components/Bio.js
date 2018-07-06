import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`For Enablers`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written either by <a href="https://github.com/zavolokas"><strong>Sergey Zavoloka</strong></a> or <a href="https://github.com/bgener"><strong>Borys Generalov</strong></a>.{' '}
        </p>
      </div>
    )
  }
}

export default Bio
