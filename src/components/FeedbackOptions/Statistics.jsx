import React from "react"


const Statistics = ({good, neutral, bad, total, positivePercentage}) =>{
    return (
        <div>
            <h2>Statistics</h2>
            <div className="feedback__controls">
                <ul>
                    <li>
                        <span >
                            Good: {good}
                        </span>                        
                    </li>
                    <li>
                        <span >
                            Neutral: {neutral}
                        </span>                        
                    </li>
                    <li>
                        <span >
                            Bad: {bad}
                        </span>                        
                    </li>
                    <li>
                        <span >
                            Total: {total}
                        </span>                        
                    </li>
                    <li>
                        <span >
                            Positive feedback: {positivePercentage ? positivePercentage : 0}%
                        </span>                        
                    </li>
                </ul>                   
            </div>                
        </div>
    )
}

export default Statistics;