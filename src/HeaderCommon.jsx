import useOnAuthStateChange from '../customHooks/useOnAuthStateChange';
import { Logo1, SUPPORTED_LANGUAGES } from '../utilities/Links';
import './HeaderCommon.css';
import lang from '../utilities/language';
import { useSelector } from 'react-redux';
import { auth } from '../utilities/firebase';
import { removeSuggestions } from '../utilities/gbtslice';
import { signOut } from 'firebase/auth';
import { addUser, removeUser } from '../utilities/userSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleGBTpage } from '../utilities/gbtslice';
import { handlelang } from '../utilities/langslice';
import { useState } from 'react';

const HeaderCommon = () => {
  const [gbt, setgbt] = useState(true);
  const ln = useSelector((store) => store.language.lang);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useOnAuthStateChange();
  const handleSignOut = () => {
    dispatch(removeUser());
    navigate('/');
    signOut(auth).then(() => {
      navigate('/');
    });
  };
  const handleGBTChange = () => {
    dispatch(toggleGBTpage());
    setgbt(!gbt);
    dispatch(removeSuggestions());
  };
  const handlelanguage = (e) => {
    dispatch(handlelang(e.target.value));
  };
  const mail = useSelector((store) => store.user?.email);
  if (mail === null) return;

  return (
    <>
      <h1 className="background"></h1>
      <div className="head">
        <img className="Logo1" src={Logo1} alt="Logo1" />
        <select className="select" onChange={handlelanguage}>
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option
              key={lang.identifier}
              className="option"
              value={lang.identifier}
            >
              {lang.name}
            </option>
          ))}
        </select>

        {mail ? (
          <>
            <p>{mail}</p>
            <div className="mobibut">
              <button className="button4" onClick={handleGBTChange}>
                {gbt ? lang[ln].gbt : lang[ln].home}
              </button>

              <button className="button3" onClick={handleSignOut}>
                {lang[ln].signout}
              </button>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default HeaderCommon;
