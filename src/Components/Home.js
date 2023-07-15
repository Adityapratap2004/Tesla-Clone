import React from 'react'
import Section from './Section'
import { styled } from 'styled-components';

function Home() {
  return (
    <Container>
      <Section
        title="Model 3" description="Order Online for Touchless delivery" leftbtntext="Custom Order" rightbtntext="Exisiting Inventory" backgroundimg="/images/model-3.avif" />

      <Section
        title="Model Y" description="Order Online for Touchless delivery" leftbtntext="Custom Order" rightbtntext="Exisiting Inventory" backgroundimg="/images/model-y.jpg" />

      <Section
        title="Model S" description="Order Online for Touchless delivery" leftbtntext="Custom Order" rightbtntext="Exisiting Inventory" backgroundimg="/images/model-s.jpg" />

      <Section
        title="Model X" description="Order Online for Touchless delivery" leftbtntext="Custom Order" rightbtntext="Exisiting Inventory" backgroundimg="/images/model-x.jpg" />

      <Section
        title="Lowest Cost Solar Panels in America" description="Money-back guarantee" leftbtntext="Order now" rightbtntext="Learn more" backgroundimg="/images/solar-panel.jpg"
      />
      <Section
        title="Solar for New Roofs" description="Solar Roof Costs Less Than a New Roof Plus Solar Panels" leftbtntext="Order now" rightbtntext="Learn more" backgroundimg="/images/solar-roof.jpg"
      />
      <Section
        title="Powerwall"  leftbtntext="Order now" rightbtntext="Learn more" backgroundimg="/images/Powerwall.avif"
      />
      <Section
        title="Accessories" description="" leftbtntext="Shop now " backgroundimg="/images/accessories.jpg"
      />
    </Container>
  )
}

export default Home;

const Container = styled.div`
height:100vh;
`
