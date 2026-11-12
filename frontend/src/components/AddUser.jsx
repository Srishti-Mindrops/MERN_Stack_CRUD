
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Female");

  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/users", {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Failed to add user. Please try again.");
    }
  };

  return (
    <div className="columns">
      <div className="column is-half">
        <h2 className="title is-4">Add New User</h2>

        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Enter your name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter your email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  name="gender"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save User
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;

