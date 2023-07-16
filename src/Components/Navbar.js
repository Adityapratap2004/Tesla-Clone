import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { styled } from 'styled-components';
import { actionCreators } from '../State';


function Navbar() {
  const sidemenu=useSelector(state=>state.sidemenu);
  const dispatch=useDispatch();
  const {showSideMenu,hideSideMenu}=bindActionCreators(actionCreators,dispatch);
  return (
    <Container>
      <Logo >
        <a>
          <img src="/images/logo.svg" alt="logo" />
        </a>
      </Logo>

      <Menu>
        <a href="/">Model S</a>
        <a href="/">Model 3</a>
        <a href="/"> Model X</a>
        <a href="/">Model Y</a>
        <a href="/">Solar Roof</a>
        <a href="/">Solar Panels</a>
        <a href="/">Powerwall</a>
      </Menu>
      <RightMenu>
        <a href="/">Shop</a>
        <a href="/">Account</a>
        <span href="/" onClick={showSideMenu}>Menu</span>
      </RightMenu>
       <SideMenu sidemenu={{sidemenu}}>
        <Close >
          <i className="fa-solid fa-xmark fa-lg" onClick={hideSideMenu}></i>
        </Close>

        <ul>
        {
          sidemenu && <><li><a href="#">Model S</a></li>
          <li><a href="#">Model 3</a></li>
          <li><a href="#">Model X</a></li>
          <li><a href="#">Model Y</a></li>
          <li><a href="#">Solar Roof</a></li>
          <li><a href="#">Solar Panels</a></li>
          <li><a href="#">Powerwall</a></li> </>
        }
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Used Inventory</a></li>
          <li><a href="#">Trade-In</a></li>
          <li><a href="#">Demo Drive</a></li>
          <li><a href="#">Insurance</a></li>
          <li><a href="#">Fleet</a></li>
          <li><a href="#">Cybertruck</a></li>
          <li><a href="#">Roadster</a></li>
          <li><a href="#">Semi</a></li>
          <li><a href="#">Charging</a></li>
          <li><a href="#">Commercial Energy</a></li>
          <li><a href="#">Utilities</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Find Us</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Investor Relations</a></li>
        </ul>
      </SideMenu>
    </Container>
  )
}

export default Navbar;

const Container = styled.div`
  z-index:1;
  min-height:60px;
  position:fixed;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 20px;
  top:0;
  left:0;
  right:0;
`;

const Menu = styled.div`
  display:flex;
  align-item:center;
  justify-content:center;
  flex:1;
  a{
    font-weight:600;
    padding:10px 15px;
  }
  @media (max-width:768px){
    display:none;
  }
`;

const RightMenu = styled.div`
  a{
    font-weight:600;
    padding: 10px 10px;
      
  }
  
  span{
    font-weight:600;
    padding: 10px 10px;
    cursor:pointer;
  }

  span:hover{
    background-color:rgba(0,0,0,.1);
    border-radius:8px;
  }
`
const SideMenu = styled.div`
      position:fixed;
      top:0;
      buttom:0;
      right:0;
      background-color:white;
      width:300px;
      z-index:10;
      padding:20px;
      transform: ${props => props.sidemenu.sidemenu ? 'translateX(0)' : 'translateX(100%)'};
      transition:0.2s ease-in;
      height:100vh;
      overflow-y: scroll;
      li{
        width:100%;        
        padding:15px 10px;
        display:flex;
        flex-direction:column;
        align-items:start;
        cursor:pointer;
        a{
          font-weight:600;
          pointer-events: none; 
        }
      }
      li:hover {
        background-color:rgba(0,0,0,.1);
        border-radius:8px;
      }
`;

const Close = styled.div`
      width:100%;
      display:flex;
      justify-content:flex-end;
      padding:15px 10px;

      i{
        cursor:pointer;
      }
      


`;

const Logo = styled.div`
    a{
      pointer-events: none;   
}   
`
