import { useSignup } from "../hooks/useSignup";
import useField from "../hooks/useField";

const Signup = () => {
  const name = useField("text");
  const email = useField("email");
  const password = useField("password");
  const password2 = useField("password");

  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(name.value, email.value, password.value, password2.value);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label>Name:</label>
      <input {...name}/>

      <label>Email address:</label>
      <input {...email}/>

      <label>Password:</label>
      <input {...password}/>

      <label>Confirm password:</label>
      <input {...password2}/>

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
