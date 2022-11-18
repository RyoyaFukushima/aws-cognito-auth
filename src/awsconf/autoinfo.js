// 認証に必要な情報push時適当に隠す
import { Amplify } from "aws-amplify";

export const initAuth = () =>{ 
    Amplify.configure({
    aws_cognito_region: "ap-northeast-1", 
    aws_user_pools_id: "xxxxxxxxxxxxxxx", // user pool 
    aws_user_pools_web_client_id: "xxxxxxxxxxxxxx", // app client
  });
};