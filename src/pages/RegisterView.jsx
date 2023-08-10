import axios from "axios";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const RegisterView = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const token = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
      axios.defaults.headers.common.Authorization = "";
    },
  };

  const register = async (credentials) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ name, email, password });
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          sx={{
            mt: 5,
            ml: 5,
            width: 300,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          sx={{
            mt: 5,
            ml: 5,
            width: 300,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          sx={{
            mt: 5,
            ml: 5,
            width: 300,
          }}
        />
        <Button
          size="large"
          variant="contained"
          type="submit"
          sx={{
            mt: 6,
            ml: 5,
            mb: 5,
            maxWidth: "100px",
            maxHeight: "80px",
          }}
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterView;
