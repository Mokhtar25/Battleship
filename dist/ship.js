export default function CreateShip(block, ids = 0) {
    const size = block;
    let hits = 0;
    let sunk = false;
    let id = ids;
    const hit = () => {
        hits++;
        if (hits >= size) {
            sunk = true;
        }
    };
    const health = () => {
        return size - hits;
    };
    const isSunk = () => {
        return sunk;
    };
    return { size, id, hits, sunk, health, isSunk, hit };
}
