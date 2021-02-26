import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/hover.min.css';
import '../assets/css/tooltip.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
  }

  .icon-text {
    display: flex;
    align-items: center;
    padding: 7px 0px;

    b {
      font-size: 14px;
      padding-right: 10px;
    }

    svg {
      font-size: 20px;
      margin-right: 3px;
    }
  }

  .main {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  .title {
    font-size: 35px;
    color: #fff;
    text-align: center;
    font-weight: 600;
    letter-spacing: 1px;
    margin-top: 60px;

    :first-letter{
      color: #ec0303;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      list-style: none;
      padding: 10px;
      cursor: pointer;
      

      &.selected a {
        background-color: #f03535;
      }

      a {
        padding: 8px 15px;
        border: 1px solid #f03535;
        border-radius: 10px;
        font-size: 14px;
        color: #ffff;
        background-image: linear-gradient(
        to right top,
        #cf2020,
        #d12726,
        #d42d2c,
        #d63332,
        #d83838
      );
      box-shadow: 0 14px 28px rgba(255, 255, 255, 0.25),
        0 10px 10px rgba(45, 45, 45, 0.22) !important;
      }
    }
  }

  *:focus {
    outline: 0;
  }

  
  .select-class {
    .css-g1d714-ValueContainer {
      height: 52px !important;
    }
    .css-1uccc91-singleValue {
      top: 60%;
      font-size: 14px;
      font-weight: 500;
      color: rgb(144 144 144);
    }
    :hover {
      border-bottom: 2px solid red;
      border-radius: 3px;
    }

    .css-2613qy-menu {
      color: red;
    }
    .css-yk16xz-control {
      height: 52px !important;
      border-color:  rgb(220, 220, 220) !important;
    }
  }
`;
