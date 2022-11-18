import { Auth } from "aws-amplify";
import { initAuth } from "../awsconf/autoinfo";
import { useNavigate } from 'react-router-dom';

// 認証情報: プールID, リージョン, アプリクライアントID呼び出し
initAuth();

// サインイン実行処理(Amplifyのライブラリの機能のみを使ってる。Amplifyは使ってない) コードが勝手に送信される
// Cognitoは必須要素のパラメータ名がusernameなのかemail指定でもparam名はusernameになっている例が多いのでそれに従いました。
export async function SignUpFunc(email, nickname, password){
    try {
      const result = await Auth.signUp({
        username: email,
        password,
        attributes: { nickname },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
}

// 確認コードを送信する
export async function ConfirmSignUp(email, code){
    try {
        const result = await Auth.confirmSignUp(email, code);
        console.log(result);
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
}  

// 確認コードを再送してもらう
export async function ReSendVerifyCode(email){
    try {
    await Auth.resendSignUp(email);
    console.log('success to resend code');
    } catch (error) {
    console.log('failed');
    alert(error.message);
  }
}

// ログインする
export async function SigninFunc(email, password){
    const navigate = useNavigate();
    console.log(email);
    try {
        const result = await Auth.signIn(email, password);
        if (result.success) {
            navigate({ pathname: 'signed' });
        } else {
            alert(result.message);
        }
      } catch (error) {
        console.log(error);
        alert(error.message);
    }
}