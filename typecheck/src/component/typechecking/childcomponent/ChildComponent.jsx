import React from 'react'
import PropTypes from 'prop-types';
const ChildComponent = (props) => {
    return (
        <div>
            {/* for string  */}
            <h2>{props.name}</h2>

            {/* for age */}
            <h2>{props.age}</h2>

            {/* for Boolean */}
            <h2>{props.data ? 'data' : 'no data'}</h2>

            {/* for string or numn */}
            <h2>{props.strnum}</h2>

            {/* for Arra data */}
            {
                props.ary.map((val) => {

                    return (<li key={val}>{val}</li>)
                })
            }

            {/* for array of object */}

            {
                props.aryObj.map((val) => {

                    return (<li key={val.age}>{val.name}</li>)
                })
            }

            {/* function call */}
            <button onClick={props.onclick}>hello</button>

            {/* any value  */}
            {
                props.requiredAny
            }

            {/* enum for specific data */}
            {
                props.optionalEnum
            }
        </div>
    )
}

ChildComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    data: PropTypes.bool,
    strnum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ary: PropTypes.arrayOf(PropTypes.number),
    onclick: PropTypes.func.isRequired,
    aryObj: PropTypes.arrayOf(PropTypes.shape(
        {
            name: PropTypes.string,
            age: PropTypes.number
        }
    )),

    aryObj1: PropTypes.exact({
        name: PropTypes.string,
        quantity: PropTypes.number
    }),

    requiredAny: PropTypes.any.isRequired,
    optionalEnum: PropTypes.oneOf(['News', 'Photos']),
}

ChildComponent.defaultProps = {
    name: 'Stranger',
    age: 12,
    data: '',
    strnum: 'vishal',
    ary: [1, 2, 3, 5],
};

export default ChildComponent;