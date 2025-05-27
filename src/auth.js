// You can modify this key and logic based on your actual authentication flow
export function isAuthenticated() {
    const token = localStorage.getItem("authToken");
    return !!token; // returns true if token exists, false otherwise
  }
  