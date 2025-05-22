// auth.js (optional utility file)
export const isAuthenticated = () => {
    return localStorage.getItem("authToken") !== null;
  };
  