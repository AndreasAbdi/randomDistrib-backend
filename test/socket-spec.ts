/// <reference path="../node_modules/@types/mocha/index.d.ts" />
import SocketSetup from '../src/socket/socket';
import * as socketIO from 'socket.io';
import * as chai from 'chai';
import * as sinon from 'sinon';

const expect = chai.expect;
describe('SocketSetup', () => {

  let app = require('express')();
  let http = require('http').Server(app);
  let io = require('socket.io')(http);

  it('should setup without crashing', (done) => {
    const socket = new SocketSetup(io);
    expect(socket).to.not.be.null;
    done();
  });
});

