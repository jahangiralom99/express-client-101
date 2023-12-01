import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const DisplayUser = () => {
  const users = useLoaderData();
  const [subSuer, setUser] = useState(users);
  // console.log(users);

  const handleDelete = (_id) => {
    console.log(_id);
    fetch(
      `https://express-101-oiricq15y-jahangiralom99.vercel.app/users/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const reaming = subSuer.filter((item) => item._id !== _id);
        setUser(reaming);
      });
  };
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>ALL display USers :</h1>
      {subSuer.map((user) => (
        <p key={user._id}>
          {user.name} ::
          {user.email}
          <button onClick={() => handleDelete(user._id)}>X</button>
          <Link to={`user/${user._id}`}>
            <button>Update</button>
          </Link>
        </p>
      ))}
    </div>
  );
};

export default DisplayUser;
