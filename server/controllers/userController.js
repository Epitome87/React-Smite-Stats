// I'm assuming we'll have some sort of user-related route, like to view their own profile / stats

// A controller is typically just a bunch of functions that are used as the callback method inside a route
// This keeps the app / route files cleaner, as the actual logic for what to do in those routes is stored here

// Gets the currently authenticated User
export const getUser = async (req, res) => {
  res.send('TODO: Return currently authorized User here');
};

// Create a new User (Registration)
export const createUser = async (req, res) => {
  // Read req.body to see what User data was provided
  // Create a new User based on that data
  // Save that User to the database
  // Generate their auth / session token
  res.send('TODO: Return newly-created User, as well as their auth token');
};
// Delete a User (Delete their account)
export const deleteUser = async (req, res) => {
  res.send('TODO: Return the User that was deleted');
};

// Update a User
export const updateUser = async (req, res) => {
  // See what properties the User wishes to update in req.body
  // Set those User's properties to those updated values
  // Save updated User to the database
  res.send('TODO: Return the User that was updated');
};

// Log a User in
export const login = async (req, res) => {
  res.send('TODO: Return User who logged in, along with some auth token');
};

// Log a User out
export const logout = async (req, res) => {
  // We log a user out by revoking their auth / session token
  res.send('TODO: Return some logout message');
};
