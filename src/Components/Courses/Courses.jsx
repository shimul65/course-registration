import { useState } from 'react';
import { useEffect } from 'react';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
import Swal from 'sweetalert2';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [selectCourse, setSelectCourse] = useState([]);
    const [totalCreditHour, setTotalCreditHour] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [remainingCreditHour, setRemainingCreditHour] = useState(20);

    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const handleSelectCourse = (course) => {
        const isExist = selectCourse.find(item => item.id === course.id);
        let totalCreditHour = course.credit;
        let totalPrice = course.price;
        if (isExist) {
            Swal.fire({
                title: `You have already select 
                this course`
            })
        }
        else {
            selectCourse.forEach(course => {
                totalCreditHour += course.credit;
                totalPrice += course.price;
            })
            const remainingCreditHour = 20 - totalCreditHour;
            if (totalCreditHour > 20) {
                Swal.fire({
                    icon: `error`,
                    title: `Oops...`,
                    text: `You don't have sufficient credit hour for 
                    select this course`
                })
            }
            else{
                const newSelectCourse = [...selectCourse, course];
                setSelectCourse(newSelectCourse);
                setTotalCreditHour(totalCreditHour);
                setTotalPrice(totalPrice);
                setRemainingCreditHour(remainingCreditHour);
            }
        }
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

            {/* Cart for selected course */}
            <div className="md:w-1/3 lg:w-1/4 w-full h-fit bg-white  rounded-lg mt-4 lg:mt-0 p-3 lg:p-6">
                <Cart
                    selectCourse={selectCourse}
                    totalCreditHour={totalCreditHour}
                    totalPrice={totalPrice}
                    remainingCreditHour={remainingCreditHour}
                ></Cart>
            </div>

        </div>
    );
};

export default Courses;