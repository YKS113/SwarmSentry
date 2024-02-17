import React from "react";
import styled from "styled-components";
import { GoQuestion } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa";
const CardDashboard = ({ e1, e2, e3, e4 }) => {
  return (
    <Wrapper>
      <div className={e4 ? "blue" : "white"}>
        <div className="cardCont">
          <div className="group">
            <div className="upper">
              {e1}
              <GoQuestion />
            </div>
            <div className="lower">
              <div className="l1">{e2}</div>
              <div className="l2">
                {e3}
                {e3 && <FaChevronRight />}
              </div>
            </div>
          </div>
        </div>
        {e4 ? (
          <div className="extra">
            <div>Next payout date:</div>
            <div>Today, 4:00 PM</div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </Wrapper>
  );
};

export default CardDashboard;
const Wrapper = styled.section`
  
  .white {
    border-radius: var(--Spacing-spacing-04, 8px);
    background: var(--Black-100, #fff);
    /* Shadow/Card */
    box-shadow: 0px 2px 6px 0px rgba(26, 24, 30, 0.04);
  }
  .cardCont {
    padding: 1rem 2.5rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
    .group {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 1rem;
      width: 100%;
      .upper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        color: var(--Black-30, #4d4d4d);
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
      }
      .lower {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .l1 {
          color: var(--Black-12, #1a181e);
          font-size: 3rem;
          font-style: normal;
          font-weight: 500;
          line-height: 38px; /* 118.75% */
        }
        .l2 {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
          color: #146eb4;
          font-size: 1.5rem;
          font-style: normal;
          font-weight: 400;
          line-height: 24px; /* 150% */
          text-decoration-line: underline;
        }
      }
    }
  }
  .extra {
    background-color: #0e4f82;
    color: #f2f2f2;
    padding: 1rem 2.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    font-size: 1.3rem;
  }
  .blue {
    background-color: #146eb4;
    color: white;
    border-radius: var(--Spacing-spacing-04, 8px);
    box-shadow: 0px 2px 6px 0px rgba(26, 24, 30, 0.04);
    .cardCont{
      color: white;
      .group{
        .upper{
          color: white;
        }
        .lower{
          .l1{
            color: white;
          }
          .l2{
            color: white;
          }
        }
      }
    }
  }
`;
