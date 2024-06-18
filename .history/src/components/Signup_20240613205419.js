import { useState } from "react";
import { signupFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  const createAccount = async () => {
    try {
      console.log("1");

      const response = await fetch(
        "http://localhost/react-activelifehub/php-app/signup.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: signupState.username,
            email: signupState["email-address"],
            password: signupState.password,
            confirmPassword: signupState["confirm-password"],
          }),
        }
      );
      console.log("2");

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      }
      console.log("3");

      const data = await response.json();
      console.log(data);
      console.log("4");

      setSignupState(fieldsState);
      console.log("5");

      // Redirect to login page
      // window.location.href = "./Login";
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        {error && <p className="text-red-500">{error}</p>}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}
