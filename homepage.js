import React from 'react';
import {Component} from 'react';
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import {ContentSort} from 'material-ui/svg-icons';
import {white} from 'material-ui/styles/colors';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Scrollchor from 'react-scrollchor';
import Sticky from 'react-sticky-el';
import Configs from './configs.json';
import './styles/styles.css';
import * as styles from './styles/styles.js';

class Homepage extends Component{
  constructor(props){
    super(props);

    this.state = {
      windowWidth: window.innerWidth
    };
    
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  
  updateDimensions() {
   let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
   // let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

   this.setState({ windowWidth });
  }

  render(){

    const IconMenuPageSelection = () => (
   <div>
     <IconMenu
       className='dropdown-menu-style'
       iconButtonElement={
         <IconButton><ContentSort className='app-bar-right-icon'/></IconButton>
       }
       anchorOrigin={{horizontal: 'right', vertical: 'top'}}
       targetOrigin={{horizontal: 'right', vertical: 'top'}}
     >
       <Scrollchor to='' className='scroll-nav'>
         <MenuItem className='icon-menu-text-style' primaryText="Home" />
       </Scrollchor>
       <Scrollchor animate={{offset: 10}} to='#personalLife' className='scroll-nav'>
         <MenuItem className='icon-menu-text-style' primaryText="Personal" />
       </Scrollchor>
       <Scrollchor animate={{offset: 20}} to='#professionalLife' className= 'scroll-nav'>
         <MenuItem className='icon-menu-text-style' primaryText="Professional" />
       </Scrollchor>
       <Scrollchor animate={{offset: -180}} to='#experience' className= 'scroll-nav'>
         <MenuItem className='icon-menu-text-style' primaryText="Experience" />
       </Scrollchor>
       <Scrollchor animate={{offset: -50}} to='#contact' className= 'scroll-nav'>
         <MenuItem className='icon-menu-text-style' primaryText="Contact" />
       </Scrollchor>
     </IconMenu>
   </div>
 );

  const renderProfessionalDetails = () => (
      <div id='professionalLife' className='professional-life-container'>
          <div className='professional-life-contents'>
            <h5 className='section-header-style'>
              {Configs.headers.sectionHeaders.professionalLife}
            </h5>
            <div id='iconsContainer' className='professional-icons-container'>
              <div style={{display:'flex', flexDirection:'row'}}>
                <div className='professional-life-paper-style'>
                  {
                    Object.keys(Configs.paths.technologies).map((iconValues) =>
                      (
                        <Avatar key={iconValues}
                          className='avatar-styles'
                          backgroundColor={white}
                          src={Configs.paths.technologies[iconValues]}
                        />
                      )
                    )
                  }
                 </div>
                <div style={{display:'flex', flexDirection:'column'}}> 
                  <div className='professional-text-paper-style'>
                    <h3 className='p-header-style'>
                      {Configs.headers.contentHeaders.professionalDetails}
                    </h3>
                    <div className='professional-text-style'>
                      {Configs.content.professionalDetails.sectionOne}
                      <br/><br/>
                      {Configs.content.professionalDetails.sectionTwo}
                    </div>
                  </div>
                  <div className='professional-details-paper'>
                    <div className='professional-roles-style'>
                      <span><b>Name:</b> Pedro Sorto</span>
                      <Divider/>
                      <span><b>Company: </b>Digital Globe</span>
                      <Divider/>
                      <span><b>Role: </b>Software Developer</span>
                      <Divider/>
                      <div><b>Education: </b>BS Computer Engineerin, Virginia Tech</div>
                    </div>
                  </div>
                </div>  
              </div>
            </div>
          </div>
      </div>
    );

  const renderMobileProfessionalDetails = () => (
      <div id='professionalLife' className='professional-life-container'>
          <div className='professional-life-contents'>
            <h5 className='section-header-style'>
              {Configs.headers.sectionHeaders.professionalLife}
            </h5>
            <div id='iconsContainer' className='professional-icons-container'>
              <div style={{display:'flex', flexDirection:'column'}}>
                <div className='professional-details-paper'>
                  <div className='professional-roles-style'>
                    <span><b>Name:</b> Pedro Sorto</span>
                    <Divider/>
                    <span><b>Company: </b>Digital Globe</span>
                    <Divider/>
                    <span><b>Role: </b>Software Developer</span>
                    <Divider/>
                    <div><b>Education: </b>BS Computer Engineerin, Virginia Tech</div>
                  </div>
                </div>
                <div style={{display:'flex', flexDirection:'column'}}> 
                  <div className='professional-text-paper-style'>
                    <h3 className='p-header-style'>
                      {Configs.headers.contentHeaders.professionalDetails}
                    </h3>
                    <div className='professional-text-style'>
                      {Configs.content.professionalDetails.sectionOne}
                      <br/><br/>
                      {Configs.content.professionalDetails.sectionTwo}
                    </div>
                    <div className='professional-life-paper-style'>
                      {
                        Object.keys(Configs.paths.technologies).map((iconValues) =>
                          (
                            <Avatar key={iconValues}
                              className='avatar-styles'
                              backgroundColor={white}
                              src={Configs.paths.technologies[iconValues]}
                            />
                          )
                        )
                      }
                     </div>
                  </div>
                </div>  
              </div>
            </div>
          </div>
      </div>
    );

    return (
        <div id='topContainer' className='top-container'>
          <Paper id='mainTitle' elevation={3} className='title-image-style'>
            <div className='title-styling'>
              <Scrollchor animate={{offset: -30}} to='#personalLife' className='scroll-nav'>
                <h1 className='name-header-style'>{Configs.headers.title}</h1>
              </Scrollchor>
            </div>
          </Paper>
          <Sticky stickyStyle={{zIndex: 110}}>
            <div id='appBar'>
              <AppBar className='app-bar-style app-bar-name-style'
                title={
                <Scrollchor animate={{offset: -30}} to='#personalLife' className='scroll-nav'>
                  <div className='app-bar-name-style'>{Configs.headers.appBar}</div>
                </Scrollchor>
                }
                showMenuIconButton={false}
                iconElementRight={<IconMenuPageSelection/>}
              />
          </div>
          </Sticky>

          <div style={{display:'flex', flexDirection: 'column'}}>
            <div id='personalLife' className='personal-life-container'>
                <div className='personal-life-elements'>
                   <h5 className='section-header-style'>
                     {Configs.headers.sectionHeaders.personalLife}
                   </h5>
                   <div className='personal-details-content-style'>
                    <div className='personal-details-style'>
                      <h3 className='p-header-style'>
                        {Configs.headers.contentHeaders.personalDetails}
                      </h3>
                      <div className='personal-details-text-style'>
                        {Configs.content.personalDetails.sectionOne}
                        <br/><br/>{Configs.content.personalDetails.sectionTwo}
                        <br/><br/>{Configs.content.personalDetails.sectionThree}
                      </div>
                    </div>
                    <div className="personal-image-small">
                      <div className='personal-me-image' />
                    </div>
                  </div>
                </div>
            </div>
            {this.state.windowWidth > 1000 ? renderProfessionalDetails() : renderMobileProfessionalDetails()}
            <div id='experience' className='experience-container'>
                <div className='experience-roles-container'>
                  <div className='experience-header-style'>
                    <h5 className='section-header-style'>
                      {Configs.headers.sectionHeaders.experience}
                    </h5>
                  </div>
                  {
                    Object.keys(Configs.experiences).map((experience) =>
                      (
                        <div key={experience} className='experiences-style'>
                          <div className='experience-icon-border'>
                            <div className='work-experience-image'>
                              <a href={Configs.experiences[experience].url}  target = '_blank'>
                                <img className='individal-experience-image' src={Configs.experiences[experience].image} />
                              </a>
                              <Divider/>
                              <div className='experience-year-format'>
                                {Configs.experiences[experience].year}
                              </div>
                            </div>
                          </div>
                           <div className='experience-details-format'>
                             <h3>{Configs.experiences[experience].company}</h3>
                             <div className='experience-title-format'>
                              {Configs.experiences[experience].title}
                             </div>
                           </div>
                        </div>
                      )
                    )
                  }
                </div>
            </div>
            <div id='contact' className='contact-container'>
              <div className='contact-icon-container'>
                <div className='contact-header'>
                  <h5 className='section-header-style'>
                    {Configs.headers.sectionHeaders.contactMe}
                  </h5>
                </div>
                <div style={{backgroundColor:'none'}}>
                  <div className='icon-button-container'>
                    <IconButton href={Configs.urls.github} target = '_blank' className='url-icon-buttons'>
                      <img src={'img/github.svg'} height='48px'/>
                    </IconButton>
                    <IconButton href={Configs.urls.linkedin} target = '_blank' className='url-icon-buttons'>
                      <img src={'img/linkedin.svg'} height='48px'/>
                    </IconButton>
                    <IconButton href={Configs.urls.gitlab} target = '_blank' className='url-icon-buttons'>
                      <img src={'img/gitlab.svg'} height='48px'/>
                    </IconButton>
                    <IconButton href={`mailto:${'pedro.sorto@outlook.com'}`} iconStyle={{width:'48px', height:'48px'}} className='url-icon-buttons'>
                      <CommunicationEmail/>
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Homepage;
