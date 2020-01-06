const KEY_AUTH = "auth";

export function getAuth() {
  return localStorage.getItem(KEY_AUTH);
}

export function setAuth(value) {
  localStorage.setItem(KEY_AUTH, value);
}

export function clearAuth() {
  localStorage.removeItem(KEY_AUTH);
}
