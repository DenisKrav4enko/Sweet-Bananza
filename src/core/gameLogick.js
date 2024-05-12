import fruits from "../assets/img";

export function generateRandomFruits() {
    const weights = [4, 3, 2, 2, 2, 1, 1, 1];
    const randomFruits = Array.from({ length: 100 }, (_, index) => {
        if (index === 97) return fruits[1]
        const randomIndex = weightedRandom(weights);
        return fruits[randomIndex];
    });
    return randomFruits;
}

function weightedRandom(weights) {
    const totalWeight = weights.reduce((acc, val) => acc + val, 0);
    const random = Math.random() * totalWeight;
    let weightSum = 0;
    for (let i = 0; i < weights.length; i++) {
        weightSum += weights[i];
        if (random < weightSum) {
            return i;
        }
    }
}