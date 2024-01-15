import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import signUp from "../../assets/signUp.webp";
const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state?.post?.isLoading);

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  return (
    <section className="register">
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="register__container">
          <div className="left">
            <img src={signUp} alt="" />
          </div>
          <div className="right">
            <div>
              <h1>Sign In</h1>
            </div>
            <div>
              <form onSubmit={onSubmit} className="form">
                <div className="form__group">
                  <input
                    type="email"
                    className="form__control"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={onChange}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    className="form__control"
                    id="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={onChange}
                  />
                </div>

                <div className="form__group">
                  <button type="submit">Sign in</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SignIn;
