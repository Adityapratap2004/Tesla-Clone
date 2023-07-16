import React, { useRef } from 'react'
import Section from './Section'
import { styled } from 'styled-components';
import Footer from './Footer';
import { useSelector } from 'react-redux';

function Home() {
  const sidemenu= useSelector(state=>state.sidemenu)
  const model3 = useRef(null);
  const modely = useRef(null);
  const models = useRef(null);
  const modelx = useRef(null);
  const modelsolarpanel = useRef(null);
  const modelsolarroofs = useRef(null);
  const modelpowerwall = useRef(null);
  const modelaccessories = useRef(null);
  function scrollTo(section) {
    section.current.scrollIntoView({ behavior: "smooth"})
  }
  return (
    <Container sidemenu={{sidemenu}}>

      <div ref={models}>
        <Section
          scrollTo={scrollTo}  goToSection={modely} title="Model S" description="Order Online for Touchless delivery" leftbtntext="Custom Order" rightbtntext="Exisiting Inventory" backgroundimg="/images/model-s.jpg" />
      </div>
      
      <div ref={modely}>
        <Section
          scrollTo={scrollTo}  goToSection={model3} title="Model Y" description="Order Online for Touchless delivery" leftbtntext="Custom Order" rightbtntext="Exisiting Inventory" backgroundimg="/images/model-y.jpg" />
      </div>
      <div ref={model3}>
        <Section
          scrollTo={scrollTo} goToSection={modelx} title="Model 3" description="Order Online for Touchless delivery" leftbtntext="Custom Order" rightbtntext="Exisiting Inventory" backgroundimg="/images/model-3.avif" />
      </div>      
      <div ref={modelx}>
       <Section
        scrollTo={scrollTo}  goToSection={modelsolarpanel} title="Model X" description="Order Online for Touchless delivery" leftbtntext="Custom Order" rightbtntext="Exisiting Inventory" backgroundimg="/images/model-x.jpg" />
      </div>
      <div ref={modelsolarpanel}>
       <Section
        scrollTo={scrollTo}  goToSection={modelsolarroofs} title="Solar Panels" description="Schedule a Virtual Consultation" leftbtntext="Order now" rightbtntext="Learn more" backgroundimg="/images/solar-panel.jpg"
      /></div>
      <div ref={modelsolarroofs}>
       <Section
        scrollTo={scrollTo}  goToSection={modelpowerwall} title="Solar Roofs" description="Produce Clean Energy From Your Roof" leftbtntext="Order now" rightbtntext="Learn more" backgroundimg="/images/solar-roof.jpg"
      /></div>
      <div ref={modelpowerwall}>
       <Section
        scrollTo={scrollTo}  goToSection={modelaccessories} title="Powerwall" leftbtntext="Order now" rightbtntext="Learn more" backgroundimg="/images/Powerwall.avif"
      /></div>
      <div ref={modelaccessories}>
       <Section
         title="Accessories" description="" leftbtntext="Shop now " backgroundimg="/images/accessories.avif"
      /></div>
       <Footer/>
    </Container>

  )
}

export default Home;

const Container = styled.div`
  height:100vh;
 overscroll-behavior-y:contain;
  scroll-snap-type: y mandatory;
  overflow-x:hidden;
  filter: ${props=>!props.sidemenu.sidemenu ? 'blur(0px)':'blur(5px)'};
  overflow-y: ${props=>!props.sidemenu.sidemenu ? 'auto':'hidden'};
  


`
