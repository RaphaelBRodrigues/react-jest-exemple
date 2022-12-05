function shouldRender() {
  const value = localStorage.getItem("hasPermission");

  return !!value;
}

export default shouldRender;