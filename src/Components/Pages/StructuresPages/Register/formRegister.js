import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './Register.css';

const Forms = (props) => {
    return(
        <div>
            <div className="formInput">
                <InputGroup className="">
                    <FormControl
                        placeholder="First name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={props.firstName}
                        onChange={props.nameChange}
                        />
                </InputGroup>
                    <span className={props.FNshow}>
                        {props.errorFirstName}
                    </span>

            </div>
            <div className="formInput">
            <InputGroup>
                <FormControl
                    placeholder="Last name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={props.lastName}
                    onChange={props.lnChange}
                    />
            </InputGroup>
                <span className={props.LNshow}>
                    {props.errorLastName}
                </span>
            </div>
            <div className="formInput">
            <InputGroup>
                <FormControl
                    placeholder="Email"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={props.email}
                    onChange={props.emailChange}
                        />
                </InputGroup>
                <span className={props.EMshow}>
                    {props.errorEmail}
                </span>
            </div>
            <div className="formInput">
            <InputGroup>
                <FormControl
                    placeholder="Password"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={props.password}
                    onChange={props.passwordChange}
                        />
                </InputGroup>
                <span className={props.Pshow}>
                    {props.errorPassword}
                </span>
            </div>
            <div className="formInput">
            <InputGroup className="">
                <FormControl
                    placeholder="Confirm password"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={props.cPassword}
                    onChange={props.cPasswordChange}
                        />
                </InputGroup>
                <span className={props.CPshow}>
                    {props.errorCpassword}
                </span>
            </div>
        </div>
    );
}

export default Forms