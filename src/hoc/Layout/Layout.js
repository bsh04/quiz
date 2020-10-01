import React, {Component} from 'react';
import './layout.scss'
import Navbar from "../navbar"

class Layout extends Component {
    render() {
        return (
            <div className='layout'>
                <Navbar/>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;