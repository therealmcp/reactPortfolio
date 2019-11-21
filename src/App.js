import React from 'react';
import './App.css';
import { Layout, Header, HeaderRow, Textfield, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* Hide the top part of the header when scrolling down */}
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" scroll>
                    <HeaderRow title="Colin McPike">
                        <Textfield
                            value=""
                            onChange={() => {}}
                            label="Search3"
                            expandable
                            expandableIcon="search"
                        />
                    </HeaderRow>
                    <HeaderRow>
                        <Navigation>
                            <Link to="/">Home</Link>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/resume">Resume</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </HeaderRow>
                </Header>
                <Drawer title="Menu">
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />

                    <Main/>

                </Content>
            </Layout>
        </div>
    </div>
  );
}

export default App;
