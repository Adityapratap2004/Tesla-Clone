import React from 'react'
import { styled } from 'styled-components'

function Footer() {
    return (
        <Container>
            <ul>
                <li><a href="#">Tesla © 2023</a></li>
                <li><a href="#">Privacy & Legal</a></li>
                <li><a href="#">Vehicle Recalls</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Get Updates</a></li>
                <li><a href="#">Locations</a></li>
                <li><a href="#">Aditya Pratap Singh</a></li>
            </ul>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    position:relative;
    bottom:35px;
    display:flex;
    justify-content:center;
    ul{
        display:flex;
        flex-wrap: wrap;
        
        li{
            padding: 0 5px;
            
            a {
                color:#ebe5e5;
                font-size:15px;
            }
        }

    }
    
`
