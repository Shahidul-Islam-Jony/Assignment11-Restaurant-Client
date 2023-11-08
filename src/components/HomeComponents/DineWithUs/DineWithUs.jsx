

const DineWithUs = () => {
    return (
        <div className="flex flex-col md:flex-row my-28">
            <div className="w-full md:w-1/2 md:border-r-4 md:border-r-green-500">
                <div className="px-10">
                    <h2 className="text-6xl text-green-800 font-medium font-serif mb-10">Dine With Us</h2>
                    <h4 className="text-3xl font-medium font-serif"><span className="text-pink-600 text-4xl">Food fantasia</span> <span className="text-green-800">is one of the biggest Online and Offline Resturant of Bangladesh.</span></h4>
                    <p className="my-10 border-b-2 border-green-500"></p>
                    <p className="text-2xl mb-10 font-serif text-green-800">The quality of our food and beverages are of the highest standard, our atmosphere is inclusive, with a feeling of family and togetherness, something synonymous with Bangladesh. <br /></p>
                    <p className="text-2xl mb-5 font-serif text-green-800">Our passion and commitment for delivering the highest quality dining experience is achieved through creating a unique blend of atmosphere and culinary delights. Bringing people together to enjoy the senses of taste, smell, sight and sound.</p>
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <div className="px-10">
                    <div className="mb-10">
                        <li className="text-3xl text-pink-600 font-medium font-serif">Opening Hours</li>
                        <p className="text-4xl lg:indent-16 text-green-700 mb-2">Thu - Friday</p>
                        <p className="text-3xl lg:indent-16 text-green-700 mb-8">10 am - 11 pm</p>
                        <p className="text-4xl lg:indent-16 text-green-700 mb-2">Sun - Monday</p>
                        <p className="text-3xl lg:indent-16 text-green-700 mb-5">9 am - 10 pm</p>
                    </div>
                    <div className="mb-10">
                        <li className="text-3xl text-pink-600 font-medium font-serif">Location</li>
                        <p className="text-4xl lg:indent-16 text-green-700 mb-2">BD. Rajshahi,</p>
                        <p className="text-3xl lg:indent-16 text-green-700 mb-5">Natore</p>
                    </div>
                    <div>
                        <li className="text-3xl text-pink-600 font-medium font-serif">Contact Us</li>
                        <p className="text-4xl lg:indent-16 text-green-700 mb-2">Phn: +880179494...</p>
                        <p className="text-3xl lg:indent-16 text-green-700 mb-2">Tel: +9127.....</p>
                        <p className="text-3xl lg:indent-16 text-green-700 mb-2">Email: user@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DineWithUs;