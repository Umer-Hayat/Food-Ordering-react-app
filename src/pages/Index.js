import React, { Component } from 'react';

class Index extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* Navbar Starts */}
                    <nav className="navbar navbar-expand-md bg-warning navbar-dark">
                        <div className="container">
                            <a className="navbar-brand" href="#">Logo</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                <ul className="nav navbar-nav float-lg-right">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#shop-items">Shop</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#view-cart">Cart</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#my-account">My Account</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#checkout">Checkout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* Navbar Ends */}
                    {/* Carousel Starts */}
                    <div className="container">
                        <div id="demo" className="carousel slide my-3" data-ride="carousel">
                            <ul className="carousel-indicators">
                                <li data-target="#demo" data-slide-to={0} className="active" />
                                <li data-target="#demo" data-slide-to={1} />
                                <li data-target="#demo" data-slide-to={2} />
                            </ul>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="assets/img/1.jpg" alt="Los Angeles" />
                                    <div className="carousel-caption">
                                        <h3>Item 1</h3>
                                        <p>We have such an amazing food!</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="assets/img/2.jpg" alt="Chicago" />
                                    <div className="carousel-caption">
                                        <h3>Item 2</h3>
                                        <p>We have such an amazing food!</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="assets/img/3.jpg" alt="New York" />
                                    <div className="carousel-caption">
                                        <h3>Item 3</h3>
                                        <p>We have such an amazing food!</p>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                <span className="carousel-control-prev-icon" />
                            </a>
                            <a className="carousel-control-next" href="#demo" data-slide="next">
                                <span className="carousel-control-next-icon" />
                            </a>
                        </div>
                    </div>
                    {/* Carousel Ends */}
                    {/* Order Items Starts */}
                    <div className="container" id="shop-items">
                        <h3 className="my-4 text-center">You can order anything listed below</h3>
                        <div className="row my-4">
                            <div className="col-md-4">
                                <div className="card">
                                    <img className="card-img-top shop-item-image" src="assets/img/1.jpg" alt="Card image" style={{ width: '100%' }} />
                                    <div className="card-body">
                                        <h4 className="card-title text-center shop-item-title">
                                            Item 1 Title
            </h4>
                                        <p className="card-text text-center">
                                            Price:<span className="shop-item-price">$2.00</span>
                                        </p>
                                        <button type="button" className="btn btn-primary btn-block shop-item-button">
                                            Add to Cart
            </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <img className="card-img-top shop-item-image" src="assets/img/4.jpg" alt="Card image" style={{ width: '100%' }} />
                                    <div className="card-body">
                                        <h4 className="card-title text-center shop-item-title">
                                            Item 2 Title
            </h4>
                                        <p className="card-text text-center">
                                            Price:<span className="shop-item-price">$4.00</span>
                                        </p>
                                        <button type="button" className="btn btn-primary btn-block shop-item-button">
                                            Add to Cart
            </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <img className="card-img-top shop-item-image" src="assets/img/5.jpg" alt="Card image" style={{ width: '100%' }} />
                                    <div className="card-body">
                                        <h4 className="card-title text-center shop-item-title">
                                            Item 3 Title
            </h4>
                                        <p className="card-text text-center">
                                            Price:<span className="shop-item-price">$6.00</span>
                                        </p>
                                        <button type="button" className="btn btn-primary btn-block shop-item-button">
                                            Add to Cart
            </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <img className="card-img-top shop-item-image" src="assets/img/6.jpg" alt="Card image" style={{ width: '100%' }} />
                                    <div className="card-body">
                                        <h4 className="card-title text-center shop-item-title">
                                            Item 4 Title
            </h4>
                                        <p className="card-text text-center">
                                            Price:<span className="shop-item-price">$8.00</span>
                                        </p>
                                        <a href="#" className="btn btn-primary btn-block shop-item-button shop-item-button">Order Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <img className="card-img-top shop-item-image" src="assets/img/7.jpg" alt="Card image" style={{ width: '100%' }} />
                                    <div className="card-body">
                                        <h4 className="card-title text-center shop-item-title">
                                            Item 5 Title
            </h4>
                                        <p className="card-text text-center">
                                            Price:<span className="shop-item-price">$10.00</span>
                                        </p>
                                        <button type="button" className="btn btn-primary btn-block shop-item-button">
                                            Add to Cart
            </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <img className="card-img-top shop-item-image" src="assets/img/8.jpg" alt="Card image" style={{ width: '100%' }} />
                                    <div className="card-body">
                                        <h4 className="card-title text-center shop-item-title">
                                            Item 6 Title
            </h4>
                                        <p className="card-text text-center">
                                            Price:<span className="shop-item-price">$12.00</span>
                                        </p>
                                        <button type="button" className="btn btn-primary btn-block shop-item-button">
                                            Add to Cart
            </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Shop Item Ends */}
                    {/* View Cart Starts */}
                    <section className="container content-section" id="view-cart">
                        <h3 className="my-4 text-center">View Cart</h3>
                        <div className="cart-row">
                            <span className="cart-item cart-header cart-column">ITEM</span>
                            <span className="cart-price cart-header cart-column">PRICE</span>
                            <span className="cart-quantity cart-header cart-column">QUANTITY</span>
                        </div>
                        <div className="cart-items" />
                        <div className="cart-total">
                            <strong className="cart-total-title">Total</strong>
                            <span className="cart-total-price">$0</span>
                        </div>
                        <button className="btn btn-primary btn-purchase" type="button">
                            Checkout
    </button>
                    </section>
                    {/* View cart ends */}
                    {/* My Account Starts */}
                    <section className="container" id="my-account">
                        {/* My Account Ends */}
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="my-4 text-center">My Orders</h3>
                                <div className="table-resposive">
                                    <table className="table table-striped">
                                        <tbody><tr>
                                            <th>Or. No</th>
                                            <th>Due Amount</th>
                                            <th>Quantity</th>
                                            <th>Order Status</th>
                                        </tr>
                                            <tr>
                                                <td>1.</td>
                                                <td>$20.00</td>
                                                <td>2</td>
                                                <td className="text-success">Success</td>
                                            </tr>
                                            <tr>
                                                <td>2.</td>
                                                <td>$8.00</td>
                                                <td>1</td>
                                                <td className="text-primary">Processing</td>
                                            </tr>
                                            <tr>
                                                <td>3.</td>
                                                <td>$24.00</td>
                                                <td>2</td>
                                                <td className="text-danger">Cancelled</td>
                                            </tr>
                                        </tbody></table>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* My Account Ends */}
                    {/* Checkout Us Starts */}
                    <section className="container" id="payment">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <h3 className="my-4 text-center">Checkout</h3>
                                <form action="index.html" method="post" data-form-title="CHECKOUT">
                                    <div className="form-group">
                                        <label htmlFor="name">Name on Card</label>
                                        <input type="text" className="form-control" name="name" required placeholder="Name*" data-form-field="Name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="card-no">Card Number</label>
                                        <input type="email" className="form-control" name="number" required placeholder="Card Number*" data-form-field="Card no" />
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="Expiration">Expiry Date</label>
                                            <input type="text" className="form-control" name="expire" placeholder="Expire date mm/yy" data-form-field="Expire" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="cvv">CVV</label>
                                            <input type="number" className="form-control" name="cvv" placeholder="CVV three digit code" data-form-field="CVV" />
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <button type="button" className="btn btn-lg btn-primary" onclick="alert('Order has been placed successfully...')">
                                            Confirm Payment
            </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                    {/* Checkout Ends */}
                    {/* Footer Starts */}
                    <footer className="bg-dark text-center p-3 my-3 text-light">
                        <div className="container">
                            <p>© Copyright All right reserved example.com 2020</p>
                        </div>
                    </footer>
                </div>

            </div>
        )
    }
}
export default Index