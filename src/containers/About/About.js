import React, {Component} from 'react';
import './About.scss'

class About extends Component {
    render() {
        return (
            <div className='about'>
                <div className='card'>
                    <p>
                        <strong>Hello!</strong>
                        <br/>
                        This service is collection of test items with ability to pass these tests and view
                        results.
                        <br/>
                        Technologies that were used to write this service: React, Redux, SAS.
                        <br/>
                        <br/>
                        My GitHub: https://github.com/bsh04
                    </p>
                </div>
            </div>
        );
    }
};

export default About;