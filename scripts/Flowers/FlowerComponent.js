export const FlowerBuilder = (flower, color) => {
  return `
    <div class="flower__Card">
      <header>
        <h2>${flower.name}</h2>
      </header>
      <div>${color.name}</div>
    </div>
  `
  }