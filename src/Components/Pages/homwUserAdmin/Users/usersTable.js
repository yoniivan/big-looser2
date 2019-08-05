import React from 'react';
import { Button } from 'react-bootstrap';

const UsersTable = (props) => {

    const Allusers = props.users.map((user, index) => {
        return (
            <tr key={index} >
                <td>{index + 1}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td><Button 
                    onClick={() => props.deleteRow(index)}
                    type="submit"
                    variant="primary">
                    Remove
                    </Button>
                </td>
            </tr>
            )
    })

    return(
        <tbody>    
            {Allusers}
        </tbody> 
        
    );
}

export default UsersTable;