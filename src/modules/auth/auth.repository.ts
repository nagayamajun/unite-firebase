import { auth } from "@/libs/firebase";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, UserCredential } from "firebase/auth";

export const authRepository = {
  //メールでの認証
  async signInWithEmail(email: string, password: string): Promise<{success: boolean, message: string} | undefined> {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { success: true, message: "ログインに成功しました。"}
    } catch (error) {
      return {success: false, message: "失敗しました。再度お試しください。"}
    }
  },

  async signInWithGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider)
    } catch (error) {
      alert("google認証に失敗しました")
      window.location.reload();
    }
  },

  async signWithGithub() {
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(auth, provider)
    } catch (error) {
      alert("GitHub認証に失敗しました")
      window.location.reload();
    }
  },

  //メールでのユーザー登録
  async signUpWithEmail(email:string, password: string): Promise<void>  {
    try {
      console.log(email, password)
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert('ユーザー登録に失敗しました。')
      window.location.reload();
    }
  },

  //サインアウトする
  async logOut(): Promise<void> {
    try {
      await signOut(auth);
      console.log("成功")
    } catch (error) {
      alert('サインアウトに失敗しました。');
      window.location.reload();
    }
  },

};



