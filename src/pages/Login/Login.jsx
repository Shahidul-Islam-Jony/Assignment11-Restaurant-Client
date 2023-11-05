import { Link } from 'react-router-dom';
import loginimg from '../../assets/images/login.jpg'
import { FcGoogle } from 'react-icons/fc';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const { login, loginByGoogle } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);
        login(email, password)
            .then(result => {
                console.log(result);
                toast.success('Login Successful !', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch(error => {
                toast.error(`${error}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                return;
            })
    }

    const handleLoginByGoogle = () => {
        loginByGoogle()
            .then(result => {
                console.log(result);
                toast.success('Login Successful !', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch(error => {
                toast.error(`${error}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                return;
            })
    }

    return (
        <div className="mt-20">
            <div className="flex mx-auto flex-col gap-4 lg:flex-row md:px-4">
                <div className="w-full lg:w-1/2">
                    <img src={loginimg} className='' alt="" />
                </div>
                <div className='w-full lg:w-1/2'>
                    <h1 className="text-5xl font-bold mb-4 text-center">Login now!</h1>
                    <div className="rounded-lg w-full shadow-2xl bg-base-100 px-4 py-6">
                        <form onSubmit={handleLogin}>
                            <div>
                                <label className="label">
                                    <span className="text-xl font-medium">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input rounded-md w-full border-pink-600" required />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="text-xl font-medium">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input rounded-md w-full border-pink-600" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-secondary capitalize text-xl font-semibold' type="submit" value="Login" />
                            </div>
                            <div className='text-center mt-4'>
                                <p>Do not have account ? Please <Link to='/registration' className='font-medium hover:underline text-secondary ml-2'>Create an account</Link></p>
                            </div>
                        </form>
                        <div>
                            <div className="divider">OR</div>
                            <button onClick={handleLoginByGoogle} className='btn btn-outline w-full text-lg border-pink-600 capitalize'><FcGoogle className='text-3xl mr-4'></FcGoogle>Login With Google</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;