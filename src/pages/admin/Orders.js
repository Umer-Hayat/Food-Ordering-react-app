import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Orders extends Component {

    componentDidMount() {

        var script = document.createElement('script')
        script.src = '../../../assets/admin/assets/js/custom.min.js'
        script.class = "external-script"
        document.body.appendChild(script);
    }


    render() {
        return (
            <div>
                <div className="fix-header card-no-border">
                    <div className="preloader">
                        <svg className="circular" viewBox="25 25 50 50">
                            <circle className="path" cx={50} cy={50} r={20} fill="none" strokeWidth={2} strokeMiterlimit={10} />
                        </svg>
                    </div>
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
                                            <a className="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark" href="#"><i className="fa fa-bars" /></a>
                                        </li>
                                        <li className="nav-item m-l-10">
                                            <a className="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark" href="#"><i className="fa fa-bars" /></a>
                                        </li>
                                    </ul>
                                    <ul className="navbar-nav my-lg-0">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="assets/admin/assets/images/users/1.jpg" alt="user" className="profile-pic" /></a>
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
                                            <Link to="/admin" style={{ backgroundColor: 'transparent' }} className="waves-effect waves-dark" aria-expanded="false"><i className="fa fa-dashboard" /><span className="hide-menu">Dashboard</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/orders" style={{ backgroundColor: 'transparent' }} className="waves-effect waves-dark" aria-expanded="false"><i className="fa fa-shopping-cart" /><span className="hide-menu">Orders</span></Link>
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
                                    {/* column */}
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">Orders</h4>
                                                <hr />
                                                <div className="table-responsive">
                                                    <div className="modal" id="editOrder">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                {/* Modal Header */}
                                                                <div className="modal-header">
                                                                    <h4 className="modal-title ml-auto">Edit Order</h4>
                                                                    <button type="button" className="close" data-dismiss="modal">×</button>
                                                                </div>
                                                                {/* Modal body */}
                                                                <div className="modal-body">
                                                                    <form action="dashboard.html" />
                                                                    <div className="form-group">
                                                                        <input type="date" className="form-control" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <input type="number" placeholder="Amount" className="form-control" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <input type="number" placeholder="Quantity" className="form-control" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <select className="form-control">
                                                                            <option value>Change Order Status</option>
                                                                            <option value>Completed</option>
                                                                            <option value>Processing</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="form-group offset-md-4">
                                                                        <input type="submit" className="btn btn-success mx-auto" defaultValue="Update Order" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div><table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Or. No.</th>
                                                                <th>Due Amount</th>
                                                                <th>Quantity</th>
                                                                <th>Status</th>
                                                                <th className="text-nowrap">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>$10.00</td>
                                                                <td>1</td>
                                                                <td>
                                                                    <div className="label label-table label-success">
                                                                        Completed
                          </div>
                                                                </td>
                                                                <td className="text-nowrap">
                                                                    <a href="#" data-original-title="Edit" data-toggle="modal" data-target="#editOrder">
                                                                        <i className="fa fa-pencil text-inverse m-r-10" />
                                                                    </a>
                                                                    <a href="#" data-toggle="tooltip" data-original-title="Close">
                                                                        <i className="fa fa-close text-danger" />
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>$20.00</td>
                                                                <td>4</td>
                                                                <td>
                                                                    <div className="label label-table label-warning">
                                                                        Order Placed
                          </div>
                                                                </td>
                                                                <td className="text-nowrap">
                                                                    <a href="#" data-original-title="Edit" data-toggle="modal" data-target="#editOrder">
                                                                        <i className="fa fa-pencil text-inverse m-r-10" />
                                                                    </a>
                                                                    <a href="#" data-toggle="tooltip" data-original-title="Close">
                                                                        <i className="fa fa-close text-danger" />
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>$15.00</td>
                                                                <td>2</td>
                                                                <td>
                                                                    <div className="label label-table label-primary">
                                                                        Delieved
                          </div>
                                                                </td>
                                                                <td className="text-nowrap">
                                                                    <a href="#" data-original-title="Edit" data-toggle="modal" data-target="#editOrder">
                                                                        <i className="fa fa-pencil text-inverse m-r-10" />
                                                                    </a>
                                                                    <a href="#" data-toggle="tooltip" data-original-title="Close">
                                                                        <i className="fa fa-close text-danger" />
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            {/* Edit Order Starts */}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <footer className="footer">
                                © 2020 Alrights Reserved
      </footer>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Orders