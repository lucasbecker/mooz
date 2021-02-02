# mooz
  Clone simplificado e web do Zoom.

## Overview
Neste projeto foi replicada a experiência de videoconferência do Zoom, com usuários simultâneos enviando e recebendo vídeos, apensa utilizando JavaScript e explorando o máximo da linguagem. O projeto foi estruturado e executado utilizando três *design patterns* para dividir responsabilidades, também foi utilizado **WebRTC**, conceitos de comunicação **Peer to Peer** e **Sockets**. Funções foram delegadas com o *padrão builder*, além de utilizar o **Media Recorder**, a API do browser para gravação de grupos de usuários em videoconferências. Por fim, foi realizada os ajustes para o download dos arquivos de vídeos e o deploy da aplicação.

### Features
- Salas privadas
- Comunicação em tempo real com WebRTC, Peer Server e Eventos personalizados
- Utilização do Media recorder para gravação dos vídeos da conferência
- Iniciar gravações de forma individual, onde cada usuário conectado é uma instância diferente
- Utilização do Binary OBjects da web para download dos arquivos de vídeo

## Deploy
O deploy foi realizando utilizando a [Heroku](https://heroku.com/) e está disponível [aqui](https://mooz-public.herokuapp.com/).

## Credits
  - Workshop e skeleton do projeto de [Erick Wendel](https://github.com/ErickWendel/jsexpert02-skeleton-ew)
  - Layout inicial home foi baseada no codepen do [Nelson Adonis Hernandez
  ](https://codepen.io/nelsonher019/pen/eYZBqOm)
  - Layout inicial da room foi adaptado a partir do repo do canal [CleverProgrammers](https://github.com/CleverProgrammers/nodejs-zoom-clone/blob/master/views/room.ejs)

## License
[MIT License](./LICENSE) | [Lucas Becker](https://github.com/lucasbecker)