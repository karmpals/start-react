import "./login.scss";

const Login = () => {
    
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
        </div>
      </div>
      <div className="container">
        <form action="">
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
        </form>
      </div>
    </div>
  )
}

export default Login
