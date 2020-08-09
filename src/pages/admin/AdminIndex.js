import React, { Component } from 'react';
import { Link } from "react-router-dom";

class AdminIndex extends Component {
    render() {
        return (
            <div>
                <div className="fix-header card-no-border">
                    {/* <div className="preloader">
                        <svg className="circular" viewBox="25 25 50 50">
                            <circle className="path" cx={50} cy={50} r={20} fill="none" strokeWidth={2} strokeMiterlimit={10} />
                        </svg>
                    </div> */}
                    <div id="main-wrapper">
                        <header className="topbar">
                            <nav className="navbar top-navbar navbar-expand-md navbar-light">
                                <div className="navbar-header">
                                    <a className="navbar-brand" href="index.html">
                                        {/* Logo icon */}<b>
                                            Admin
            </b>
                                    </a>
                                </div>
                                <div className="navbar-collapse">
                                    <ul className="navbar-nav mr-auto mt-md-0">
                                        {/* This is  */}
                                        <li className="nav-item">
                                            <a className="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark" href="javascript:void(0)"><i className="fa fa-bars" /></a>
                                        </li>
                                        <li className="nav-item m-l-10">
                                            <a className="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark" href="javascript:void(0)"><i className="fa fa-bars" /></a>
                                        </li>
                                    </ul>
                                    <ul className="navbar-nav my-lg-0">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark" href data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="assets/images/users/1.jpg" alt="user" className="profile-pic" /></a>
                                            <div className="dropdown-menu dropdown-menu-right scale-up">
                                                <ul className="dropdown-user">
                                                    <li role="separator" className="divider" />
                                                    <li>
                                                        <a href="#"><i className="fa fa-power-off" /> Logout</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </header>
                        <aside className="left-sidebar">
                            {/* Sidebar scroll*/}
                            <div className="scroll-sidebar">
                                <nav className="sidebar-nav">
                                    <ul id="sidebarnav">
                                        <li className="nav-devider" />
                                        <li>
                                            <Link replace to="/admin" style={{ backgroundColor: 'transparent' }} className="waves-effect waves-dark" aria-expanded="false"><i className="fa fa-dashboard" /><span className="hide-menu">Dashboard</span></Link>
                                        </li>
                                        <li>
                                            <Link replace to="/orders" style={{ backgroundColor: 'transparent' }} className="waves-effect waves-dark" aria-expanded="false"><i className="fa fa-shopping-cart" /><span className="hide-menu">Orders</span></Link>
                                        </li>
                                    </ul>
                                </nav>
                                {/* End Sidebar navigation */}
                            </div>
                            {/* End Sidebar scroll*/}
                        </aside>
                        <div className="page-wrapper">
                            <br />
                            <br />
                            <div className="container-fluid">
                                <div className="row">
                                    {/* Column */}
                                    <div className="col-lg-2" />
                                    <div className="col-lg-8">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="d-flex flex-wrap">
                                                            <div>
                                                                <h4 className="card-title">Yearly Earning</h4>
                                                            </div>
                                                            <div className="ml-auto">
                                                                <ul className="list-inline">
                                                                    <li>
                                                                        <h6 className="text-muted text-success">
                                                                            <i className="fa fa-circle font-10 m-r-10" />Sales
                            </h6>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div id="earning" style={{ height: 355 }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Column */}
                                </div>
                            </div>
                            <footer className="footer">
                                © 2020 Alrights Reserved
      </footer>
                            {/* ============================================================== */}
                            {/* End footer */}
                            {/* ============================================================== */}
                        </div>
                        {/* ============================================================== */}
                        {/* End Page wrapper  */}
                        {/* ============================================================== */}
                    </div>
                </div>

            </div>
        )
    }
}
export default AdminIndex