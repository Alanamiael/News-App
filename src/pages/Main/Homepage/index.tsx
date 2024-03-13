import { database } from '@config/firebase';
import { useAppDispatch } from '@redux/hooks';
import { logOutAsync } from '@redux/slices/auth';
import { get, child, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

const Homepage = () => {
  const dispatch = useAppDispatch();
  const [usersCategories, setUsersCategories] = useState<any>([]);

  const user = JSON.parse(localStorage.getItem('user') || JSON.stringify(''));

  const handleLogout = async () => {
    await dispatch(logOutAsync());
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, `usersCategories/${user.uid}`))
      .then((categories) => {
        if (categories.exists()) {
          setUsersCategories(categories.val());
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log('userProfileIcon :', user.providerData[0].photoURL);
  console.log('usersCategories :', usersCategories);
  return (
    <>
      Here will be a Homepage
      <button onClick={handleLogout}>logout</button>
    </>
  );
};

export default Homepage;
