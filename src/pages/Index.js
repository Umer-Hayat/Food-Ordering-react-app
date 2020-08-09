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
                            <table className="table table-striped">
                                <tbody><tr>
                                    <th>ITEM</th>
                                    <th>PRICE</th>
                                    <th>QUANTITY</th>
                                </tr>
                                    <tr>
                                        <td>
                                            <img className="cart-item-image" src="assets/img/1.jpg" width={100} height={100} />
                                            <span className="cart-item-title">Item 1 Title</span>
                                        </td>
                                        <td><span className="cart-price">$2</span></td>
                                        <td>
                                            <input className="cart-quantity-input" type="number" defaultValue={1} />
                                            <button className="btn btn-danger" type="button">REMOVE</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="cart-item-image" src="assets/img/2.jpg" width={100} height={100} />
                                            <span className="cart-item-title">Item 2 Title</span>
                                        </td>
                                        <td><span className="cart-price">$4</span></td>
                                        <td>
                                            <input className="cart-quantity-input" type="number" defaultValue={1} />
                                            <button className="btn btn-danger" type="button">REMOVE</button>
                                        </td>
                                    </tr>
                                </tbody></table>
                        </div>
                        <div className="cart-items" />
                        <div className="cart-total">
                            <strong className="cart-total-title">Total</strong>
                            <span className="cart-total-price">$6</span>
                        </div>
                        <button className="btn btn-primary btn-purchase" type="button">
                            Checkout
    </button>
                    </section>
                    {/* View cart ends */}
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
                                        <label htmlFor="card-no">Address</label>
                                        <input type="text" className="form-control" name="address" required placeholder="Adress*" data-form-field="Card no" />
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="Expiration">Contact No</label>
                                            <input type="number" className="form-control" name="number" placeholder="Contact No" data-form-field="Expire" />
                                        </div>
                                    </div>
                                    <article className="card">
                                        <div className="card-body p-5">
                                            <ul className="nav bg-light nav-pills rounded nav-fill mb-3" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" data-toggle="pill" href="#nav-tab-card">
                                                        <i className="fa fa-credit-card" /> Master Card</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="pill" href="#nav-tab-card">
                                                        <i className="fa fa-credit-card" /> Visa Card</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="pill" href="#nav-tab-card">
                                                        <i className="fa fa-credit-card" /> American Express</a>
                                                </li>
                                            </ul>
                                            <div className="tab-content">
                                                <div className="tab-pane fade show active" id="nav-tab-card">
                                                    <p className="alert alert-success">
                                                        Some text success or error
                  </p>
                                                    {/* form-group.// */}
                                                    <div className="form-group">
                                                        <label htmlFor="cardNumber">Card number</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" name="cardNumber" placeholder />
                                                            <div className="input-group-append">
                                                                <span className="input-group-text text-muted">
                                                                    <i className="fa fa-cc-visa" />
                                                                    <i className="fa fa-cc-amex" />
                                                                    <i className="fa fa-cc-mastercard" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* form-group.// */}
                                                    <div className="row">
                                                        <div className="col-sm-8">
                                                            <div className="form-group">
                                                                <label><span className="hidden-xs">Expiration</span>
                                                                </label>
                                                                <div className="input-group">
                                                                    <input type="number" className="form-control" placeholder="MM" name />
                                                                    <input type="number" className="form-control" placeholder="YY" name />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <div className="form-group">
                                                                <label data-toggle="tooltip" title data-original-title="3 digits code on back side of the card">CVV <i className="fa fa-question-circle" /></label>
                                                                <input type="number" className="form-control" required />
                                                            </div>
                                                            {/* form-group.// */}
                                                        </div>
                                                    </div>
                                                    {/* row.// */}
                                                    <button className="subscribe btn btn-primary btn-block" type="button">
                                                        Confirm
                  </button>
                                                </div>
                                                {/* tab-pane.// */}
                                            </div>
                                            {/* tab-content .// */}
                                        </div>
                                        {/* card-body.// */}
                                    </article></form>
                                {/* <div class="text-right">
        <button
          type="button"
          class="btn btn-lg btn-primary"
          onclick="alert('Order has been placed successfully...')"
        >
          Confirm Payment
        </button>
      </div> */}
                                {/* card.// */}
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
                    {/* Footer Ends */}
                    {/* Notification start */}
                    <section className="notifi">
                        <div className="noti-box" id="noti-box">
                            <div className="row">
                                <div className="col-xs-6">
                                    <h5>Order No#</h5>
                                    <h5>Order Status#</h5>
                                </div>
                                <div className="col-xs-6">
                                    <p>121221243</p>
                                    <p>processing</p>
                                </div>
                            </div>
                        </div>
                        <i className="fa fa-bell" id="bell"><span className="badge badge-info">2</span>
                        </i>
                    </section>
                </div>

            </div>
        )
    }
}
export default Index