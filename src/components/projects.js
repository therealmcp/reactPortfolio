import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if(this.state.activeTab === 0) {
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlpO5FWb11_1893wIT2qb2IASDftS2ZiDg67iRAo8r5Asclzgj&s) center / cover'}}>React Project #1</CardTitle>
            <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </CardText>
            <CardActions border>
              <Button border>GitHub</Button>
              <Button border>CodePen</Button>
              <Button border>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }
    else if(this.state.activeTab === 1) {
      return(
        <div><h1>These are JavaScript projects</h1></div>
      )
    }
    else if (this.state.activeTab === 2) {
      return(
        <div><h1>These are React Native projects</h1></div>
      )
    }
  }

  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>JavaScript</Tab>
          <Tab>React Native</Tab>
        </Tabs>

        <div>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Projects;