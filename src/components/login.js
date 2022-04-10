
import { Link , useNavigate} from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();

    const onLogin = (e) => {

        e.preventDefault();
        navigate("/home");
    }

    return(
        <div>
            <form>
                <div className='login'>
                    <header>Login</header>

                    <div className="form-elements">
                        <label for="username">Email</label> &nbsp;
                        <input type="email" name="email"></input>
                    </div>

                    <div className="form-elements">
                        <label for="password">Password</label> &nbsp;
                        <input type="password" name="password"></input>
                    </div>

                    <div className="form-elements" >
                        <input onClick={(e)=>onLogin(e)} id="form-btn" type="submit" value="Login"></input>
                    </div>
                </div>
            </form>
        </div>
    );   
}

export default Login;