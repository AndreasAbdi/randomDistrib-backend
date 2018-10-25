# Random Distribution Backend Server

[![Build Status](https://travis-ci.org/AndreasAbdi/randomDistrib-backend.svg?branch=master)](https://travis-ci.org/AndreasAbdi/randomDistrib-backend)

Backend server for handling socket.io calls from random distribution front end.
Written using typescript built to javascript,
and built on expressJs, nodeJs, socket.io and a bunch of other libraries.

## Install

### Docker

install [docker](https://www.docker.com/)

```code
docker build -t random-backend .
docker run -d -p 5000:5000 --name some_name random-backend
```

then go to your docker host's port 5000 in your browser.

### Local
- install [node](https://nodejs.org/en/)
- install [npm](https://www.npmjs.com/)
- run `git clone https://github.com/AndreasAbdi/randomDistrib-backend.git`
- run `npm install` in your shell at wherever you installed this directory.

## License

MIT © [Andreas Abdi](https://github.com/AndreasAbdi)
