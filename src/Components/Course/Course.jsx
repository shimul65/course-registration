import dollarSign from '../../assets/dollar-sign 1.svg';
import frame from '../../assets/frame.svg';
import PropTypes from 'prop-types';
const Course = ({course}) => {
    const {image ,title, description, price, credit} = course;
    return (
        <div className="w-full h-fit bg-white  rounded-lg p-4">
            <img className="h-2/3 pb-4 w-full" src={image} alt="course image" />
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="py-4 text-left">{description}</p>
            <div className="mb-6 flex md:flex-col lg:flex-row gap-4">
                <p className='flex gap-3'><img src={dollarSign} alt="" />Price : {price}</p>
                <p className='flex gap-3'><img src={frame} alt="" />Credit : {credit}hr</p>
            </div>
            <button className="bg-[#2F80ED] text-white py-2 w-full rounded-lg">Select</button>
        </div>
    );
};


Course.propTypes = {
    course: PropTypes.object.isRequired
}
export default Course;