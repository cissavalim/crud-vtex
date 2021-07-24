import "./Nav.css";
import React from "react";
import NavItem from "./NavItem";

export default (props) => (
   <aside className="menu-area">
      <nav className="menu">
         <NavItem path="/" icon="home" name="Início" />
         <NavItem path="/users" icon="users" name="Usuários" />
         <NavItem path="/products" icon="shopping-cart" name="Produtos" />
      </nav>
   </aside>
);
