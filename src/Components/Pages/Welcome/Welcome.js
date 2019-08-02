import React, { Component } from 'react';
import './Welcome2.css';

class Welcome extends Component {

    registerHandler = () => {
        this.props.history.push('register');
    }

    render(){
        return(
            <div className="wrapper-welcome">
                <header className="header">
                    <div className="text-box">
                        <h1 className="heading-primary">
                            <span className="heading-primary-main">Big looser</span>
                            <span className="heading-primary-sub">Compite your beting skills</span>
                        </h1>
                    </div>
                </header>

                <main className="main-exp">
                    
                    <div className="main-exp boxes first-box">
                        <span className="fa fa-money"></span>
                        <h2 className="main-exp title-box">Coast</h2>
                        <h2 className="main-exp text">This platform is free of coast and all functions are free, also the betting is free and no money is involved in this platform.</h2>
                    </div>

                    <div className="main-exp boxes second-box">
                        <span className="fa fa-soccer-ball-o"></span>
                        <h2 className="main-exp title-box">Purpouse</h2>
                        <h2 className="main-exp text">This platform is built in order to provide a quality platform of orginizing freindly betting tournament.</h2>
                    </div>

                    <div className="main-exp boxes third-box">
                        <span className="fa fa-cog"></span>
                        <h2 className="main-exp title-box">Easy to use</h2>
                        <h2 className="main-exp text">This platform is very easy to use smooth and very responsive and give a lot of manegment options.</h2>
                    </div>
                </main>
            </div>
        );
    }
}

export default Welcome;