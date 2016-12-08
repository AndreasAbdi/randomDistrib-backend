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

    list(roomName: string): Slice[] {
        return this.data[roomName] || this.data['default'];
    }

    addSlice(slice: Slice, roomName: string): void {
        if (!this.data[roomName]) {
            return;
         }
        this.data[roomName].push(slice);
    };

    removeSlice(slice: Slice, roomName: string): void {
        if (!this.data[roomName]) {
            return;
        }
        let sliceIndex = this.data[roomName].findIndex(
            value => value.name == slice.name);
        if (sliceIndex !== undefined) {
            this.data[roomName].splice(sliceIndex, 1);
        }
    }
}

const singleton = SingletonClass.getInstance();
export default singleton;
