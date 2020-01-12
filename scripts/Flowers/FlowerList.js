import { useFlowers } from "./FlowerDataProvier.js"
import { FlowerBuilder } from "./FlowerComponent.js"
import { useColors } from "../Colors/ColorsDataProvider.js"


const content = document.querySelector(".flowers")


export const FlowerList = () => {
  const colors = useColors()
  const flowers = useFlowers()

  const render = () => {
    content.innerHTML = flowers.map(flower => {
      debugger
      const color = colors.find(color => flower.colorId === color.id)

      const html = FlowerBuilder(flower, color)
      return html
    }).join("")
  }
render()
}