import React from 'react';
import HeaderCommon from './HeaderCommon';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { signinvalid } from '../utilities/Validation';
import {auth} from '../utilities/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import './SignIn.css';
import { addUser } from '../utilities/userSlice';
import lang from '../utilities/language';
import { useSelector } from 'react-redux';

const SignIn = () => {
  const navigate = useNavigate();
  const ln = useSelector((store) => store.language.lang);
  const email = useRef(null);
  const password = useRef(null);
  const [err, seterr] = useState(null);
  const handleSignin = () => {
    const msg = signinvalid(email.current.value, password.current.value);
    seterr(msg);
    if (msg) return;
   // navigate('/browse');
   // dispatch(addUser({ email: email.current.value }));
    signInWithEmailAndPassword(auth,email.current.value,password.current.value)
    .then((userCredential) => {
    const user = userCredential.user;
    navigate("/browse")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if(errorCode||errorMessage){
        seterr("Invalid Authentication")
      }
    });
  };
  return (
    <>
      <HeaderCommon />
      <div className="box1">
        <h1 className="Label">{lang[ln].signin}</h1>
        <input
          className="mail"
          type="text"
          ref={email}
          placeholder={lang[ln].placeholder2}
        />

        <input
          className="password"
          ref={password}
          placeholder={lang[ln].placeholder3}
          type="password"
        />
        <p>{err}</p>
        <div className="details">
          <p>{lang[ln].ema}: prototype@gmail.com</p>
          <p>{lang[ln].placeholder3}:PrototypeA2024</p>
        </div>
        <button onClick={handleSignin} className="button2">
          {lang[ln].signin}
        </button>
        <p className="text1">
          {lang[ln].ntnf}
          <Link className="span1" to="/">
            <span> {lang[ln].signup}</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignIn;
