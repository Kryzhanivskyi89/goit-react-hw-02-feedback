// import PropTypes from "prop-types";

import React from "react"


const FeedbackOptions = ({options, onLeaveFeedback}) =>{
    console.log(options)
    return (
            <div>
                <h2>Please Leave feedback</h2>
                                
            <div className="feedback__controls">
                <ul>
                    <li>
                        {options.map((option, index)  => (
                            <button
                                key={index}
                                type="button"
                                onClick={onLeaveFeedback}>
                            {option}
                            </button>))}
                    </li>
                </ul>                   
            </div>
                
        </div>
        )
}

export default FeedbackOptions;


