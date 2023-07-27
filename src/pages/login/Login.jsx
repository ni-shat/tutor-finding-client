import React from 'react';

const Login = () => {

  const func = (event) => {
    console.log(event.target)
  }


  return (
    <div>
      <form className='mt-40' >
        <label htmlFor="">name</label>
        <input className='border-2' onChange={func} type="text" name="" id="" />
      </form>
    </div>
  );
};

export default Login;