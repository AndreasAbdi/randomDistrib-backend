import Slice from '../data/slice';

/**
 * given a Slice distribution, uniformly select a
 * single Slice.
 */
export default function decide(distribution: Slice[]): Slice {
    if (!distribution || distribution.length === 0) {
        return null;
    }
    let random = Math.random();
    let cumulativeDistribution = toCumulativeDistribution(distribution);

    let location = getLocationOnDistribution(
        cumulativeDistribution, random);

    return distribution.find(
        value => value.name === location.name);
}


function add(first: Slice, second: Slice) {
    return new Slice(
        second.name,
        first.weight + second.weight);
}


function toCumulativeDistribution(
    distribution: Slice[]): Slice[] {
    return distribution
        .map((value, id, array) => array.slice(0, id + 1))
        .map(value => value.reduce(add));
}

function getLocationOnDistribution(
    cumulativeDistribution: Slice[],
    target: number): Slice {

    return cumulativeDistribution
        .filter(
        (value, index, array) => {
            return value.weight >=
                array[array.length - 1]
                    .weight * target;
        })
    [0];
}


