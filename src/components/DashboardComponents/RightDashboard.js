import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardDashboard from "./CardDashboard";
import Table1 from "./Table1";

const RightDashboard = () => {
  const [active,setActive]=useState("refunds")
  const cardsData = [
    { e1: "Next Payout", e2: "₹2,312.24", e3: "23 orders ", e4:"blue" },
    { e1: "Amount Pending", e2: "₹92,312.20", e3: "13 orders " },
    { e1: "Amount Processed", e2: "₹23,92,312.19" },
  ];
  return (
    <Wrapper>
      <div className="title">
        <h3>Overview</h3>
        <div className="selection">
          <select name="period" id="period" form="selectionForm">
            <option value="This Month">This Month</option>
            <option value="Last Month">Last Month</option>
            <option value="This Year">This Year</option>
            <option value="Last Year">Last Year</option>
          </select>
        </div>
      </div>

      <>
        <div className="cards">
          {cardsData.map((el, index) => {
            return <CardDashboard e1={el.e1} e2={el.e2} e3={el.e3} e4={el.e4} key={index}/>;
          })}
        </div>
        <div className="tableTitle">
          <h3>Transactions | This Month</h3>
          <div className="pills">
            <div  className={active=="payouts" ? "active pill" : "pill"}
            onClick={()=>{setActive("payouts")}}>Payouts (22)</div>
            <div className={active=="refunds" ? "active pill" : "pill"}
            onClick={()=>{setActive("refunds")}}>Refunds (6)</div>
          </div>
        </div>
        <Table1 />
      </>
    </Wrapper>
  );
};

export default RightDashboard;
const Wrapper = styled.section`
  background: var(--Black-98, #fafafa);
  min-height: calc(100vh - 8rem);
  /* background-color: #EEEBF6; */
  .title {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    gap: 2rem;
    padding: 4rem 3rem 3rem 3rem;

    h3 {
      color: var(--Black-12, #1a181e);
      font-size: 2rem;
      font-style: normal;
      font-weight: 500;
      line-height: 28px; /* 140% */
    }
    .selection {
      cursor: pointer;
      select {
        cursor: pointer;
        border-radius: 4px;
        border: 1px solid var(--Black-85, #d9d9d9);
        background: var(--Black-100, #fff);
        width: 137px;
        height: 36px;
        color: var(--Black-30, #4d4d4d);
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
        padding: 0.5rem;
      }
      option {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .cards {
    width: 100%;
    padding: 0rem 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
  .tableTitle {
    display: flex;
    justify-content:center;
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;
    padding: 4rem 3rem 0rem 3rem;

    h3 {
      color: var(--Black-12, #1a181e);
      font-size: 2rem;
      font-style: normal;
      font-weight: 500;
      line-height: 28px; /* 140% */
    }
    .pills {
      display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
      .pill {
        border-radius: 40px;
        background: var(--Black-90, #e6e6e6);
        display: flex;
        padding: 6px 16px;
        align-items: center;
        gap: 10px;
        font-size: 1.75rem;
        color: #808080;
        cursor: pointer;
      }
      .active{
        background-color: #146EB4;
        color: white;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .cards {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
`;
