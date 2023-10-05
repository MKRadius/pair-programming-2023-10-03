export const useLogout = () => {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return { logout };
};
