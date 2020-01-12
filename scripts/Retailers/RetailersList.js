import { useRetailers } from "./RetailersProvider.js"
import { retailerBuilder } from "./RetailersComponent.js"
import { useDistributors } from "../Distributors/DistributorProvider.js"
import { useFlowers } from "../Flowers/FlowerDataProvier.js"
import { useNurserys } from "../Nurseries/NurseryProvider.js"
import { useNurseryDistributors } from "../NurseryDistributor/NurseryDistributorProvider.js"
import { useNurseryFlowers } from "../NurseryFlower/NurseryFlowersProvider.js"
import { useColors } from "../Colors/ColorsDataProvider.js"

const content = document.querySelector(".retailers");

export const retailerList = () => {
  const retailers = useRetailers();
  const distributors = useDistributors();
  const flowers = useFlowers();
  const nurserys = useNurserys();
  const nurseryDistributors = useNurseryDistributors();
  const nurseryFlowers = useNurseryFlowers();
  const colors = useColors();

  const render = () => {
    content.innerHTML = retailers.map(retailer => {
      // Find this retailers's distributor Filter on the NurseDistr then map over that find nursers
      const distributor = distributors.find(distributor => distributor.id === retailer.DistributorId);
      const nurseryDistributor = nurseryDistributors.filter(current => current.DistributorId === distributor.id);

      const foundNurses = nurseryDistributor.map(nd => {
        const foundNursery = nurserys.find(currentNursery => currentNursery.id === nd.NurseryId);
        return foundNursery;
      })

      const flowerArray = foundNurses.map(nursery => {
        const nurseryFlowerRelation = nurseryFlowers.filter(nf => nf.NurseryId === nursery.id);

        const foundFlowerArray = nurseryFlowerRelation.map(nfr => {
          let foundFlower = flowers.find(flower => flower.id === nfr.FlowerId);
          foundFlower.color = colors.find(color => color.id === foundFlower.colorId);
          return foundFlower;
        })
        return foundFlowerArray;
      })

      const html = retailerBuilder(retailer, distributor, foundNurses, flowerArray);
      return html;
    }).join("");
  }
  render();
}