import React from 'react'
import { styled } from 'styled-components';

function Section(props) {
    const {title,description,leftbtntext,rightbtntext,backgroundimg}=props;
    return (
        <Wrap bgimg={backgroundimg}>
            <Itemtext>
                <h1> {title}</h1>
                <p>{description}</p>
            </Itemtext>
            <Button>
                <ButtonGroup>
                    <LeftButton>
                        {leftbtntext}
                    </LeftButton>
                    {rightbtntext && <RightButton>
                       {rightbtntext}
                    </RightButton>}
                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg" />
            </Button>

        </Wrap>
    )
}

export default Section;

const Itemtext = styled.div`
    padding-top:15vh;
    text-align:center;

`

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat; 
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-image: ${props=> `url("${props.bgimg}")`};
`

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width:760px){
        flex-direction:column;
    }

`;
const LeftButton = styled.div`
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display: flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:12px;
    cursor:pointer;
    margin:8px;

`;
const RightButton = styled(LeftButton)`
    background-color:white;
    opacity:0.65;
    color:black;
`;
const DownArrow = styled.img`
    margin-bottom:10px;
    height:40px;
    animation:animationDownArrow infinite 1.5s;
`;

const Button=styled.div`
    
`;
