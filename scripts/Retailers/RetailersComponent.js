export const retailerBuilder = (retailer, distributor, nurserys, flowers) => {
  return `
    <div class="retailer__Card">
      <header>
        <h2>${retailer.name}</h2>
      </header>
      <div>
      Operates in ${retailer.address} ${retailer.city}, ${retailer.state}
      </div>
      <div>
      Purchases exclusively from ${distributor.name}.
      </div>
      <div>
       ${distributor.name} sources from ${
         nurserys.map(
          nursery =>
          `
          <li>${nursery.name}</li>
          `
         ).join("")
       }
      </div>
      <div>
       ${retailer.name} currently offers ${
         flowers.map(
           flower =>
           flower.map(
             individualFlower =>
             `
             <li> ${individualFlower.color.name} ${individualFlower.name}</li>
             `
           ).join("")
         ).join("")
       }
      </div>
    </div>
  `
  }