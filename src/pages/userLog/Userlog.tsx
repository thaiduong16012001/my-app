import React from "react";
// import { Link } from "react-router-dom";;
import "./Userlog.css";
import Sidebar from "../components/sidebar/Sidebar";
import Logging from "../components/logging/Logging";

function Userlog() {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <Logging></Logging>
      <div className="table">
        <div className="table_top">ahihi</div>
        <div className="table_body">ahihihihih</div>
        <div className="paging">
          <a href="/">&laquo;</a>
          <a href="/">1</a>
          <a href="/">2</a>
          <a href="/">3</a>
          <a href="/">4</a>
          <a href="/">5</a>
          <a href="/">6</a>
          <a href="/">&raquo;</a>
        </div>
      </div>
    </div>
  );
}

export default Userlog;
