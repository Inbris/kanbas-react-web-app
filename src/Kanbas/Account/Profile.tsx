import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const dispatch = useDispatch();

  const signout = async () => {
      await client.signout();
      dispatch(setCurrentUser(null));
      navigate("/Kanbas/Account/Signin");
    };
    
  const [profile, setProfile] = useState<any>({});
  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const account = await client.profile();
      setProfile(account);
    } catch (err: any) {
      navigate("/Kanbas/Account/Signin");
    }
  };

  useEffect(() => { fetchProfile(); }, []);
  return (
    <div className="wd-profile-screen">
            <h1>Profile</h1>
            {profile && (
                <div className="container mt-4">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username:</label>
                            <input
                                type="text"
                                className="form-control wd-username"
                                id="username"
                                value={profile.username}
                                onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password:</label>
                            <input
                                type="password"
                                className="form-control wd-password"
                                id="password"
                                value={profile.password}
                                onChange={(e) => setProfile({ ...profile, password: e.target.value })}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name:</label>
                            <input
                                type="text"
                                className="form-control wd-firstname"
                                id="firstName"
                                value={profile.firstName}
                                onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name:</label>
                            <input
                                type="text"
                                className="form-control wd-lastname"
                                id="lastName"
                                value={profile.lastName}
                                onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="dob" className="form-label">Date of Birth:</label>
                            <input
                                type="date"
                                className="form-control wd-dob"
                                id="dob"
                                value={profile.dob}
                                onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input
                                type="email"
                                className="form-control wd-email"
                                id="email"
                                value={profile.email}
                                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="role" className="form-label">Role:</label>
                            <select
                                className="form-select wd-role"
                                id="role"
                                value={profile.role}
                                onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                            >
                                <option value="TEACHER">Teacher</option>
                                <option value="STUDENT">Student</option>
                            </select>
                        </div>

                        <button onClick={signout} className="btn btn-danger w-100">
                            Sign out
                        </button>
                    </form>
                </div>

            )}
        </div>
    );
}

