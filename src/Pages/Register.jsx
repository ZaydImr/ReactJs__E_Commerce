import React, { useState } from 'react';
import MiniFooter from '../Components/MiniFooter'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../Assets/Logo-website.png'
import axios from 'axios'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Register = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false);

  const navigate = useNavigate();

  const handleRegister = () => {

    axios.post(`${process.env.BACK_URL}/register`, { username, password, email });
  };

  const signUpSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email !').required('Required !'),
    username: Yup.string().min(7, 'To short !').max(20, 'To long !').required('Required !'),
    password: Yup.string().min(8, 'To short !').max(35, 'To long !').required('Required !')
  })

  return (
    <>
      <main>
        <section className="absolute w-full h-full">
          <div
            className="absolute top-0 w-full h-full bg-gray-900"
            style={{
              backgroundImage:
                "url(./register_bg_2.png)",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat"
            }}
          ></div>
                <div className="container mx-auto px-4 h-full">
                  <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-gray-300 border-0">
                        <button className="hover:text-teal-600" onClick={()=>navigate(-1)}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="mt-4 ml-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                          </svg>
                        </button>
                        <div className="flex justify-center rounded-t mb-0 px-6 py-6">
                          <img className="w-28" src={Logo} alt="" />
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <Formik
                          initialValues={{
                            email: '',
                            username: '',
                            password: ''
                          }}
                          validationSchema={signUpSchema}
                          onSubmit={values=>{
                            console.log(values);
                          }}
                        >
                        {formik => (
                          <Form>
                            {console.log(formik)}
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Email
                              </label>
                              <input
                                value={email}
                                onChange={e=>setEmail(e.target.value)}
                                type="email"
                                className="border-0 border-red-500 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                placeholder="Email"
                                style={{ transition: "all .15s ease" }}
                              />
                            </div>

                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Username
                              </label>
                              <input
                                value={username}
                                onChange={e=>setUsername(e.target.value)}
                                type="text"
                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                placeholder="Username"
                                style={{ transition: "all .15s ease" }}
                              />
                            </div>

                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Password
                              </label>
                              <input
                                value={password}
                                onChange={e=>setPassword(e.target.value)}
                                type="password"
                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                placeholder="Password"
                                style={{ transition: "all .15s ease" }}
                              />
                            </div>
                            <div>
                              <label className="inline-flex items-center cursor-pointer">
                                <input
                                  value={check}
                                  onChange={e=>setCheck(e.target.value)}
                                  id="customCheckLogin"
                                  type="checkbox"
                                  className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                                  style={{ transition: "all .15s ease" }}
                                />
                                <span className="ml-2 text-sm font-semibold text-gray-700">
                                  I agree to User Agreement .
                                </span>
                              </label>
                            </div>

                            <div className="text-center mt-6">
                              <button
                                type="submit"
                                className="bg-gray-900 text-white active:bg-gray-700 hover:bg-teal-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                style={{ transition: "all .15s ease" }}
                              >
                                Register
                              </button>
                            </div>
                          </Form>
                          )}
          </Formik>
                          <div className="w-full flex flex-col text-center mt-2">
                            <Link to="/login">
                              Already have an account ! <strong className='text-teal-600 hover:text-teal-700'>Login .</strong> 
                            </Link>
                          </div>  
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          <MiniFooter absolute="true" />
        </section>
      </main>
    </>
  );
};

export default Register;
