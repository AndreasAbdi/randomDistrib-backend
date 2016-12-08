import Slice from './slice';

const defaultData: Slice[] = [
    { name: `HEADS`, weight: 50 },
    { name: `TAILS`, weight: 50 }
];

const games: Slice[] = [
    { name: `LOL`, weight: 50 },
    { name: `OW`, weight: 50 }
];

//type of map ( string -> slices)
let data: { [s: string]: Slice[] } = {};
data['games'] = games;
data['default'] = defaultData;

export default data;
