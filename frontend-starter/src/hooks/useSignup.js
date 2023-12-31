import { useState } from "react";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const signup = async (name, email, password, password2) => {
    setIsLoading(true);
    setError(null);

    try {
      if (password !== password2) {
        throw new Error("Passwords do not match");
      }

      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      localStorage.setItem("user", JSON.stringify(data));

      window.location.reload();
    }
    catch (error) {
      setError(error.message);
    }
    finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
