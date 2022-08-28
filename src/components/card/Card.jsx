import React from 'react';
import styled, { css } from 'styled-components';

const StyledCard = styled.div`
   position: relative;
   width: auto;
`
const CardImageWrapper = styled.div`
   height: 400px;
   width: 100%;
   border-radius: 8px;
`
const CardImg = styled.img`
   display: block;
   width: 100%;
   height: 100%;
   object-fit:cover;
   border-radius: inherit;
`

const CardContent = styled.div`
   position: absolute;
   left: 50%;
   bottom: 0;
   transform: translate(-50%, 50%);
   z-index: 10;
   width: calc(100% - 36px);
   padding: 20px;
   border-radius: 20px;
   background-color: #FFFFFF;
`

const CardTop = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 30px;
`
const CardUser = styled.div`
   display: inherit;
   justify-content: center;
   align-items: center;
   gap: 12px;
`
const CardUserImage = styled.img`
   width: 30px;
   height: 30px;
   object-fit:cover;
   border-radius: 1rem;
   flex-shrink: 0;
`

const CardUserName = styled.span`
   font-weight: 300;
   font-size: 16px;
   line-height: 24px;
   color: #333;
`

const CardInteract = styled.div`
   display:flex;
   justify-content: center;
   align-items: center;
   gap: 12px;
`
const CardInteractCount = styled.span`
   font-size: 16px;
   font-weight: 400;
   line-height: 24px;
`
const CardFooter = styled.div`
   display:flex;
   justify-content: space-between;
   align-items: center;
`

const CardTitle = styled.h3`
   color: black;
   font-size: 18px;
   font-weight: 500;
`

const CardAmount = styled.span`
   font-size: ${props => props.fontSize || "18px"};
   font-weight: 700;
   ${props => props.secondary && css`
      background: linear-gradient(86.88deg, #20e3b2, #2cccff);
   `};
   ${props => !props.secondary && css`
      background: linear-gradient(86.88deg, #7D6AFF 1.38%, #FFB86C 64.35%, #FC2872 119.91%);
   `};
   color: transparent;
   -webkit-background-clip: text;
   background-clip: text;
`
const Card = (props) => {
   return (
      <StyledCard>
         <CardImageWrapper>
            <CardImg src="https://cdn.dribbble.com/users/2400293/screenshots/19060197/media/82d672bd58929b313f4805df5e48d586.png?compress=1&resize=1000x750&vertical=top" alt="" />
         </CardImageWrapper>
         <CardContent>
            <CardTop>
               <CardUser>
                  <CardUserImage src="https://cdn.dribbble.com/users/2400293/screenshots/6349608/dribble.jpg?compress=1&resize=800x600&vertical=top" alt="" />
                  <CardUserName>@zndrson</CardUserName>
               </CardUser>
               <CardInteract>
                  <img src="/coolicon.svg" alt="heart" />
                  <CardInteractCount>256</CardInteractCount>
               </CardInteract>
            </CardTop>
            <CardFooter>
               <CardTitle>Cosmic Perspective</CardTitle>
               <CardAmount secondary={props.secondary} fontSize="22px">12,000 PSL</CardAmount>
            </CardFooter>
         </CardContent>
      </StyledCard>
   );
};

export default Card;