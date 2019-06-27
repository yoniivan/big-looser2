import React from 'react';

const AdminWelcomePage = () => {

    let x = "abc";

    const y = x.charAt(0).toUpperCase() + x.slice(1);

    return(
        <div>
            <h1>{y}</h1>
        </div>
    );
}

export default AdminWelcomePage;