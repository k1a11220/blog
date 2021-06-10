import React, { useState } from "react";
import "./Hamburger.css";
import styled from "@emotion/styled";

const Wrapper = styled.nav`
  width: 75rem; // 1200px
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 1400px) {
    width: 90vw;
  }

  @media screen and (max-width: 768px) {
    display: grid;
    align-items: center;
    position: relative;
    width: 90vw;
  }
`;

const SelectArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: all 0.5s ease-in-out;

  & p,
  a {
    font-size: 1rem; //16px
    margin-left: 2.5rem; //40px
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HamburgerContainer = styled.div`
  display: none;
  flex-direction: column;
  justify-content: flex-end;
  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: flex-end;
  }
`;

const Navigation = () => {
  const [hamburger, setHamburger] = useState(false);
  const menuStatus = () => {
    setHamburger(!hamburger);
  };

  const Container = styled.section`
    width: 100vw;
    height: ${hamburger === false ? "4rem" : "20rem"}; //64px
    display: flex;
    justify-content: center;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    z-index: 2;
    transition: all 0.5s ease-in-out;
    /* box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1); */
    border-bottom: solid 2px #f3f3f3;
  `;

  const HamburgerMenu = styled.div`
    display: ${hamburger === false ? "none" : "flex"};
    flex-direction: column;
    transition: all 0.5s ease-in-out;

    & p,
    a {
      height: 3rem;
    }
  `;

  const Label = styled.label`
    display: flex;
    flex-direction: column;
    width: 30px;
    cursor: pointer;

    & span {
      background: #222222;
      border-radius: 10px;
      height: 3px;
      margin: 3px 0;
      transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }

    & span:nth-of-type(1) {
      width: 50%;
    }

    & span:nth-of-type(2) {
      width: 100%;
    }

    & span:nth-of-type(3) {
      width: 75%;
    }

    & [type="checkbox"] {
      display: none;
    }
  `;

  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
};

export default Navigation;