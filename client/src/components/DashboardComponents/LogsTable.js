import React from "react";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { TbArrowsSort } from "react-icons/tb";
import { LuDownload } from "react-icons/lu";

const LogsTable = (TableData) => {
  return (
    <Wrapper>
      <div className="cont">
        <div className="pre">
          <div className="search">
            <CiSearch className="icon" />
            <p>Order ID or transaction ID</p>
          </div>
          <div className="preRight">
            <div className="sort">
              Sort <TbArrowsSort />
            </div>
            <div className="download">
              <LuDownload />
            </div>
          </div>
        </div>
        <div className="cont1">
          <table className="table">
            <tr className="head">
              {/* {TableData.map((el, index) => {
                return (
                  <td key={index}>{el}</td>
                );
              })} */}
            </tr>
            {/* {TableData.map((el, index) => {
              return (
                <tr key={index}>
                  <td>{el.id}</td>
                  <td className="status">
                    {el.status==="Successful" ? <div className="success"></div> 
                  :<div className="processing"></div>}{el.status}
                  </td>
                  <td>{el.trxId}</td>
                  <td>{el.refundDate}</td>
                  <td>{el.amount}</td>
                </tr>
              );
            })} */}
          </table>
        </div>
      </div>
    </Wrapper>
  );
};

export default LogsTable;
const Wrapper = styled.section`
  padding: 4rem 3rem 3rem 3rem;
  .cont {
    background-color: white;
    border-radius: 5px;
    padding: 2rem;
    max-width: calc(100vw - 6rem);

    .pre {
      padding-bottom: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .search {
        display: flex;
        width: 27rem;
        height: 5rem;
        padding: 1rem;
        align-items: center;
        gap: var(--Spacing-spacing-04, 8px);
        flex-shrink: 0;
        align-self: stretch;
        border-radius: 6px;
        background-color: white;
        color: #d9d9d9;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        align-self: center;
        border: 1px solid #d9d9d9;
        .icon {
          font-size: 2.5rem;
          line-height: 1.5;
          font-weight: 600;
          color: #999999;
        }
      }
      .preRight {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
      .sort {
        display: flex;
        width: 10rem;
        height: 5rem;
        padding: 1rem;
        align-items: center;
        justify-content: center;
        gap: var(--Spacing-spacing-04, 8px);
        flex-shrink: 0;
        align-self: stretch;
        border-radius: 6px;
        background-color: white;
        color: #4d4d4d;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        align-self: center;
        border: 1px solid #d9d9d9;
      }
      .download {
        display: flex;
        width: 5rem;
        height: 5rem;
        padding: 1rem;
        align-items: center;
        justify-content: center;
        gap: var(--Spacing-spacing-04, 8px);
        flex-shrink: 0;
        align-self: stretch;
        border-radius: 6px;
        background-color: white;
        color: #4d4d4d;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        align-self: center;
        border: 1px solid #d9d9d9;
      }
    }
  }
  table {
    width: 100%;
    min-width: 650px;
    .head {
      font-weight: 400;
      border: none;
      color: #4d4d4d !important;
      background-color: #f2f2f2;
      border-radius: 5px;
      padding: 0 1rem;
      td {
        color: #4d4d4d;
      }
    }

    tr {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      justify-content: space-between;
      border-top: 0.6px solid #e9ecef;
      padding: 0 1rem;
    }
    td:last-child {
      justify-self: flex-end;
    }
    td:first-child {
      color: #146eb4;
    }
    td {
      font-size: 1.5rem;
      color: #4d4d4d;
      padding: 1.5rem 0;
      align-self: center;
    }
    .status {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;
      gap: 10px;
      .success {
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background-color: #17b31b;
      }
      .processing {
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background-color: #999999;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .cont {
      padding: 1rem;
      justify-content: flex-start;
      .cont1 {
        overflow-x: scroll;
      }
      .pre {
        .search {
          justify-content: center;
          align-items: center;
          background-color: white;
          width: 5rem;
          padding: 0;
          align-self: center;
          border: none;
          p {
            display: none;
          }
        }
      }
    }
  }
`;
