import Slice from './slice';
import defaultData from './default-data';

class SingletonClass {

  private static _instance: SingletonClass = new SingletonClass();

  private data: typeof defaultData;

  public static getInstance(): SingletonClass {
    return SingletonClass._instance;
  }

  constructor() {
    if (SingletonClass._instance) {
      throw new Error('Error: Instantiation failed: Use SingletonDemo.getInstance() instead of new.');
    }
    SingletonClass._instance = this;
    this.data = defaultData;
  }

  getRooms(): string[] {
    return Object.keys(this.data);
  }

  list(roomName: string): Slice[] {
    return this.data[roomName] || this.data['default'];
  }

  addRoom(roomName: string): void {
    if (this.data[roomName]) {
      return;
    }
    this.data[roomName] = [];
  }

  addSlice(slice: Slice, roomName: string): void {
    if (!this.isValidInput(slice, roomName)) {
      return;
    }
    this.data[roomName].push(slice);
  };

  removeSlice(slice: Slice, roomName: string): void {
    if (!this.isValidInput(slice, roomName)) {
      return;
    }
    let sliceIndex = this.data[roomName].findIndex(
      value => value.name === slice.name);
    if (sliceIndex !== undefined) {
      this.data[roomName].splice(sliceIndex, 1);
    }
  }

  private isValidInput(slice: Slice, roomName: string) {
    return slice && roomName && this.data[roomName];
  }
}


const singleton = SingletonClass.getInstance();
export default singleton;
