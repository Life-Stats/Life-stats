const { client } = require('./client');

export function getUser() {
 return client.auth.user();
}  

export function getSession() {
  const session = client.auth.session();
  return session;
};

 export async function signInUser() {
  // eslint-disable-next-line no-unused-vars
  
  const { user, session, error } = await client.auth.signIn({ 
    provider: 'google'
  }
  );
  if (error) throw error;
  return user;
};

export async function signInUserGitHub() {
  // eslint-disable-next-line no-unused-vars
  
  const { user, session, error } = await client.auth.signIn({ 
    provider: 'github'
  },
  );
  if (error) throw error;
  return user;
};

export async function signOutUser() {
  return client.auth.signOut();
}

