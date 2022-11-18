import React, { useState } from 'react';
import { SigninFunc } from '../cognito-auth/auth';

export function Signin(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const excuteSignIn = async() =>{
        await SigninFunc(email, password);
    }
    return (
        <div>
        <h1>ログイン</h1>   
        <form noValidate onSubmit={excuteSignIn}>
        <table>
          <tbody>
          <tr>
            <td>email</td>
            <td><input
            id="username"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </td>
          </tr>
          <tr>
            <td>password</td>
            <td><input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
           </td>
           </tr>
           </tbody>
        </table>
        <button type='submit'>sign-in</button>
      </form>
      </div>
      );
}