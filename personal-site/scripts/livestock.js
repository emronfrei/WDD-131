const cowsForSale = [
    {
      id: 1,
      name: "Bessie",
      breed: "Angus",
      age: 3,
      weight: 1200,
      price: 1800,
      description: "Healthy Angus cow, great temperament, pasture-raised.",
      image: "images/bessie.jpeg"
    },
    {
      id: 2,
      name: "Daisy",
      breed: "Hereford",
      age: 4,
      weight: 1300,
      price: 2000,
      description: "Strong Hereford cow, excellent for breeding.",
      image: "images/dasiy.jpeg"
    },
    {
      id: 3,
      name: "Molly",
      breed: "Holstein",
      age: 2,
      weight: 1100,
      price: 1700,
      description: "Young dairy cow with high milk production potential.",
      image: "images/molly.jpeg"
    },
    {
      id: 4,
      name: "Rosie",
      breed: "Jersey",
      age: 3,
      weight: 900,
      price: 1600,
      description: "Produces rich, high-butterfat milk.",
      image: "images/rosie.jpeg"
    },
    {
      id: 5,
      name: "Luna",
      breed: "Simmental",
      age: 5,
      weight: 1400,
      price: 2200,
      description: "Large frame, ideal for beef production.",
      image: "images/luna.jpeg"
    },
    {
      id: 6,
      name: "Bella",
      breed: "Charolais",
      age: 4,
      weight: 1500,
      price: 2300,
      description: "Fast growth rate, excellent meat quality.",
      image: "images/bella.jpeg"
    },
    {
      id: 7,
      name: "Sadie",
      breed: "Limousin",
      age: 3,
      weight: 1350,
      price: 2100,
      description: "Lean beef, efficient feed conversion.",
      image: "images/sadie.jpeg"
    },
    {
      id: 8,
      name: "Ruby",
      breed: "Red Angus",
      age: 2,
      weight: 1150,
      price: 1750,
      description: "Calm temperament, great for small farms.",
      image: "images/ruby.jpeg"
    },
    {
      id: 9,
      name: "Willard",
      breed: "Highland",
      age: 6,
      weight: 1000,
      price: 2500,
      description: "Hardy breed, thrives in harsh climates.",
      image: "images/willard.jpeg"
    },
    {
      id: 10,
      name: "Hazelnut",
      breed: "Brown Swiss",
      age: 4,
      weight: 1250,
      price: 1950,
      description: "Great dairy cow with consistent production.",
      image: "images/hazelnut.jpeg"
    }
  ];
  const main_grid = document.querySelector("#main-grid");

  function displayCows(list) {
      main_grid.innerHTML = "";
      list.forEach(cow => {
          main_grid.innerHTML += `
          <div class="cow-box" id="cow-${cow.id}">
              <img src="${cow.image}" alt="${cow.name}">
              <p>Name: ${cow.name}</p>
              <p>Age: ${cow.age}</p>
              <p>Weight: ${cow.weight} lbs</p>
              <p>Breed: ${cow.breed}</p>
              <p>Description: ${cow.description}</p>
              <p>Price: $${cow.price}</p>
          </div>`;
      });
  }
  
  function searchCows() {
      const query = document.querySelector("#search").value.toLowerCase();
      const filtered = cowsForSale.filter(cow =>
          cow.breed.toLowerCase().includes(query) ||
          cow.description.toLowerCase().includes(query) ||
          cow.price.toLowerCase().includes(query)
      );
      displayCows(filtered);
  }
  
  displayCows(cowsForSale);
  
  document.querySelector("#search").addEventListener("input", searchCows);

  console.log(cowsForSale);
console.log(main_grid);


