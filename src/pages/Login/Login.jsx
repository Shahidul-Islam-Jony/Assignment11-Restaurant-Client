import { Link } from 'react-router-dom';
import login from '../../assets/images/login.jpg'
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    return (
        <div className="mt-20">
            <div className="flex mx-auto flex-col gap-4 md:flex-row md:px-4">
                <div className="w-1/2">
                    <img src={login} className='' alt="" />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold mb-4 text-center">Login now!</h1>
                    <div className="rounded-lg w-full shadow-2xl bg-base-100 px-4 py-6">
                        <form >
                            <div>
                                <label className="label">
                                    <span className="text-xl font-medium">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input rounded-md w-full border-pink-600" required />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="text-xl font-medium">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input rounded-md w-full border-pink-600" required />
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
                            <button className='btn btn-outline w-full text-lg border-pink-600 capitalize'><FcGoogle className='text-3xl mr-4'></FcGoogle>Login With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;