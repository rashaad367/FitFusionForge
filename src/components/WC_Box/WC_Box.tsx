import React from "react";
import "./WC_Box.css";

const WC_Box: React.FC = () => {
    return (<>
        <div className="box">
            <h1>Choose a split</h1>
            <ul>
                <li>Full body</li>
                <li>Upper / Lower</li>
                <li>Push pull legs</li>
                <li>Bro / Muscle</li>
            </ul>
            <a><h3>Enter</h3></a>
        </div>
            </>)
}

export default WC_Box;