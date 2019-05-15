import React, {Component} from 'react';
import { Jumbotron, Table, Nav, NavLink, NavItem, TabContent, TabPane, Row, Col, Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption } from 'reactstrap';
import classNames from 'classnames';

const items = [
    {
        src: './images/schedule/schedule_page.png',
        altText: 'week 1'
    },
    {
        src: './images/schedule/schedule_page2.png',
        altText: 'week 2'
    },
    {
        src: './images/schedule/schedule_page3.png',
        altText: 'week 3'
    },
]

class schedulePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            teamName: ["../images/teams/na/c9.png", "../images/teams/na/disrupt.png", "../images/teams/na/regime.png", "../images/teams/eu/g2.png", "../images/teams/na/sin.png", "../images/teams/na/c9.png", "../images/teams/na/disrupt.png", "../images/teams/na/regime.png", "../images/teams/eu/g2.png", "../images/teams/na/sin.png"],
            activeTab: '1',
            activeIndex: 0 };

            this.next = this.next.bind(this);
            this.previous = this.previous.bind(this);
            this.goToIndex = this.goToIndex.bind(this);
            this.onExiting = this.onExiting.bind(this);
            this.onExited = this.onExited.bind(this);
          }
        
          onExiting() {
            this.animating = true;
          }
        
          onExited() {
            this.animating = false;
          }
        
          next() {
            if (this.animating) return;
            const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
            this.setState({ activeIndex: nextIndex });
          }
        
          previous() {
            if (this.animating) return;
            const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
            this.setState({ activeIndex: nextIndex });
          }
        
          goToIndex(newIndex) {
            if (this.animating) return;
            this.setState({ activeIndex: newIndex });
          }
        

    toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
    render() {
        const { activeIndex } = this.state;
        const slides_na = items.map((item) => {
            return (
              <CarouselItem
                onExiting={this.onExiting}
                onExited={this.onExited}
                key={item.src}
              >
              <div className = "margin">
                <h1></h1>
              </div>
              <div className = "schedule-na">
                          <h1>MONDAY</h1>
                                    <div className = "schedule-box">
                                        <div className = "schedule-top">
                                        </div>
                                        <div className = "schedule-content">
                                            <img src="../images/teams/na/c9.png" alt = "C9" className = "schedule-team-pic"/>
                                                <h2 className = "schedule-team-name">CLOUD9</h2>
                                            <img src='../../images/ccs2black.png' alt="ccs" className = "schedule-vs" id = "nav-logo"/>
                                                <h2 className = "schedule-team-name">REGIME</h2>
                                            <img src="../images/teams/na/Regime.png" alt = "Regime" className = "schedule-team-pic"/>
                                        </div>
                                        <div className = "schedule-bottom">
                                        </div>
                                    </div>
                                    <div className = "schedule-box">
                                        <div className = "schedule-top">
                                        </div>
                                        <div className = "schedule-content">
                                            <img src="../images/teams/na/c9.png" alt = "C9" className = "schedule-team-pic"/>
                                                <h2 className = "schedule-team-name">CLOUD9</h2>
                                            <img src='../../images/ccs2black.png' alt="ccs" className = "schedule-vs" id = "nav-logo"/>
                                                <h2 className = "schedule-team-name">REGIME</h2>
                                            <img src="../images/teams/na/Regime.png" alt = "Regime" className = "schedule-team-pic"/>
                                        </div>
                                        <div className = "schedule-bottom">
                                        </div>
                                    </div>
                                        <h1>WEDNESDAY</h1>
                                    <div className = "schedule-box">
                                        <div className = "schedule-top">
                                        </div>
                                        <div className = "schedule-content">
                                            <img src="../images/teams/na/c9.png" alt = "C9" className = "schedule-team-pic"/>
                                                <h2 className = "schedule-team-name">CLOUD9</h2>
                                            <img src='../../images/ccs2black.png' alt="ccs" className = "schedule-vs" id = "nav-logo"/>
                                                <h2 className = "schedule-team-name">REGIME</h2>
                                            <img src="../images/teams/na/Regime.png" alt = "Regime" className = "schedule-team-pic"/>
                                        </div>
                                        <div className = "schedule-bottom">
                                        </div>
                                    </div>
                                    <div className = "schedule-box">
                                        <div className = "schedule-top">
                                        </div>
                                        <div className = "schedule-content">
                                            <img src="../images/teams/na/c9.png" alt = "C9" className = "schedule-team-pic"/>
                                                <h2 className = "schedule-team-name">CLOUD9</h2>
                                            <img src='../../images/ccs2black.png' alt="ccs" className = "schedule-vs" id = "nav-logo"/>
                                                <h2 className = "schedule-team-name">REGIME</h2>
                                            <img src="../images/teams/na/Regime.png" alt = "Regime" className = "schedule-team-pic"/>
                                        </div>
                                        <div className = "schedule-bottom">
                                        </div>
                                    </div>
                                </div>
                <img className = "schedule-background" src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
              </CarouselItem>
            );
          });
          const slides_eu = items.map((item) => {
            return (
              <CarouselItem
                onExiting={this.onExiting}
                onExited={this.onExited}
                key={item.src}
              >
              <div className = "margin">
                <h1></h1>
              </div>
              <div className = "schedule-na">
                          <h1>TUESDAY</h1>
                                    <div className = "schedule-box">
                                        <div className = "schedule-top">
                                        </div>
                                        <div className = "schedule-content">
                                            <img src="../images/teams/na/c9.png" alt = "C9" className = "schedule-team-pic"/>
                                                <h2 className = "schedule-team-name">CLOUD9</h2>
                                            <img src='../../images/ccs2black.png' alt="ccs" className = "schedule-vs" id = "nav-logo"/>
                                                <h2 className = "schedule-team-name">REGIME</h2>
                                            <img src="../images/teams/na/Regime.png" alt = "Regime" className = "schedule-team-pic"/>
                                        </div>
                                        <div className = "schedule-bottom">
                                        </div>
                                    </div>
                                    <div className = "schedule-box">
                                        <div className = "schedule-top">
                                        </div>
                                        <div className = "schedule-content">
                                            <img src="../images/teams/na/c9.png" alt = "C9" className = "schedule-team-pic"/>
                                                <h2 className = "schedule-team-name">CLOUD9</h2>
                                            <img src='../../images/ccs2black.png' alt="ccs" className = "schedule-vs" id = "nav-logo"/>
                                                <h2 className = "schedule-team-name">REGIME</h2>
                                            <img src="../images/teams/na/Regime.png" alt = "Regime" className = "schedule-team-pic"/>
                                        </div>
                                        <div className = "schedule-bottom">
                                        </div>
                                    </div>
                                        <h1>THURSDAY</h1>
                                    <div className = "schedule-box">
                                        <div className = "schedule-top">
                                        </div>
                                        <div className = "schedule-content">
                                            <img src="../images/teams/na/c9.png" alt = "C9" className = "schedule-team-pic"/>
                                                <h2 className = "schedule-team-name">CLOUD9</h2>
                                            <img src='../../images/ccs2black.png' alt="ccs" className = "schedule-vs" id = "nav-logo"/>
                                                <h2 className = "schedule-team-name">REGIME</h2>
                                            <img src="../images/teams/na/Regime.png" alt = "Regime" className = "schedule-team-pic"/>
                                        </div>
                                        <div className = "schedule-bottom">
                                        </div>
                                    </div>
                                    <div className = "schedule-box">
                                        <div className = "schedule-top">
                                        </div>
                                        <div className = "schedule-content">
                                            <img src="../images/teams/na/c9.png" alt = "C9" className = "schedule-team-pic"/>
                                                <h2 className = "schedule-team-name">CLOUD9</h2>
                                            <img src='../../images/ccs2black.png' alt="ccs" className = "schedule-vs" id = "nav-logo"/>
                                                <h2 className = "schedule-team-name">REGIME</h2>
                                            <img src="../images/teams/na/Regime.png" alt = "Regime" className = "schedule-team-pic"/>
                                        </div>
                                        <div className = "schedule-bottom">
                                        </div>
                                    </div>
                                </div>
                <img className = "schedule-background" src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
              </CarouselItem>
            );
          });
        return (            
            <div className = "schedule-page">
                <h1 className = "region-text">Select your region</h1>
                <Nav tabs              
                        className = {classNames({ active: this.state.activeTab === '1'})}
                        onClick = {() => { this.toggle('1'); }}>
                        <img src="../images/flags/us.png" className = "na-flag"/>
                     </Nav>
                     <Nav tabs
                        className = {classNames({ active: this.state.activeTab === '2'})}
                        onClick = {() => { this.toggle('2'); }}>
                         <img src="../images/flags/eu.jpg" className = "eu-flag"/>
                     </Nav>
                        <TabContent activeTab = {this.state.activeTab}>
                            <TabPane tabId = "1">
                            <Carousel
                               activeIndex={activeIndex}
                               next={this.next}
                               previous={this.previous}
                               
                             >
                               <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                               {slides_na}
                               <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                               <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                            </Carousel>
                            </TabPane>
                        </TabContent>
                        <TabContent activeTab = {this.state.activeTab}>
                            <TabPane tabId = "2">
                            <Carousel
                               activeIndex={activeIndex}
                               next={this.next}
                               previous={this.previous}
                               
                             >
                               <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                               {slides_eu}
                               <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                               <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                            </Carousel>
                            </TabPane>
                        </TabContent>
                </div>
        )
    }
}

export default schedulePage;