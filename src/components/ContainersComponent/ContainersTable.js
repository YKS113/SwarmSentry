import React from "react";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { TbArrowsSort } from "react-icons/tb";
import { LuDownload } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const ContainersTable = () => {
  const TableData = [
    {
      id: "64aea16def29b9b9522c59d7dd8d165f9565e48f33de80d6ee96fb5592df6706",
      status: "Running",
      name: "/crazy_colden",
      refundDate: "Today, 8:45 PM",
      amount: "Today, 8:45 PM",
    },
    {
      id: "64aea16def29b9b9522c59d7dd8d165f9565e48f33de80d6ee96fb5592df6706",
      status: "Running",
      name: "/crazy_colden",
      refundDate: "Yesterday, 5:45 PM",
      amount: "Today, 8:45 PM",
    },
    {
      id: "64aea16def29b9b9522c59d7dd8d165f9565e48f33de80d6ee96fb5592df6706",
      status: "Running",
      name: "/crazy_colden",
      refundDate: "12 Jul 2023, 03:00 PM",
      amount: "Today, 8:45 PM",
    },
    {
      id: "64aea16def29b9b9522c59d7dd8d165f9565e48f33de80d6ee96fb5592df6706",
      status: "Running",
      name: "/crazy_colden",
      refundDate: "12 Jul 2023, 03:00 PM",
      amount: "Today, 8:45 PM",
    },
    {
      id: "64aea16def29b9b9522c59d7dd8d165f9565e48f33de80d6ee96fb5592df6706",
      status: "Stopped",
      name: "/crazy_colden",
      refundDate: "12 Jul 2023, 03:00 PM",
      amount: "Today, 8:45 PM",
    },
    {
      id: "64aea16def29b9b9522c59d7dd8d165f9565e48f33de80d6ee96fb5592df6706",
      status: "Stopped",
      name: "/crazy_colden",
      refundDate: "12 Jul 2023, 03:00 PM",
      amount: "Today, 8:45 PM",
    },
  ];

  const navigate = useNavigate();
  
  return (
    <Wrapper>
      <div className="cont">
        {/* <div className="pre">
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
        </div> */}
        <div className="cont1">
          <table className="table">
            <tr className="head">
              <td>Container ID</td>
              <td>Status</td>
              <td>Container Name</td>
              <td>Created On</td>
              <td>Uptime</td>
            </tr>
            {TableData.map((el, index) => {
              return (
                <tr key={index} className="containerLink" onClick={()=>navigate(`/admin/${el.id}`)}>
                  <td>{el.id.slice(0, 11)}</td>
                  <td className="status">
                    {el.status === "Running" ? (
                      <div className="success"></div>
                    ) : (
                      <div className="stopped"></div>
                    )}
                    {el.status}
                  </td>
                  <td>{el.name}</td>
                  <td>{el.refundDate}</td>
                  <td>{el.amount}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContainersTable;
const Wrapper = styled.section`
  margin: 6rem 0;
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
      td:last-child {
        padding-right: 5rem;
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
      padding-right: 1rem;
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
      .stopped {
        width: 10px;
        height: 10px;
        border-radius: 10px;
        /* background-color: #999999; */
        background-color: #cf142b;
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
