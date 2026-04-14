const API = "/api/auth";

// 🔹 SIGNUP
export const signupUser = async (data) => {
  const res = await fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify(data)
  });

  return res.json();
};

// 🔹 LOGIN
export const loginUser = async (data) => {
  const res = await fetch(`${API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify(data)
  });

  return res.json();
};

export const getMe = async () => {
  const res = await fetch("/api/auth/me", {
    credentials: "include"
  });

  if (!res.ok) return null;

  return res.json();
};