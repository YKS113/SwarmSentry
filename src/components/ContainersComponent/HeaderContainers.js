import React from "react";
import styled from "styled-components";
import { GoQuestion } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { HiSpeakerphone } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
export default function HeaderContainers() {
  return (
    <>
      <Wrapper>
        <div className="headerCont">
          <div className="head2">
            <div className="el1">
              <h5>Cmonitor</h5>
              <div className="howit">
                <GoQuestion />
                <p>How it works</p>
              </div>
            </div>
            {/* <div className="search">
              <CiSearch className="icon" />
              <p>Search features, tutorials, etc.</p>
            </div> */}
            {/* <div className="icons">
              <HiSpeakerphone className="icon-item" />
              <IoMdArrowDropdown className="icon-item" />
            </div> */}
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
    display: grid;
    grid-template-columns: 1fr;
    height: 8rem;
    /* box-shadow: 0 0.5px 0.5px 0 rgba(0, 0, 0, 0.16); */

    justify-content: space-between;
    align-items: center;
    .headProfile {
      width: 100%;
      height: 100%;
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
        }
        img {
          width: 5rem;
          height: 5rem;
          border-radius: 10px;
        }
        .text {
          h5 {
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
    .head2 {
      border-bottom: 1px solid var(--Black-85, #d9d9d9);
      background: var(--Black-100, #fff);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      width: 100%;
      height: 100%;
      display: flex;
      padding: 2rem 3rem;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      .el1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
      }
      h5 {
        color: var(--Black-12, #1a181e);
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 28px; /* 140% */
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
        .icon-item {
          font-size: 45px;
          border-radius: 50px;
          padding: 10px;
          color: #4d4d4d;
          background-color: #e6e6e6;
          display: flex;
          justify-content: center;
          align-items: center;
        }
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
