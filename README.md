# block_chain_demo
![sample](./static/sample.gif)
#### Version Information
truffle: Version 3.0.5+ required.

#### Installation

```
npm install -g truffle
npm install -g ethereumjs-testrpc #Ganasheを使わないとき

npm install # packageをinstall
```

### Ganache
以下のサイトからGanacheをダウンロード  
https://truffleframework.com/ganache  
https://github.com/trufflesuite/ganache  
contractをmigrateする際にはGanacheを起動しておく必要がある
新しくGanacheを起動し直す場合は、build フォルダを削除する

#### Commands

```
testrpc #Ganasheを使わないとき

truffle compile && truffle migrate　--reset # Contractのコンパイルとマージ
npm run start # Run dev server for front-end hot reloading

```

#### Errors対処

```
# python2がないというerrorの時
pyenv shell 2.?.?

# packegeの再instgall
rm -r node_modules
npm install
```

