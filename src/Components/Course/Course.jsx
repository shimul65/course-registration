import dollarSign from '../../assets/dollar-sign 1.svg';
import frame from '../../assets/frame.svg';

const Course = () => {
    return (
        <div className='flex flex-col md:flex-row gap-5'>
            <div className="md:w-2/3 lg:w-3/4 border border-red-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 lg:p-0 justify-items-center">
                <div className="w-full h-fit border border-violet-700 bg-white  rounded-lg p-4">
                    <img className="h-2/3 pb-4 w-full" src="https://i.ibb.co/stzWT6w/rectangle2-3.png" alt="course image" />
                    <h3 className="text-lg font-semibold">Introduction to Algorithms</h3>
                    <p className="py-4 text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <div className="mb-6 flex md:flex-col lg:flex-row gap-4">
                        <p className='flex gap-3'><img src={dollarSign} alt="" />Price : 25000</p>
                        <p className='flex gap-3'><img src={frame} alt="" />Credit : 2hr</p>
                    </div>
                    <button className="bg-[#2F80ED] text-white py-2 w-full rounded-lg">Select</button>
                </div>

            </div>
            <div className="md:w-1/3 lg:w-1/4 w-full h-fit border border-violet-700 bg-white  rounded-lg mt-4 lg:mt-0 p-3 lg:p-6">
                <h3 className="text-base lg:text-lg font-bold text-[#2F80ED] mb-4">Credit Hour Remaining 7 hr</h3>
                <hr />
                <h2 className='text-xl font-bold my-4'>Course Name</h2>
                <p className="py-1 text-left">1.  Introduction to c programming</p>
                <p className="py-1 text-left">1.  Introduction to c programming</p>
                <p className="py-1 text-left">1.  Introduction to c programming</p>
                <hr className='mt-4' />
                <p className='my-4 text-lg font-semibold text-[#1C1B1BCC]'>Total Credit Hour : 13</p>
                <hr />
                <p className='mt-4 text-lg font-semibold text-[#1C1B1BCC]'>Total Price : 48000 USD</p>
            </div>

        </div>
    );
};

export default Course;