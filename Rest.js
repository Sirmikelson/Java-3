// saving the data
const menu = [
    {
      image: "./images/Piza.jpg",
      title: "Pasta Pizza",
      price: 2300,
      category: 'breakfast'
    },
    {
      image: "./images/Rice.jpg",
      title: "Salad and Rice",
      price: 2700,
      category: 'breakfast'
    },
    {
      image: "./images/fruit-meal.jpg",
      title: "Fruit Meal",
      price: 2200,
      category: 'breakfast'
    },
    {
      image: "./images/morning juice.jpg",
      title: "Morning Juice",
      price: 2400,
      category: 'breakfast'
    },
    {
      image: "./images/Bread.jpg",
      title: "Bread and Sausage",
      price: 2000,
      category: 'lunch'
    },
    {
      image: "./images/love banquet.jpg",
      title: "Love Banquet",
      price: 3300,
      category: 'lunch'
    },
    {
      image: "./images/canadian piza.jpg",
      title: "Canadian Pizza-cury",
      price: 2200,
      category: 'lunch'
    },
    {
      image: "./images/Powdered meal.jpg",
      title: "Power Powder",
      price: 1800,
      category: 'lunch'
    },
    {
      image: "./images/jollof.jpg",
      title: "Family Jolof-Rice",
      price: 2800,
      category: 'dinner'
    },
    {
      image: "./images/Cereal meal.jpg",
      title: "Cereal Meal",
      price: 2200,
      category: 'dinner'
    },
    {
      image: "./images/Pounded yam.jpg",
      title: "Pounded Yam",
      price: 2400,
      category: 'dinner'
    },
  ];
  
  let catBtn = document.querySelectorAll('.js-btn');
  
  // looping through the button.
  catBtn.forEach((button) => {
    button.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.category;
      const menuCat = menu.filter((menuItem) => {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
       
      });
  
      console.log(menuCat);
      if (category === "All") {
        menuList(menu);
      } else {
        menuList(menuCat);
      }
      
    });
    
  });
  
  
  // function that loops through the array
  const menuList = (menuFood) => {
    let menuHTML = menuFood.map((menus) => {
      return `
      <div class="mb-3 col-md-6" style="max-width: 540px;">
        <div class="row g-0 justify-content-between">
          <div class="col-md-5 pe-3">
            <img src="${
              menus.image
            }" style="width: 100%; height: 150px;" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-7">
            <div class="">
               <div class=" d-flex justify-content-between">
                <h5>
                  ${menus.title}
                </h5>
                <p>₦${menus.price}</p>
              </div>
              <p class="">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class=""><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    `;
    });
    
    document.querySelector(".js-menu-container").innerHTML = menuHTML;
  };
  menuList(menu);