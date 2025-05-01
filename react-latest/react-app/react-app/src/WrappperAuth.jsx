import React, {useState} from 'react';

function WrappperAuth(WrappedComponent){
    // const [login,setLogin] = useState(false);

const login = false

  return (props) => {
    const isAuthenticated = props.isAuthenticated;

    if (login) {
      return <button >Please log in to view this content.</button>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default WrappperAuth;