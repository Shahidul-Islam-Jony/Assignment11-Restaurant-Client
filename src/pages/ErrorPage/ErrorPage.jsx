import { Link, useRouteError } from 'react-router-dom';
import errorImg from '../../assets/images/404.jpg'

const ErrorPage = () => {
    const error = useRouteError();
    // console.log(error);
    return (
        <div>
            {
                error?.status === 404 && <div className='text-center'>
                    <img src={errorImg} className='h-[450px] w-full' alt="" />
                    <p className='text-5xl font-bold text-center mt-4'>Page Not Found</p>
                    <Link className='btn btn-secondary mt-4 px-16' to='/'>Go Back</Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;