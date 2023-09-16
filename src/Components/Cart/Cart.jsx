import PropTypes from 'prop-types';
const Cart = ({ selectCourse ,totalCreditHour,totalPrice,remainingCreditHour}) => {
    return (
        <div className='pl-4 lg:pl-0'>
            <h3 className="text-base lg:text-lg font-bold text-[#2F80ED] mb-4">Credit Hour Remaining {remainingCreditHour} hr</h3>
            <hr />
            <h2 className='text-xl font-bold my-4'>Course Name</h2>
            {
                selectCourse.map((course, idx) => (
                    <p key={course.id} className="py-1 text-left">{idx + 1}.  {course.title}</p>
                ))
            }
            <hr className='mt-4' />
            <p className='my-4 text-lg font-semibold text-[#1C1B1BCC]'>Total Credit Hour : {totalCreditHour}</p>
            <hr />
            <p className='mt-4 text-lg font-semibold text-[#1C1B1BCC]'>Total Price : {totalPrice} USD</p>
        </div>
    );
};

Cart.propTypes = {
    selectCourse: PropTypes.array.isRequired,
    totalCreditHour: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    remainingCreditHour: PropTypes.number.isRequired
}
export default Cart;