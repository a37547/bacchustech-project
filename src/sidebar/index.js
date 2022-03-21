import React, { Component } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <ProSidebar style={{ backgroundColor: "#50744d", position: "relative" }}>
        <Menu
          iconShape="square"
          style={{ backgroundColor: "#50744d", height: "calc(100vh - 60px)" }}
        >
          <MenuItem
            className="text-white font-weight-bold"
            style={{ backgroundColor: "#50744d" }}
          >
            <Link to="introducaodedados"> Introdução de dados</Link>
          </MenuItem>
          <MenuItem
            className="text-white"
            style={{ backgroundColor: "#50744d" }}
          >
            Planeamento
          </MenuItem>
        </Menu>
      </ProSidebar>
    );
  }
}

export default Sidebar;
