import { useState } from 'react';
import { useEffect } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='flex flex-col md:flex-row gap-5'>
            {/* Course Container */}
            <div className="md:w-2/3 lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-fit gap-4 p-4 lg:p-0 justify-items-center">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>

            <div className="md:w-1/3 lg:w-1/4 w-full h-fit bg-white  rounded-lg mt-4 lg:mt-0 p-3 lg:p-6">
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

export default Courses;