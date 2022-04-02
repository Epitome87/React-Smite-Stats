// I'm assuming we'll need some sort of auth if we allow user registration / ability to edit some protected resource
// Maybe using the jsonwebtokekn npm package?

const auth = async (req, res, next) => {
  try {
    next();
  } catch (error) {}
};

export default auth;
