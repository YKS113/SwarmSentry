import React from "react";
import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function HeaderContainers() {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <div className="headerCont">
          <div className="head">
            <div className="logo" onClick={() => navigate("/")}>
              <img src="./swarmsentry_logo.png" alt="logo" />
            </div>
            <div className="right">
              <div className="el1">
                <h5>SwarmSentry</h5>
              </div>
              <div className="icon">
                <FaRegUserCircle />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  top: 0;
  width: 100%;
  z-index: 999;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;

  .headerCont {
    display: flex;
    height: 8rem;
    /* box-shadow: 0 0.5px 0.5px 0 rgba(0, 0, 0, 0.16); */

    justify-content: space-between;
    align-items: center;
    img{
      height: 100%;
    }
    .headProfile {
      width: 100%;
      height: 100%;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      background-color: #1e2640;
      .profCont {
        width: 90%;
        height: 90%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .prof {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 0.8rem;
          .swarmsentry_logo {
            width: 1rem;
          }
        }
        img {
          
        }
        .text {
          h5 {
            color: var(--Black-100, #fff);
            font-size: 15px;
            font-style: normal;
            font-weight: 500;
            line-height: 22px; /* 146.667% */
          }
          h6 {
            color: var(--Black-100, #fff);
            font-size: 15px;
            font-style: normal;
            font-weight: 500;
            line-height: 22px; /* 146.667% */
          }
          a {
            color: var(--Black-100, #fff);
            font-size: 13px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px; /* 123.077% */
            text-decoration-line: underline;
          }
        }
        .dropD {
          font-size: 5rem;
          color: white;
        }
      }
    }
    .head {
      background: var(--Black-100, #fff);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      width: 100%;
      height: 100%;
      display: flex;
      padding: 1rem 3rem;
      justify-content: space-between;
      align-items: center;
      gap: 3rem;
      .logo {
        cursor: pointer;
        font-size: 1.25rem;
        height: 100%;
        img{
          height: 100%;
        
        }
      }
      .right {
        display: flex;
        flex-basis: 90%;
        justify-content: space-between;
        align-items: center;
        .el1 {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        h5 {
          color: var(--Black-12, #1a181e);
          font-size: 2rem;
          font-style: normal;
          font-weight: 500;
          line-height: 28px; /* 140% */
        }
        .icon {
          font-size: 5rem;
        }
        h6 {
          color: var(--Black-12, #1a181e);
          font-size: 1.25rem;
          font-style: normal;
          font-weight: 500;
          line-height: 28px; /* 140% */
          text-overflow: ellipsis;
        }
      }
      .howit {
        color: #4d4d4d;
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
      }
      .search {
        display: flex;
        width: 38rem;
        height: 5rem;
        padding: 9px 16px;
        align-items: center;
        gap: var(--Spacing-spacing-04, 8px);
        flex-shrink: 0;
        align-self: stretch;
        border-radius: 6px;
        background: var(--Black-95, #f2f2f2);
        color: var(--Black-50, #808080);
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        align-self: center;
        .icon {
          color: rgba(29, 29, 29, 0.8);
          font-size: 2.5rem;
          line-height: 1.5;
          font-weight: 600;
        }
      }
      .icons {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        button {
          border-style: none;
          font-size: 1.5rem;
          border-radius: 4px;
          padding: 0.5rem;
          cursor: pointer;
          transition: all 0.3s linear;
          &:hover {
            transform: scale(0.9);
          }
        }
        .start {
          background-color: #cbffd2;
          color: #138c14;
        }
        .stop {
          background-color: #ffcbcb;
          color: #8c1313;
        }
        .delete {
          background-color: #999999;
          color: #2d2d2d;
        }
      }
    }
    .head3 {
      .prof {
        font-size: 5rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .headerCont {
      .headProfile {
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        .profCont {
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          .text {
            display: none;
          }
          .dropD {
            display: none;
          }
        }
      }
      .head2 {
        padding: 2px 2px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .el1 {
          padding: 2px 2px;
          .howit {
            font-size: 20px;
            p {
              display: none;
            }
          }
        }
        .search {
          justify-content: center;
          align-items: center;
          background-color: white;
          width: auto;
          padding: 0;
          align-self: center;

          p {
            display: none;
          }
        }
        .icons {
          .icon-item {
            font-size: 35px;
            padding: 8px;
          }
        }
      }
    }
  }
`;
