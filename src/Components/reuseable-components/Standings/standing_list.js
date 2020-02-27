import React from 'react';

const standingsList = (props) => {

    const Allusers = props.standings.map((user, index) => {
        return (
            <tr key={index}>
                {/* <td>{index + 1}</td>
                {/* <td>{user.firstName}</td>
                <td>{user.lastName}</td> */} */}
            </tr>
            )
    })

    return(
        <tbody>    
            {Allusers}
        </tbody> 
        
    );
}

export default standingsList;