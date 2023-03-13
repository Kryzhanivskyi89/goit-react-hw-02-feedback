// import PropTypes from "prop-types";

import React from "react"

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div>
            <h2>Please Leave feedback</h2>                                
            <div className="feedback__controls">
                {options.map(name => (
                    <button
                        key={name}
                        type="button"
                        onClick={() => onLeaveFeedback(name)}>
                    {name}
                    </button>))}              
            </div>                
        </div>
    )
}

export default FeedbackOptions;


