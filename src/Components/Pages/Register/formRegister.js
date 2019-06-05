import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

const Forms = (props) => {
    return(
        <div>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="First name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={props.firstName}
                    onChange={props.nameChange}
                    />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Last name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={props.lastName}
                    onChange={props.lnChange}
                    />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Email"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={props.email}
                    onChange={props.emailChange}
                     />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Password"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={props.password}
                    onChange={props.passwordChange}
                    />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Confirm password"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={props.cPassword}
                    onChange={props.cPasswordChange}
                    />
            </InputGroup>
        </div>
    );
}

export default Forms