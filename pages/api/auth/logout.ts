async function handleLogout(req, res) {
  const result = res.redirect(
    `${process.env.COGNITO_DOMAIN}/logout?client_id=${process.env.COGNITO_CLIENT_ID}&logout_uri=${process.env.COGNITO_LOGOUT_URL}`
  );
  console.log("logout");
}

export default async function logout(req, res) {
  try {
    await handleLogout(req, res);
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}
