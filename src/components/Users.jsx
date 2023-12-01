import { Link } from "react-router-dom";

const Users = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const myUser = { name, email, password };
    console.log(myUser);
    fetch("https://express-101-oiricq15y-jahangiralom99.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("user created successfully");
        }
      });
  };

  return (
    <div>
      <h1>Users : </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" /> <br />
        <input type="email" name="email" id="" /> <br />
        <input type="password" name="password" id="" /> <br />
        <input type="submit" value="Submit" />
      </form>

      <Link to="/display">Display Users </Link>
    </div>
  );
};

export default Users;
