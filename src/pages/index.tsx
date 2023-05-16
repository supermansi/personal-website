import * as React from "react"
import  '../pages/index.css';
import type { HeadFC, PageProps } from "gatsby"
import { Avatar, Button, Card, CardContent, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";

// STYLES

const headerStyles = {
  height: '100px',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  borderBottom: '1px solid black',
  fontFamily: 'Times New Roman',
  position: 'sticky',
  top: '0px',
};

const sectionStyle = {
  top: '100px',
  height: '80vh',
  padding: '60px',
};

const subHeaderStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const sectionContent = {
  width: '80%',
  margin: 'auto',
  marginTop: '60px',
};

// UTILS

const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);

  if (element) {
      element.scrollIntoView({ behavior: 'smooth'});
  }
};

// COMPONENTS

const Header = () => {
  return (
    <Grid container sx={headerStyles}>
      <Grid item xs={6}>
        <Typography variant="h2">
          Mansi Jain
        </Typography>
      </Grid>
      {/* Create hamburger for smaller screens */}
      <Grid item xs={2}>
        <Button className="button" variant="outlined" onClick={() => scrollToElement('about')}>
          <Typography>
            About Me
          </Typography>
          </Button>
      </Grid>
      <Grid item xs={2}>
        <Button className="button" variant="outlined" onClick={() => scrollToElement('experience')}>
            <Typography>
              Experience
            </Typography>
          </Button>
      </Grid>
      <Grid item xs={2}>
        <Button className="button" variant="outlined" onClick={() => scrollToElement('contact')}>
          <Typography>
            Contact
          </Typography>
          </Button>
      </Grid>
    </Grid>
  );
};

const About = () => {
  return (
    <div id="about" style={sectionStyle}>
      <Typography className="text" variant="h3" sx={subHeaderStyle}>
        Who Am I?
      </Typography>
      <Grid container sx={sectionContent}>
        <Grid item xs={5}>
          <img src="https://placekitten.com/300/300" style={{borderRadius: '50%'}} />
        </Grid>
        <Grid item xs={7}>
          <Typography>
          Hi, I’m Mansi!
          </Typography>
          <Typography>
          I’m a Software Engineer at Vistaprint in the Greater Boston Area. Hailing from Mumbai, India,
          I moved to the United States to pursue my Masters in Computer Science from
          Northeastern University and have been here since.
          </Typography>
          <Typography>
          Passionate about building accessible, enriching, user friendly applications, mostly web.
          When not coding, I like to alternate reading thriller novels and self improvement books,
          sign up and train for a race (next is Boston R2R 5 miler) , try to cook new vegan recipes
          or watch old sappy Bollywod movies.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

const Experience = () => {
  return (
    <div id="experience" style={sectionStyle}>
      <Typography variant="h3" sx={subHeaderStyle}>
        Where did I work?
      </Typography>
      <Grid container sx={sectionContent}>
        <Grid item xs={6}>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Vistaprint" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Software Engineer"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Vistaprint
                  </Typography>
                  {" August 2020 - Present"}
                  <Typography color="text.primary">
                    Skills: React JS, Node JS, Typscript, C#, SQL, AWS, CI/CD
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Schlumberger" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Software Developer"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Schlumberger
                  </Typography>
                  {" August 2019 - December 2019"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Vistaprint" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Software Engineer Intern"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Vistaprint
                  </Typography>
                  {' June 2019 - August 2019'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
        </Grid>
        <Grid item xs={6}>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Northeastern" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Research Assitant"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Northeaster University
                  </Typography>
                  {" April 2020 - September 2020"}
                  <Typography color="text.primary">
                    Test Text
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Air India" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer Trainee"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Air India
                  </Typography>
                  {" May 2016 - July 2016"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
        </Grid>
    </Grid>
    </div>
  );
};

const Contact = () => {
  return (
    <div id="contact" style={sectionStyle}>
      <Typography variant="h3" sx={subHeaderStyle}>
        How can you reach me?
      </Typography>
    </div>
  );
};

const Footer = () => {
  return (
    <></>
  );
};

const IndexPage: React.FC<PageProps> = () => {

  return (
    <div className="home">
      <Header></Header>
      <About></About>
      <Experience></Experience>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Mansi Jain</title>
