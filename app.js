const obj1 = document.getElementById("card-1")
const arr1 = [
    {
        id: 4,
        title: "Gaming Keyboard",
        price: 205,
        description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        Image_url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71iDGXTqcUL._AC_UL400_.jpg",
        product_oder: "Buy now"
      }
  ];
  
  const modifiedArray1 = arr1.map((obj) => {
    const productDetails = {
      title: "Gaming Keyboard",
      price: 205,
      description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7-Color RGB LED Back-lighting for smart functionality",
      Image_url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71iDGXTqcUL._AC_UL400_.jpg",
      product_order: "Buy now",
    };
    return { ...obj, ...productDetails };
  });
  
  for (let i = 5; i < modifiedArray1.length; i++) {
    const cardHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${modifiedArray1[i].Image_url}" class="card-img-top" alt="....">
        <div class="card-body">
          <h5 class="card-title">${modifiedArray1[i].title}</h5>
          <p class="card-text">${modifiedArray1[i].description}</p>
          ${modifiedArray1[i].price}
          <a href="#" class="btn btn-primary">${modifiedArray1[i].product_order}</a>
        </div>
      </div>`;
  }
  

console.log(arr1);


const obj2 = document.getElementById("card-2")
const arr2 = [
    {
        id: 4,
        title: "Ergonomic Wooden Tuna",
        price: 2000,
        description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles.",
        Image_url: "https://i.imgur.com/mp3rUty.jpeg",
        product_oder: "Buy now"
      }
  ];
  
  const modifiedArray2 = arr2.map((obj) => {
    const productDetails = {
      title: "Ergonomic Wooden Tuna",
      price: 2000,
      description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles.",
      Image_url: "https://i.imgur.com/mp3rUty.jpeg",
      product_order: "Buy now",
    };
    return { ...obj, ...productDetails };
  });
  
  for (let i = 5; i < modifiedArray2.length; i++) {
    const cardHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${modifiedArray2[i].Image_url}" class="card-img-top" alt="....">
        <div class="card-body">
          <h5 class="card-title">${modifiedArray2[i].title}</h5>
          <p class="card-text">${modifiedArray2[i].description}</p>
          ${modifiedArray2[i].price}
          <a href="#" class="btn btn-primary">${modifiedArray2[i].product_order}</a>
        </div>
      </div>`;
  }
  

console.log(arr2);



const obj3 = document.getElementById("card-3")
const arr3 = [
    {
        id: 4,
        title: "Electronic Bronze Chips",
        price: "1,000,000",
        description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive.",
        Image_url: "https://chipscapes.com/cdn/shop/products/A_3b711ee2-a484-4e8f-8af8-0dc443134c18_800x.jpg?v=1637756967",
        product_oder: "Buy now"
      }
  ];
  
  const modifiedArray3 = arr3.map((obj) => {
    const productDetails = {
      title: "Electronic Bronze Chips",
      price: "1,000,000",
      description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive.",
      Image_url:"https://chipscapes.com/cdn/shop/products/A_3b711ee2-a484-4e8f-8af8-0dc443134c18_800x.jpg?v=1637756967",
      product_order: "Buy now",
    };
    return { ...obj, ...productDetails };
  });
  
  for (let i = 5; i < modifiedArray3.length; i++) {
    const cardHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${modifiedArray3[i].Image_url}" class="card-img-top" alt="....">
        <div class="card-body">
          <h5 class="card-title">${modifiedArray3[i].title}</h5>
          <p class="card-text">${modifiedArray3[i].description}</p>
          ${modifiedArray3[i].price}
          <a href="#" class="btn btn-primary">${modifiedArray3[i].product_order}</a>
        </div>
      </div>`;
  }
  

console.log(arr3);



const obj4 = document.getElementById("card-4")
const arr4 = [
    {
        id: 4,
        title: "Awesome Bronze Car",
        price: 300,
        description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals.",
        Image_url: "https://i.imgur.com/cBuLvBi.jpeg",
        product_oder: "Buy now"
      }
  ];
  
  const modifiedArray4 = arr4.map((obj) => {
    const productDetails = {
      title: "Awesome Bronze Car",
      price: 300,
      description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals.",
      Image_url:"https://i.imgur.com/cBuLvBi.jpeg",
      product_order: "Buy now",
    };
    return { ...obj, ...productDetails };
  });
  
  for (let i = 5; i < modifiedArray4.length; i++) {
    const cardHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${modifiedArray4[i].Image_url}" class="card-img-top" alt="....">
        <div class="card-body">
          <h5 class="card-title">${modifiedArray4[i].title}</h5>
          <p class="card-text">${modifiedArray4[i].description}</p>
          ${modifiedArray4[i].price}
          <a href="#" class="btn btn-primary">${modifiedArray4[i].product_order}</a>
        </div>
      </div>`;
  }
  

console.log(arr4);



const obj = document.getElementById("card-5")
const arr = [
    {
        id: 4,
        title: "Dell XPS 13 9370ari",
        price: 30000,
        description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016.",
        Image_url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61JBVg+AIKL._AC_SX679_.jpg",
        product_oder: "Buy now"
      }
  ];
  
  const modifiedArray = arr.map((obj) => {
    const productDetails = {
      title: "Dell XPS 13 9370",
      price: 30000,
      description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016.",
      Image_url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61JBVg+AIKL._AC_SX679_.jpg",
      product_order: "Buy now",
    };
    return { ...obj, ...productDetails };
  });
  
  for (let i = 5; i < modifiedArray.length; i++) {
    const cardHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${modifiedArray[i].Image_url}" class="card-img-top" alt="....">
        <div class="card-body">
          <h5 class="card-title">${modifiedArray[i].title}</h5>
          <p class="card-text">${modifiedArray[i].description}</p>
          ${modifiedArray[i].price}
          <a href="#" class="btn btn-primary">${modifiedArray[i].product_order}</a>
        </div>
      </div>`;
  }
  

console.log(arr);
