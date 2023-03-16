import React from "react"
import PropTypes from "prop-types";
import styles from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map(name => (
                    <button
                        key={name}
                        type="button"
                        className={styles.button}
                        onClick={() => onLeaveFeedback(name)}>
                        {name}
                    </button>))}
        </div>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;


