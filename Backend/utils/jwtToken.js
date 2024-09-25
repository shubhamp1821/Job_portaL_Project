export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken(); // This generates the JWT with expiry
  
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ), // Cookie expires in 5 days or as defined in COOKIE_EXPIRE
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
