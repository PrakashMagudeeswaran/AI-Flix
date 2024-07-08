import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { useRef, useState } from 'react';
import { signupvalid } from '../utilities/Validation';
import { auth } from '../utilities/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import HeaderCommon from './HeaderCommon';
import lang from '../utilities/language';
import { addUser } from '../utilities/userSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const ln = useSelector((store) => store.language.lang);
  const email = useRef(null);
  const password = useRef(null);
  const [err, seterr] = useState(null);
  const handleSubmit = () => {
    const msg = signupvalid(email.current.value, password.current.value);
    seterr(msg);
    if (msg) return;
     // navigate('/browse');
    // dispatch(addUser({ email: email.current.value }));
    createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
    .then((userCredential) => {
      const user = userCredential.user;
      navigate("/browse")

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      seterr(errorMessage)
    });
  };

  return (
    <div>
      <HeaderCommon />
      <form onSubmit={(e) => e.preventDefault()} className="Form1">
        <h1>{lang[ln].content1}</h1>
        <h4>{lang[ln].content2}</h4>
        <h4>{lang[ln].content3}</h4>
        <input
          type="text"
          ref={email}
          className="input1"
          placeholder={lang[ln].placeholder2}
        />
        <input
          className="password1"
          ref={password}
          placeholder={lang[ln].placeholder3}
          type="password"
        />
        <p>{err}</p>
        <button type="submit" onClick={handleSubmit} className="Button2">
          {lang[ln].gs}
        </button>
        <h4>
          {lang[ln].aha}
          <Link className="span1" to="/signin">
            <span> {lang[ln].signin}</span>
          </Link>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
