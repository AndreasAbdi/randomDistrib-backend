import Slice from './slice';

class SingletonClass {

    private static _instance: SingletonClass = new SingletonClass();

    private slices: Slice[];

    public static getInstance(): SingletonClass {
        return SingletonClass._instance;
    }

    constructor() {
        if (SingletonClass._instance) {
            throw new Error('Error: Instantiation failed: Use SingletonDemo.getInstance() instead of new.');
        }
        SingletonClass._instance = this;
        this.slices = [
            { name: `LOL`, weight: 50 },
            { name: `OW`, weight: 50 }
        ];
    }

    list(): Slice[] {
        return this.slices;
    }

    addSlice(slice: Slice): void {
        this.slices.push(slice);
    };

    removeSlice(slice: Slice): void {
        let sliceIndex = this.slices.findIndex(
            value => value.name === slice.name);
        if (sliceIndex !== undefined) {
            this.slices.splice(sliceIndex, 1);
        }
    }
}

const singleton = SingletonClass.getInstance();
export default singleton;
