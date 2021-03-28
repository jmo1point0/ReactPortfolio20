import React from 'react';
import './style.css';

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Info</h1>
           

            <div className="social">
                <h4>LinkedIn</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jordan-mossing-84603b55/">
                    https://www.linkedin.com/in/jordan-mossing-84603b55/
                </a>
                </p>

                <h4>GitHub</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/jmo1point0">
                        https://github.com/jmo1point0
                </a>
                </p>

                <h4>Email</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:jordan.mossing@gmail.com">
                        jordan.mossing@gmail.com
                </a>
                </p>

            </div>
        </div>
    )
}

export default Contact;