# 出来てること
cognitoを利用した新規登録とユーザー確認、確認コード再送信
非同期処理で認証周りのライブラリ機能だけ使ってビューとつなげてる感じで実装してます
見た目自体は非常にシンプルです

# 起動
依存関係を入れる
```
npm install
```

起動する

```
npm start
```
src/awsconf/authinfo.jsのxxxxとなっているとこを修正

```js
import { Amplify } from "aws-amplify";

export const initAuth = () =>{ 
    Amplify.configure({
    aws_cognito_region: "ap-northeast-1", 
    aws_user_pools_id: "xxxxxxxxxxxxxxx", // user pool 
    aws_user_pools_web_client_id: "xxxxxxxxxxxxxx", // app client
  });
};
```
ユーザープールID,アプリクライアントIDあたりは動かす際に伝えます
# 参考にしてるサイト

1. https://mseeeen.msen.jp/react-auth-with-ready-made-cognito/
2. https://rinoguchi.net/2022/01/cognito-identity-provider-api-authentication.html


# 今上手く行ってないこと
- ログイン処理(走ってるのかわからない)
- if current_user的な判断基準をどう設けるか(boolで変数持たせて処理がうまくいったらtrueセットみたいな感じ？)

