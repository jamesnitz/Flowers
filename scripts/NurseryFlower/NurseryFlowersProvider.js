let nurseryFlowers = []

export const useNurseryFlowers = () => nurseryFlowers.slice()

export const getNurseryFlowers = () => fetch("http://localhost:3000/NurseryFlowers")
    .then(res => res.json())
    .then(parsedNurseryFlowers => nurseryFlowers = parsedNurseryFlowers)