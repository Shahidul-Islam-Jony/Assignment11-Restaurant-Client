import { Link } from "react-router-dom";

const Registration = () => {
    return (
        <div className="mt-20 text-center">
            <div className="flex mx-auto flex-col gap-4 md:flex-row md:px-4">
                <div className='w-1/2 mx-auto'>
                    <h1 className="text-5xl font-bold mb-4">Register now!</h1>
                    <div className="rounded-lg w-full shadow-2xl bg-base-100 px-4 py-6">
                        <form >
                            <div>
                                <label className="label">
                                    <span className="text-xl font-medium">Name</span>
                                </label>
                                <input type="text" placeholder="Your name" className="input rounded-md w-full border-pink-600" required />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="text-xl font-medium">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input rounded-md w-full border-pink-600" required />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="text-xl font-medium">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Please give your photo url" className="input rounded-md w-full border-pink-600" required />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="text-xl font-medium">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input rounded-md w-full border-pink-600" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-secondary capitalize text-xl font-semibold' type="submit" value="Register" />
                            </div>
                            <div className='text-center mt-4'>
                                <p>Already have account ? Please <Link to='/login' className='font-medium hover:underline text-secondary ml-2'>Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;