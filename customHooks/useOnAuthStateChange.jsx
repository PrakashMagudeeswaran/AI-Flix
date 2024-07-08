import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utilities/firebase';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utilities/userSlice';
import { useNavigate } from 'react-router-dom';

const useOnAuthStateChange = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = user.email;
        dispatch(addUser({ email: email }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/signIn');
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
};

export default useOnAuthStateChange;
