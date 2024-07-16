import './css.css';
import PropTypes from 'prop-types'

function Student({ name = "Unknown", age = 0, isStudent = false }){
    return(
        <div className="users">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>  
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

export default Student