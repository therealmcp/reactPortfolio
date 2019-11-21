import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: "center"}}>
              <img 
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
              />
            </div>

            <h2 style={{paddingTop: '2em'}}>Colin McPike</h2>
            <h4 style={{color: 'grey'}}>Project Manager</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>
              1 Hacker Way Menlo Park, 94025
            </p>
            <p>123.456.7890</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Web</h5>
            <p>website.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
              <Education 
                startYear={2018}
                endYear={2019}
                schoolName="University of Washington"
                schoolDescription="Great school"
              />
              <hr style={{borderTop: '3px solid #e22947'}} />

            <h2>Experience</h2>

              <Experience 
                startYear={2018}
                endYear="Present"
                jobName="Project Manager"
                jobDescription="great stuff"
              />

                <Experience 
                startYear={2015}
                endYear={2018}
                jobName="Owner / Project Manager"
                jobDescription="great stuff"
              />
              <hr style={{borderTop: '3px solid #e22947'}} />

            <h2>Skills</h2>

              <Skills 
                skill="JavaScript"
                progress={65}
              />
              <Skills 
                skill="React"
                progress={75}
              />
              <Skills 
                skill="NodeJS"
                progress={50}
              />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;