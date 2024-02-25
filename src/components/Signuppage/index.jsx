import "./index.css";
const Signuppage = () => (
  <div className="create-account-container">
    <h1 className="heading">Create Account </h1>
    <img
      src="https://www.freepik.com/https://img.freepik.com/free-vector/man-with-shopping-car-business-coins_24877-53507.jpg?t=st=1708781513~exp=1708785113~hmac=008e4c175df238a11ebfa9bd7b54064054853a96b8f7766d056https://img.freepik.com/free-vector/man-with-shopping-car-business-coins_24877-53507.jpg?t=st=1708781513~exp=1708785113~hmac=008e4c175df238a11ebfa9bd7b54064054853a96b8f7766d056e18194bfcb6e5&w=740e18194bfcb6e5&w=740free-vector/man-with-shopping-car-business-coins_5674569.htm#fromView=search&page=1&position=15&uuid=e1892e02-2879-49d0-8a60-e5818437f72f"
      alt="shopping"
      className="shopping-image"
    />
    <input
      type="text"
      placeholder="Full Name"
      className="fullname-input-field"
    />
    <input type="text" placeholder="Phone" className="phone-input-field" />
    <input type="text" placeholder="Email" className="email-input-field" />
    <input
      type="text"
      placeholder="Password"
      className="password-input-field"
    />
    <button className="signup-button" type="submit">
      Signup
    </button>
  </div>
);

export default Signuppage;
