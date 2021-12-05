import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [userID, setUserID] = useState(1);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUserID(e.target.value);
  };

  const handleSubmit = (e) => {
    //Navigate to /record/:userID when clicked
    userID < 1 || userID > 12
      ? alert('Please introduce a valid user (1 to 12)')
      : navigate(`/record/${userID}`);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <label htmlFor="user"></label>
      <form onSubmit={handleSubmit} action="">
        <input
          onChange={handleInputChange}
          id="user"
          type="text"
          value={userID}
          placeholder="Please enter user id"
        />
        <button>Go to user {userID} profile</button>
      </form>
    </div>
  );
}
