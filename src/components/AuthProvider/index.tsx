import { useState } from 'react';

export const AuthProvider = () => {
  const [user, setUser] = useState(null);
  return user != null ? <>{user}</> : <>loading</>;
};
