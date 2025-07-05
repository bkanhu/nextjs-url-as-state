import axios from "axios";

const API_URI = process.env.NEXT_PUBLIC_API_URI;

/***************************************************************************
 * Authentication
 **************************************************************************/
const login = async (email, password) => {
  const response = await axios.post(`${API_URI}/auth/login`, {
    email,
    password,
  });
  return response;
};

export { login };
