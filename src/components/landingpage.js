import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img className="avatar-img"
              src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" alt="avatar pic"
            />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr/>

              <p>
                HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB
              </p>

              <div className="social-links">

                {/* React */}
                <a href="http://www.google.com" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-react"></i>
                </a>

                {/* LinkedIn */}
                <a href="http://www.google.com" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-linkedin"></i>
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;