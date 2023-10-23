import {useState} from 'react'
import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  const [id, setId] = useState('')
  const [pin, setPin] = useState('')
  const [msg, setMsg] = useState('')
  const {history} = props

  const login = async e => {
    e.preventDefault()
    const userDetails = {
      user_id: id,
      pin,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/ebank/login', options)
    if (response.ok) {
      const data = await response.json()
      Cookies.set('jwt_token', data.jwt_token, {
        expires: 30,
        path: '/',
      })
      history.replace('/')
    } else {
      const data = await response.json()
      setMsg(data.error_msg)
    }
  }

  return (
    <div className="main-container">
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
          alt="website login"
          className="website"
        />
        <div className="data-container">
          <h1>Welcome back</h1>
          <form className="login-form">
            <label htmlFor="i">User ID</label>

            <input
              type="text"
              className="input"
              id="i"
              placeholder="Enter User Id"
              onChange={e => setId(e.target.value)}
            />
            <label htmlFor="p">PIN</label>
            <input
              type="password"
              className="input"
              id="p"
              placeholder="Enter Pin"
              onChange={e => setPin(e.target.value)}
            />
            <button type="submit" className="button" onClick={login}>
              Login
            </button>
            <p>{msg}</p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
