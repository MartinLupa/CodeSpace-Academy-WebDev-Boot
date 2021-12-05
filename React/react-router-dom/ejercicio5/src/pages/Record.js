import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

export default function Record() {
  const [userData, setUserData] = useState({});
  const { user } = useParams();
  const USERS_URL = 'https://reqres.in/api/users/';

  useEffect(() => {
    fetch(`${USERS_URL}${user}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      });
  }, [user]);

  return (
    <div>
      <h1>Record of {user}</h1>
      <ul>
        <img src={userData.data?.avatar} alt={userData.data?.first_name} />
        <li>
          Name: {userData.data?.first_name} {userData.data?.last_name}
        </li>
        <li>Email: {userData.data?.email}</li>
      </ul>
    </div>
  );
}

//Optional chaining (?.) -->https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
//In this case, if optional chaining is not used with the data property, it will give a TypeError.
//This is because JS runs synchronous first, so userData will be an empty Object (undefined). Trying to acccess
//a property of an undefined Object will result in TypeError.
//Optional chaining solves this because it prevents the error.
