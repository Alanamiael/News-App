import { auth } from '@config/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  FacebookAuthProvider,
  updateProfile,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import { setLoading, clearError, setError } from '@redux/slices/auth';
import { generateAuthErrorMessage } from '@utils/functions';
import { AuthRoutes, MainRoutes } from '@enums/enums';
import { AuthGoogle, SignIn } from '@ts/types';

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log('uid :', uid);
  } else {
    console.log('no user');
  }
});
export const signInWithGoogleProvider = new GoogleAuthProvider();
export const signInWithFacebookProvider = new FacebookAuthProvider();

export const signUp: SignIn = async (dispatch, userData): Promise<void> => {
  const { data, navigate } = userData;
  dispatch(setLoading(true));
  dispatch(clearError());

  try {
    if (data.email && data.password) {
      const result = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      localStorage.setItem('user', JSON.stringify(result.user));

      await updateProfile(auth.currentUser!, {
        displayName: data.name,
      });

      navigate(AuthRoutes.PhotoAdd);
    } else {
      dispatch(setError('Invalid email or password'));
    }
  } catch (error: any) {
    dispatch(setError(generateAuthErrorMessage(error.code) || ''));
    console.warn('signUpError :', error.code);
  } finally {
    dispatch(setLoading(false));
  }
};

export const signIn: SignIn = async (dispatch, userData): Promise<void> => {
  const { data, navigate } = userData;
  dispatch(setLoading(true));
  dispatch(clearError());

  try {
    if (data.email && data.password) {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;
      localStorage.setItem('user', JSON.stringify(user));
      navigate(MainRoutes.Homepage);
    } else {
      dispatch(setError('Invalid email or password'));
    }
  } catch (error: any) {
    dispatch(setError(generateAuthErrorMessage(error.code) || ''));
    console.warn('signInError :', error.code);
  } finally {
    dispatch(setLoading(false));
  }
};

export const authWithGoogle: AuthGoogle = async (
  dispatch,
  userData
): Promise<void> => {
  const { navigate } = userData;
  dispatch(setLoading(true));
  dispatch(clearError());
  console.log(0);
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    const user = result.user;
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;

    localStorage.setItem('user', JSON.stringify(user));
    navigate(MainRoutes.Homepage);
  } catch (error: any) {
    console.warn('signInWithGoogleError:', error.code);
  } finally {
    dispatch(setLoading(false));
  }
};

export const authWithFacebook: AuthGoogle = async (
  dispatch,
  userData
): Promise<void> => {
  const { navigate } = userData;
  dispatch(setLoading(true));
  dispatch(clearError());
  console.log(0);
  try {
    const provider = new FacebookAuthProvider();
    const result = await signInWithPopup(auth, provider);

    const user = result.user;
    console.log('user :', user);

    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential?.accessToken;

    localStorage.setItem('user', JSON.stringify(user));
    navigate(MainRoutes.Homepage);
  } catch (error: any) {
    console.warn('signInWithFacebookError:', error.code);
  } finally {
    dispatch(setLoading(false));
  }
};
export const resetPassrord: SignIn = async (
  dispatch,
  userData
): Promise<void> => {
  const { data, navigate } = userData;
  dispatch(setLoading(true));
  dispatch(clearError());
  try {
    if (data.email) {
      sendPasswordResetEmail(auth, data.email);
      alert('Check your email');
      navigate(AuthRoutes.SignIn);
    } else {
      dispatch(setError('Invalid email'));
    }
  } catch (error: any) {
    dispatch(setError(generateAuthErrorMessage(error.code) || ''));
    console.warn('ResetPasswordError:', error.code);
  } finally {
    dispatch(setLoading(false));
  }
};
export const logOut = () => {
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
};
