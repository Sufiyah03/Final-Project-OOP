function buttonClicked(){

  var brand = document.getElementById("brand_input").value
  var category = document.getElementById("category_input").value

  fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&category=${category}`)
  .then((response) => response.json())
  .then((data) => {

    console.log(data);

    for(var i =0; i<5;i++){
      var newLi = document.createElement("li");
      // get the object in array
      var makeup = data[i];
       // assign the property into newLi
      newLi.innerHTML = `NAME:${makeup.name}\n<br>PRICE(RM):${makeup.price}`;
      // end to ul
      document.getElementById("display").appendChild(newLi);
    }
  })
}
