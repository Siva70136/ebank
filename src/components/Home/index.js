import Cookies from 'js-cookie'
import './index.css'

const Home = props => {
  const {history} = props

  const logout = () => {
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <div className="container">
      <div className="navbar-container">
        <div className="navbar">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
              alt="website logo"
              className="logo"
            />
          </div>
          <div className="">
            <button type="button" className="button" onClick={logout}>
              LogOut
            </button>
          </div>
        </div>
      </div>
      <div className="m-container">
        <h1>Your Flexibility, Our Excellence</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
          className="digital-card"
        />
      </div>
    </div>
  )
}

export default Home
