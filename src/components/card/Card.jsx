import React from 'react';
import styled, { css } from 'styled-components';

const StyledCard = styled.div`
   position: relative;
   width: auto;
   .card-image {
      height: 400px;
      width: 100%;
      border-radius: 8px;
      img {
         display: block;
         width: 100%;
         height: 100%;
         object-fit:cover;
         border-radius: inherit;
      }
   }
   .card-content {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 50%);
      z-index: 10;
      width: calc(100% - 36px);
      padding: 20px;
      border-radius: 20px;
      background-color: #FFFFFF;
      .card-top {
         display: flex;
         justify-content: space-between;
         align-items: center;
         margin-bottom: 30px;
         .card-user {
            display: inherit;
            justify-content: center;
            align-items: center;
            gap: 12px;
            img {
               width: 30px;
               height: 30px;
               object-fit:cover;
               border-radius: 1rem;
               flex-shrink: 0;
            }
            span {
               font-weight: 300;
               font-size: 16px;
               line-height: 24px;
               color: #333;
            }
         }
         .card-interact {
            display:flex;
            justify-content: center;
            align-items: center;
            gap: 12px;
            span {
               font-size: 16px;
               font-weight: 400;
               line-height: 24px;
            }
         }
      }
      .card-bottom {
         display:flex;
         justify-content: space-between;
         align-items: center;
         h3 {
            color: ${props => props.theme.colors.blue};;
            font-size: 18px;
            font-weight: 700;
         }
         span {
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
         }
      }
   }
`
const Card = (props) => {
   return (
      <StyledCard secondary={props.secondary} fontSize="22px">
         <div className="card-image">
            <img src="https://cdn.dribbble.com/users/2400293/screenshots/19060197/media/82d672bd58929b313f4805df5e48d586.png?compress=1&resize=1000x750&vertical=top" alt="" />
         </div>
         <div className="card-content">
            <div className="card-top">
               <div className="card-user">
                  <img src="https://cdn.dribbble.com/users/2400293/screenshots/6349608/dribble.jpg?compress=1&resize=800x600&vertical=top" alt="" />
                  <span>@zndrson</span>
               </div>
               <div className="card-interact">
                  <img src="/coolicon.svg" alt="heart" />
                  <span>256</span>
               </div>
            </div>
            <div className="card-bottom">
               <h3>Cosmic Perspective</h3>
               <span>12,000 PSL</span>
            </div>
         </div>
      </StyledCard>
   );
};

export default Card;