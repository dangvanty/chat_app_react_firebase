import AddAvatar from '../img/addAvatar.png'

const Login = () => {
  return (
    <div className="formContainer">
			<div className="formWrapper">
				<span className="logo">Learn Chat App</span>
				<span className="title"> Login </span>
				<form action="">
					<input type="email" placeholder="email" />
					<input type="password" placeholder="password"/>
					<button>Login</button>
				</form>
				<p>You dont't have an accoutn? Register</p>
			</div>
    </div>
  )
}

export default Login
