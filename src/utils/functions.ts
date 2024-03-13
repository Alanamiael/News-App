export const generateAuthErrorMessage = (error: string) => {
  if (error) {
    switch (error) {
      case 'auth/invalid-email':
        return 'Invalid email';

      case 'auth/missing-password':
        return 'Missing password';

      case 'auth/wrong-password':
        return 'Wrong password';

      default:
        return error;
    }
  }
};
