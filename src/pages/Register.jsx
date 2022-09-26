import AddAvatar from '../img/addAvatar.png'

const Register = () => {
  return (
    <div className="formContainer">
			<div className="formWrapper">
				<span className="logo">Learn Chat App</span>
				<span className="title">Register</span>
				<form action="">
					<input type="text" placeholder="display name" />
					<input type="email" placeholder="email" />
					<input type="password" placeholder="password"/>
					<input style={{display: "none"}} type="file" id="file" />
					<label htmlFor="file"> 
						<img src={AddAvatar} alt="input file" />
						<span>Add an avatar</span>
					</label>
					<button>Sign up</button>
				</form>
				<p>You have an accoutn? Login</p>
			</div>
    </div>
  )
}

export default Register
