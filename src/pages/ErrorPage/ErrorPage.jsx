import { Link, useRouteError } from 'react-router-dom';
import errorImg from '../../assets/images/404.jpg'
import { HelmetProvider } from 'react-helmet-async';
import DynamicTitle from '../../components/sharedComponents/DynamicTitle';

const ErrorPage = () => {
    const error = useRouteError();
    // console.log(error);
    return (
        <HelmetProvider>
            <DynamicTitle title='Error-Page'></DynamicTitle>
            {
                error?.status === 404 && <div className='text-center relative'>
                    <img src={errorImg} className=' h-screen w-full' alt="" />
                    <div className='absolute bottom-16 right-1/3'>
                        <p className='text-5xl font-bold text-center mt-4'>Page Not Found</p>
                        <Link className='btn btn-secondary mt-4 px-16' to='/'>Go Back to home</Link>
                    </div>
                </div>
            }
        </HelmetProvider>
    );
};

export default ErrorPage;