import { useFlowers } from "./FlowerDataProvier.js"
import { FlowerBuilder } from "./FlowerComponent.js"


const content = document.querySelector(".flowers")


export const FlowerList = () => {
  const flowers = useFlowers()

  const render = () => {
    content.innerHTML = flowers.map(flower => {

      const html = FlowerBuilder(flower)
      return html
    }).join("")
  }
render()
}