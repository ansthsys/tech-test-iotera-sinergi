import { useAuth } from "@/hooks/useAuth";
import type { SubmitEvent } from "react";
import { useNavigate } from "react-router";

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    if (!email || !password) {
      alert("Fill all field");
      return;
    }

    const res = login({ email, password });

    if (!res) {
      alert("Wrong email or password");
      return;
    }

    navigate("/");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="card w-96 bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Login</h2>

          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input
                id="email"
                name="email"
                type="email"
                className="input"
                placeholder="user@email.test"
                required
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                id="password"
                name="password"
                type="password"
                className="input"
                placeholder="My awesome page"
                required
              />
            </fieldset>
          </div>

          <div className="justify-end card-actions">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
