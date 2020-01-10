let nurseryDistributors = []

export const useNurseryDistributors = () => nurseryDistributors.slice()

export const getNurseryDistributors = () => fetch("http://localhost:3000/NurseryDistributors")
    .then(res => res.json())
    .then(parsedNurseryDistributors => nurseryDistributors = parsedNurseryDistributors)