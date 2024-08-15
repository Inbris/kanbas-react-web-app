import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const signup = async () => {
    try {
      const currentUser = await client.signup(user);
      dispatch(setCurrentUser(currentUser));
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="wd-signup-screen">
      <h1>Sign up</h1>
      {error && <div className="wd-error alert alert-danger mb-3">{error}</div>}

          <form>
              <div className="mb-3">
                  <input
                      value={user.username}
                      onChange={(e) => setUser({ ...user, username: e.target.value })}
                      className="wd-username form-control"
                      placeholder="Username"
                  />
              </div>

              <div className="mb-3">
                  <input
                      value={user.password}
                      onChange={(e) => setUser({ ...user, password: e.target.value })}
                      type="password"
                      className="wd-password form-control"
                      placeholder="Password"
                  />
              </div>

              <div className="mb-3">
                  <input
                      name="firstName"
                      value={user.firstName}
                      onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                      className="wd-firstName form-control"
                      placeholder="First Name"
                  />
              </div>

              <div className="mb-3">
                  <input
                      name="lastName"
                      value={user.lastName}
                      onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                      className="wd-lastName form-control"
                      placeholder="Last Name"
                  />
              </div>

              <div className="mb-3">
                  <input
                      name="email"
                      value={user.email}
                      onChange={(e) => setUser({ ...user, email: e.target.value })}
                      type="email"
                      className="wd-email form-control"
                      placeholder="Email"
                  />
              </div>

              <div className="mb-3">
                  <input
                      name="dob"
                      value={user.dob}
                      onChange={(e) => setUser({ ...user, dob: e.target.value })}
                      type="date"
                      className="wd-dob form-control"
                      placeholder="Date of Birth"
                  />
              </div>

              <div className="mb-3">
                  <input
                      name="section"
                      value={user.section}
                      onChange={(e) => setUser({ ...user, section: e.target.value })}
                      className="wd-section form-control"
                      placeholder="Section"
                  />
              </div>

              <div className="mb-3">
                  <input
                      name="loginId"
                      value={user.loginId}
                      onChange={(e) => setUser({ ...user, loginId: e.target.value })}
                      className="wd-phone form-control"
                      placeholder="Login ID"
                  />
              </div>

              <div className="mb-3">
                  <p>You can select your role below:</p>
                  <select
                      name="role"
                      value={user.role}
                      onChange={(e) => setUser({ ...user, role: e.target.value })}
                      className="wd-role form-select"
                  >
                      <option value="STUDENT">STUDENT</option>
                      <option value="TEACHER">TEACHER</option>
                  </select>
              </div>

              <button onClick={signup} className="wd-signup-btn btn btn-primary w-100 mb-2">
                  Sign Up
              </button>
          </form>

          <div className="text-center">
              <Link to="/Kanbas/Account/Signin" className="wd-signin-link">
                  Sign In
              </Link>
    </div>
    </div>
  );
}

