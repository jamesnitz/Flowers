export const FlowerBuilder = (flower) => {
  return `
    <div class="flower__Card">
      <header>
        <h2>${flower.name}</h2>
      </header>
      <div>${flower.color}</div>
    </div>
  `
  }