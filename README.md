# Contatooh

## O projeto
```
git clone https://github.com/leonardocintra/contatooh
cd contatooh
```

## Instalacao

Instale as dependencias

- NPM
- NodeJs

```
npm install
bower install
```

Execute o projeto com `nodemon`
```
npm install nodemon -g
nodemon server.js
```

## Login / Auth

Voce precisa ter uma conta no github.
Entrar em configurações e criar uma app no link https://github.com/settings/developers

![image](https://cloud.githubusercontent.com/assets/5832193/22551545/4a2c206a-e93c-11e6-9d9a-3c55e62cd188.png)

Entrar em `config/passport.js` e informar suas credenciais ou
```
export CLIENT_ID=blablabla
export CLIENT_SECRET=blablabla
```


## Dicas

### MongoDB
Caso voce esteja utilizando Ubuntu (Linux) e deparar com esse erro:
![image](https://cloud.githubusercontent.com/assets/5832193/22594033/7d65e0ac-ea08-11e6-9964-ba4366a08989.png)

Execute os comandos abaixo:
```
sudo rm /var/lib/mongodb/mongod.lock
sudo service mongod restart
```

Fonte: [clique aqui](http://stackoverflow.com/questions/26211671/failed-to-connect-to-127-0-0-127017-reason-errno111-connection-refused)



# Meta
@leonardocintra - leonardo.ncintra@outlook.com