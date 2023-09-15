import { useState } from 'react';
import { useEffect } from 'react';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';

const Courses = () => {
    const [courses, setCourses] = useState([])
    const [selectCourse, setSelectCourse] = useState([])

    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const handleSelectCourse = (course) => {
        const newSelectCourse = [...selectCourse, course];
        setSelectCourse(newSelectCourse);
    }

    return (
        <div className='flex flex-col md:flex-row gap-5'>
            {/* Course Container */}
            <div className="md:w-2/3 lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-fit gap-4 p-4 lg:p-0 justify-items-center">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                        handleSelectCourse={handleSelectCourse}
                    ></Course>)
                }
            </div>

            <div className="md:w-1/3 lg:w-1/4 w-full h-fit bg-white  rounded-lg mt-4 lg:mt-0 p-3 lg:p-6">
                <Cart
                selectCourse={selectCourse}
                ></Cart>
            </div>

        </div>
    );
};

export default Courses;