import React from "react";
import styled from "styled-components";
import { GoHome } from "react-icons/go";
import { HiOutlineClipboardList } from "react-icons/hi";
import { IoGridOutline } from "react-icons/io5";
import { FiTruck } from "react-icons/fi";
import { AiOutlineSound } from "react-icons/ai";
import { PiChartBar } from "react-icons/pi";
import { FaMoneyBills } from "react-icons/fa6";
import { TbDiscount2, TbUsers } from "react-icons/tb";
import { MdOutlinePalette } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import { CiWallet } from "react-icons/ci";

const Left = ({ active, setActive }) => {
  return (
    <Wrapper>
      <div className="list">
        <div
          onClick={() => setActive("Home")}
          className={`list-item ${active === "Home" && "active"}`}
        >
          <GoHome className="icon" />
          <span>Home</span>
        </div>
        <div
          onClick={() => setActive("Orders")}
          className={`list-item ${active === "Orders" && "active"}`}
        >
          <HiOutlineClipboardList className="icon" />
          <span>Orders</span>
        </div>
        <div
          onClick={() => setActive("Products")}
          className={`list-item ${active === "Products" && "active"}`}
        >
          <IoGridOutline className="icon" />
          <span>Products</span>
        </div>
        <div
          onClick={() => setActive("Delivery")}
          className={`list-item ${active === "Delivery" && "active"}`}
        >
          <FiTruck className="icon" />
          <span>Delivery</span>
        </div>
        <div
          onClick={() => setActive("Marketing")}
          className={`list-item ${active === "Marketing" && "active"}`}
        >
          <AiOutlineSound className="icon" />
          <span>Marketing</span>
        </div>
        <div
          onClick={() => setActive("Analytics")}
          className={`list-item ${active === "Analytics" && "active"}`}
        >
          <PiChartBar className="icon" />
          <span>Analytics</span>
        </div>
        <div
          onClick={() => setActive("Payouts")}
          className={`list-item ${active === "Payouts" && "active"}`}
        >
          <FaMoneyBills className="icon" />
          <span>Payouts</span>
        </div>
        <div
          onClick={() => setActive("Discounts")}
          className={`list-item ${active === "Discounts" && "active"}`}
        >
          <TbDiscount2 className="icon" />
          <span>Discounts</span>
        </div>
        <div
          onClick={() => setActive("Audience")}
          className={`list-item ${active === "Audience" && "active"}`}
        >
          <TbUsers className="icon" />
          <span>Audience</span>
        </div>
        <div
          onClick={() => setActive("Appearance")}
          className={`list-item ${active === "Appearance" && "active"}`}
        >
          <MdOutlinePalette className="icon" />
          <span>Appearance</span>
        </div>
        <div
          onClick={() => setActive("Plugins")}
          className={`list-item ${active === "Plugins" && "active"}`}
        >
          <GiElectric className="icon" />
          <span>Plugins</span>
        </div>
        
      </div>
      <div className="last">
      <div className="menuEnd">
          <div className="walletDiv">
            <CiWallet className="wallet" />
          </div>
          <div className="t">
          <span className="t1">Available credits</span>
          <span className="t2">222.10</span>
          </div>
        </div>
        </div>
    </Wrapper>
  );
};

export default Left;

const Wrapper = styled.section`
  background-color: #1e2640;
  position: relative;
  min-height: calc(100vh - 8rem);
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .list {
    padding: 3rem 2rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
    /* position: fixed; */
  }
  .list-item {
    display: grid;
    grid-template-columns: 1fr 5fr;
    width: 100%;
    gap: 1rem;
    font-size: 14px;
    padding: 1.125rem 1.125rem;
    border-radius: 5px;
    color: white;
    -webkit-transition-duration: 0.45s;
    transition-duration: 0.45s;
    transition-property: color;
    -webkit-transition-property: color;
    background-color: #1e2640;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  .list-item.active {
    background-color: rgba(255, 255, 255, 0.1);
  }
  .icon {
    font-size: 18px;
  }
  .last{
    margin: 3rem 2rem 4rem 2rem;
  .menuEnd {
    
    padding: 1.125rem 1.125rem;
    border-radius: 5px;
    width: 100%;
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .walletDiv {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(255, 255, 255, 0.2);
      padding: 0.5rem;
      border-radius: 3px;
      .wallet {
        font-size: 2rem;
      }
    }
    .t{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 5px;
      .t1{
        font-size: 11px;
        color: rgba(255, 255, 255, 0.8);
      }
      .t2{
        font-size: 16px;
      }
    }
  }}
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    min-height: 0;
    overflow-y: visible;
    overflow-x: scroll;
    display: block;
    .list {
      flex-direction: row;
      justify-content: start;
      /* position: relative; */
    }
    .list > * > :nth-child(2) {
      display: none;
    }
    .list-item {
      display: flex;
      justify-content: flex-start;
      font-size: 2.5rem;
    }
    .last{
      display: none;
    }
  }
`;
