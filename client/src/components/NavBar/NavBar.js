"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./NavBar.css");
var NavBar = function (_a) {
    var onItemClick = _a.onItemClick;
    var handleItemClick = function (item) {
        onItemClick(item);
    };
    return (<nav>
      <ul>
        <li>
          <react_router_dom_1.NavLink to="/" className="nav-link2" onClick={function () { return handleItemClick('MENU DE LA SEMANA'); }}>
            <p>INTERFOODS!</p>
          </react_router_dom_1.NavLink>
        </li>
        </ul>
        <ul>
        <li>
          <react_router_dom_1.NavLink to="/menu-semana" className="nav-link" onClick={function () { return handleItemClick('MENU DE LA SEMANA'); }}>
            MENU DE LA SEMANA
          </react_router_dom_1.NavLink>
          <react_router_dom_1.NavLink to="/como-funciona" className="nav-link" onClick={function () { return handleItemClick('COMO FUNCIONA'); }}>
            COMO FUNCIONA
          </react_router_dom_1.NavLink>
          <react_router_dom_1.NavLink to="/faqs" className="nav-link" onClick={function () { return handleItemClick('FAQ\'S'); }}>
            ¿QUIENES SOMOS?
          </react_router_dom_1.NavLink>
           <react_router_dom_1.NavLink to="/faqs" className="nav-link" onClick={function () { return handleItemClick('FAQ\'S'); }}>
            FAQ'S
          </react_router_dom_1.NavLink>
        </li>
      </ul>
      <ul>
      <li>
      <img src="https://static.vecteezy.com/system/resources/previews/019/787/018/original/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png" alt="Logo 1" className="nav-logo"/>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png" alt="Logo 2" className="nav-logo"/>
     </li>
     </ul>    
    </nav>);
};
exports.default = NavBar;
