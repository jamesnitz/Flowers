let nurserys = []

export const useNurserys = () => nurserys.slice()

export const getNurserys = () => fetch("http://localhost:3000/Nurserys")
    .then(res => res.json())
    .then(parsedNurserys => nurserys = parsedNurserys)