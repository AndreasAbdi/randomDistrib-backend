/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
import Data from '../../src/data/data-service';
import * as chai from 'chai';
import Slice from '../../src/data/slice';

describe('data-service', () => {
  describe('getRooms', () => {
    it('should not throw error', () => {
      Data.getRooms();
    });
  });
  describe('list', () => {
    it('should ignore null values', () => {
      Data.list(null);
    });
  });
  describe('addSlice', () => {
    it('should ignore null values', () => {
      Data.addSlice(null, null);
    });
  });
  describe('removeSlice', () => {
    it('should ignore null values', () => {
      Data.removeSlice(null, null);
    });
  });
});

