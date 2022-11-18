import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SignUpFunc } from "../cognito-auth/auth";

// 認証フォームとフォームに値を入れて実行
export function SignUp(){
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');

    const excuteSignUp = async() =>{
        await SignUpFunc(email, nickname, password);
    }
    
    return (
      <div><h1>登録画面</h1>      
      <form noValidate onSubmit={excuteSignUp}>
        <table>
         <tbody>
          <tr>
            <td>email</td>
            <td><input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            /></td>
          </tr>
          <tr>
            <td>nickname</td>
            <td><input 
            type="text" 
            id="nickname" 
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            /></td>
          </tr>
          <tr>
            <td>password</td>
            <td><input 
            type="password" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}/></td>
          </tr>
          </tbody>
        </table>
        <button type='submit'>登録</button>
        <p>
          アカウント既にある？<Link to="/signin">ログイン</Link>
        </p>
      </form>
      </div>
    );   
}