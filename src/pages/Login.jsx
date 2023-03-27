import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import nextlogo from '../assets/nextlogo.svg';

const Login = () => {

    const {register, handleSubmit}=useForm();
    const navigate = useNavigate();
    const submit =(data)=>{
        axios.post('https://e-commerce-api.academlo.tech/api/v1/users/login', data)
        .then(res=>{navigate("/")
     
        localStorage.setItem("token", res.data.data.token)})
        .catch(error=>
            {if(error.response?.status===404){
                alert('you didnt put the right credentials ')
            }else{
                console.log(error.response?.data);
            }});
        };

    return (
        <div className='container_login' style={{display:'flex',flexDirection:'column',backgroundColor:'blue', justifyContent:'center', alignItems:'center', height:'100vh'}}>
          <img style={{height:'150px'}} src={nextlogo} alt="logo" />
      <h1 style={{textAlign:'center',color:'rgba(29, 69, 139, 0.8)'}}>welcome, we are glad you are back!</h1><br />
    <Form style={{width:'600px'}} onSubmit={handleSubmit(submit)}>
          <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <Form.Group style={{width:'350px'}} className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter the official email" {...register("email")}  />
        <Form.Text className="text-muted">

         We'll never share your email with anyone else.
         
        </Form.Text>
      </Form.Group>

      <Form.Group style={{width:'350px'}} className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...register("password")} />
        <Form.Text className="text-muted">

          Please put your password.

        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      {/* <Button >
        Demo mode
      </Button> */}
      </div>
    </Form>
        </div>
    );
};

export default Login;