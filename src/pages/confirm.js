import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { initAuth } from "../awsconf/autoinfo";
import { ConfirmSignUp, ReSendVerifyCode } from "../cognito-auth/auth";
import { Auth } from "aws-amplify";


export function Confirm(){
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');

    const excuteConfirm = async() =>{
      await ConfirmSignUp(email, code);
    }

    const excuteResendConfirm = async() =>{
        await ReSendVerifyCode(email);
    }
    return(<div>
        <h1>確認コード入力</h1>
        <form noValidate  onSubmit={excuteConfirm}>
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
              <td>code</td>
              <td><input 
              type="password" 
              id="code" 
              value={code}
              onChange={(e) => setCode(e.target.value)}
              /></td>
            </tr>
            </tbody>
          </table>
          <button type='submit'>確認</button>
        </form>
        <button onClick={excuteResendConfirm}>コードを再送</button>
        </div>
    );
}