import React from 'react';
import './Welcome.css';
import { Col, Card, Form, Button, FormControl, InputGroup } from 'react-bootstrap';

const Welcome = () => {
    return(
        <div className="wrapper-welcome">
            <div className="weclocme-1">
                <h2 className="welcome-title">Rather than generating fancy fonts, this converter creates</h2>
                <p className="welcome-text">So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to change the font of your text? Is it some sort of hack? Are you copying and pasting an actual font?</p>
            </div>
            <div className="weclocme-2">
                <p>So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to change the font of your text? Is it some sort of hack? Are you copying and pasting an actual font?</p>
            </div>
            <div className="weclocme-3">
                <p>So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to change the font of your text? Is it some sort of hack? Are you copying and pasting an actual font?</p>
            </div>
        
        </div>
    );
}

export default Welcome;