 function ShowRecipe() {
	var output = "";

	for(var i=0; i <= menu.matches.length-1; i++){
		output += "<a data-toggle='modal' data-target='#myModalRecipe' onclick='ViewRecipe("+i+")'><div style='position: absolute; margin-top: 40px; margin-left: 20px;'><p style='color: white; font-size: 30px; font-family: fantasy'>"+menu.matches[i].recipeName+"</p></div><img class='img-thumbnail' style='width: 100%; height:100%; float: absolute' src='"+menu.matches[i].smallImageUrls+"' /></div></a><br>";
	}
	document.getElementById('output').innerHTML = output;
}


var ingredientsArray = [];
function ViewRecipe(index){
	document.getElementById('txtrecipename').value = menu.matches[index].recipeName;
	document.getElementById('txtreciperating').value = menu.matches[index].rating;
	document.getElementById('txtrecipepic').value = menu.matches[index].smallImageUrls;
	document.getElementById('viewrecipename').innerText = menu.matches[index].recipeName;
	//document.getElementById('viewreciperating').innerText = menu.matches[index].rating;
	document.getElementById('viewrecipepic').src = menu.matches[index].smallImageUrls;
	document.getElementById('txtrecipeing').value = index;


	for(var i=0; i <= menu.matches[index].ingredients.length-1; i++){
		document.getElementById('viewrecipeing').innerHTML += "<li>" + menu.matches[index].ingredients[i] + "</li>";
		ingredientsArray.push(menu.matches[index].ingredients[i]);
	}
	console.log(ingredientsArray);
  
}
var myRecipeIngredientsArray = [];
function ViewMyRecipe(index){
	
	document.getElementById('viewrecipename').innerText = recipeArray[index].recipe;
	//document.getElementById('viewreciperating').innerText = menu.matches[index].rating;
	document.getElementById('viewrecipepic').src = recipeArray[index].pic;
	document.getElementById('txtrecipenum').value = index;
	document.getElementById('txtrecipename').value = recipeArray[index].recipe;
	document.getElementById('txtreciperating').value = recipeArray[index].rating;
	document.getElementById('txtrecipepic').value = recipeArray[index].pic;
	document.getElementById('txtrecipeing').value = recipeArray[index].ingredients;


	for(var i=0 ; i<= recipeArray[index].ingredients.length-1; i++){
		document.getElementById('viewrecipeing').innerHTML += "<li>" + recipeArray[index].ingredients[i] + "</li>";
		myRecipeIngredientsArray.push(recipeArray[index].ingredients[i]);

	}
	console.log(myRecipeIngredientsArray);
	document.getElementById('myBtn').innerHTML = "<button class='btn btn-primary' data-toggle='modal' data-target='#myModalForum' onclick='ViewForForums("+index+")'> Post to Forum</button>";
  
}

var dbIngredientsList = localStorage.getItem('dbIngredientsList') || '[]' ;
var dbIngredientsArray = JSON.parse(dbIngredientsList);
console.log(dbIngredientsArray);

function SaveIngredientsOnline(){

	var dbIngredientsObject = {
    ingredients : ingredientsArray

  };

  dbIngredientsArray.push(dbIngredientsObject);
  localStorage.setItem('dbIngredientsList', JSON.stringify(dbIngredientsArray) );
  console.log(ingredientsArray);
}

var recipeList = localStorage.getItem('recipeList') || '[]' ;
var recipeArray = JSON.parse(recipeList);
console.log(recipeArray);

function SaveRecipe(){

  var recipe = document.getElementById('txtrecipename').value;
  var rating = document.getElementById('txtreciperating').value;
  var pic = document.getElementById('txtrecipepic').value;
  var id = document.getElementById('txtrecipenumber').value;
  var ingredients = ingredientsArray;

  var recipeObject = {
    recipe : recipe,
    rating: rating,
    pic: pic,
    id: id,
    ingredients: ingredients


  };

  recipeArray.push(recipeObject);
  localStorage.setItem('recipeList', JSON.stringify(recipeArray) );
  alert('Recipe Saved!');
  console.log(recipeObject.ingredients);
  location.href="myrecipe.html";
}

function LoadRecipe(){
	var output ="";
	for(var i = recipeArray.length-1; i >= 0; i--){
		
		output += "<a data-toggle='modal' data-target='#myModalMyRecipe' onclick='ViewMyRecipe("+i+")'><div style='position: absolute; width:100%; height: auto;'><p style='color: white;margin-top:40px;margin-left: 20px;position: absolute; font-size: 30px; font-family: fantasy'>"+recipeArray[i].recipe+"</p><img class='img-thumbnail' style='width: 100%; height:auto; float: absolute' src='"+recipeArray[i].pic+"' /></a><br>";
	}

	document.getElementById('output').innerHTML = output;
}




var shoppingList = localStorage.getItem('shoppingList') || '[]' ;
var shoppingArray = JSON.parse(shoppingList);
console.log(shoppingArray);

function AddShoppingRecipe(){

  var recipe = document.getElementById('txtrecipename').value;
  var rating = document.getElementById('txtreciperating').value;
  var pic = document.getElementById('txtrecipepic').value;
  var id = document.getElementById('txtrecipenumber').value;
  var ingredients = ingredientsArray;

  var shoppingObject = {
    recipe : recipe,
    rating: rating,
    pic: pic,
    id: id,
    ingredients: ingredients

  };

  shoppingArray.push(shoppingObject);
  localStorage.setItem('shoppingList', JSON.stringify(shoppingArray) );
  alert('Saved to Shopping List!');
  location.href="shoppinglist.html";
}

function LoadShoppingRecipe(){
	var output ="";
	for(var i = shoppingArray.length-1; i >= 0; i--){
		
		output += "<a data-toggle='collapse' data-target='#demo"+i+"' onclick='LoadIngredientsArray("+i+")'><div class='row'><div style='width:100%; height:80px;border: solid 2px'><img src='"+shoppingArray[i].pic+"' class='col-xs-2' style='width:120px;height:75px;'><h4 class='col-xs-4' style='margin-left:-20px;'>"+shoppingArray[i].recipe.substring(0,20)+"...</h4></a><div style='margin-top:20px;'><a onclick='DeleteShoppingRecipe("+i+")' class='col-xs-2'><i class='fa fa-trash-o fa-2x'></i></a><a onclick='DoneShopping("+i+")'><i class='fa fa-check-square fa-2x col-xs-2'></i></a></div></div></div><div id='demo"+i+"' class='collapse'><h4 id='shoppingname"+i+"'></h4><ul id='listingredients"+i+"'></ul></div><input type='hidden' id='txtshoppingname' value='"+shoppingArray[i].recipe+"'><input type='hidden' id='txtshoppingpic' value='"+shoppingArray[i].pic+"'>";
	}

	document.getElementById('output').innerHTML = output;
}

function SearchRecipe(){
	var searchrecipe = document.getElementById('txtSearchBox').value;
	console.log(searchrecipe);
	var output = "";
	var str;
	var temp;
	for(var i = menu.matches.length-1; i >= 0; i-- ){
		str = (menu.matches[i].recipeName).toLowerCase();
		temp = str.search(searchrecipe);
		if(temp >= 0){
			output += "<a data-toggle='modal' data-target='#myModalRecipe' onclick='ViewRecipe("+i+")'><div style='position: absolute; margin-top: 40px; margin-left: 20px;'><p style='color: white; font-size: 30px; font-family: fantasy'>"+menu.matches[i].recipeName+"</p></div><img class='img-thumbnail' style='width: 100%; height:100%; float: absolute' src='"+menu.matches[i].smallImageUrls+"' /></div></a><br>";
		}
	}
	document.getElementById('searchoutput').innerHTML = output;
}

function LoadIngredientsArray(index){

	var a = "listingredients" + index;
	var b = "shoppingname" + index;
	var output = "";
	for(var i = shoppingArray[index].ingredients.length-1; i >= 0; i--){
		document.getElementById(b).innerText = shoppingArray[index].recipe;
		output += "<label><input type='checkbox' id='checkbox"+i+"' value='"+shoppingArray[index].ingredients[i]+"'> "+shoppingArray[index].ingredients[i]+"</label><br><br>";
	}
	document.getElementById(a).innerHTML = output;
}

function DeleteShoppingRecipe(index){
  if(confirm("Are you sure?") == true){
  shoppingArray.splice(index, 1);
  localStorage.setItem('shoppingList', JSON.stringify(shoppingArray));
 LoadShoppingRecipe();
  location.href="shoppinglist.html";
  }
  
}

var doneShoppingList = localStorage.getItem('doneShoppingList') || '[]' ;
var doneShoppingArray = JSON.parse(doneShoppingList);
console.log(doneShoppingArray);

function DoneShopping(index){
	var shoppingname = document.getElementById('txtshoppingname').value;
	var shoppingpic = document.getElementById('txtshoppingpic').value;

	var a = "checkbox";
	var checkIngredients = [];
	for(var i = shoppingArray[index].ingredients.length-1; i>=0;i--){
		a = "checkbox" + i;
		if(document.getElementById(a).checked == true){
			checkIngredients.push(document.getElementById(a).value);
		}
	}

	var doneShoppingObject = {
    shoppingname : shoppingname,
    shoppingpic: shoppingpic,
    shoppingingredients: checkIngredients

  };

  doneShoppingArray.push(doneShoppingObject);
  localStorage.setItem('doneShoppingList', JSON.stringify(doneShoppingArray) );
  alert('Store to Done Shopping List!');

  shoppingArray.splice(index, 1);
  localStorage.setItem('shoppingList', JSON.stringify(shoppingArray));
  LoadShoppingRecipe();
}

function LoadDoneShoppingList(){
	var output ="";
	var item = "";
	for(var i = doneShoppingArray.length-1; i >= 0; i--){
		output += "<a data-toggle='collapse' data-target='#demo"+i+"' onclick='LoadDoneIngredientsArray("+i+")'><div class='row'><div style='width:100%; height:80px;border: solid 2px'><img src='"+doneShoppingArray[i].shoppingpic+"' class='col-xs-2' style='width:120px;height:75px;'><h4 class='col-xs-4' style='margin-left:-20px;'>"+doneShoppingArray[i].shoppingname.substring(0,20)+"...</h4></a><div style='margin-top:20px;'><a onclick='DeleteDoneShoppingRecipe("+i+")' class='col-xs-2'><i class='fa fa-trash-o fa-2x'></i></a></div></div></div><div id='demo"+i+"' class='collapse'><h4 id='doneshoppingname"+i+"'></h4><ul id='donelistingredients"+i+"'></ul></div>";
	}
	for(var i= doneShoppingItemArray.length-1;i>=0;i--){
		item += "<li>"+doneShoppingItemArray[i]+"</li><br>";
	}
	document.getElementById('listadditionalitems').innerHTML= item;
	document.getElementById('output').innerHTML = output;
}

function LoadDoneIngredientsArray(index){

	var a = "donelistingredients" + index;
	var b = "doneshoppingname" + index;
	var output = "";
	for(var i = doneShoppingArray[index].shoppingingredients.length-1; i >= 0; i--){
		document.getElementById(b).innerText = doneShoppingArray[index].shoppingname;
		output += "<li>"+doneShoppingArray[index].shoppingingredients[i]+"</li>";
	}
	document.getElementById(a).innerHTML = output;
}

function DeleteDoneShoppingRecipe(index){
	if(confirm("Are you sure?") == true){
	  	doneShoppingArray.splice(index, 1);
	  	localStorage.setItem('doneShoppingList', JSON.stringify(doneShoppingArray));
	 	LoadDoneShoppingList();
  }
  
}
var shoppingItemList = localStorage.getItem('shoppingItemList') || '[]' ;
var shoppingItemArray = JSON.parse(shoppingItemList);
console.log(shoppingItemArray);

function AddShoppingItem(){
	var shoppingitem = document.getElementById('txtItem').value;

	var shoppingItemObject = {
    shoppingitem : shoppingitem,
    
  };

  shoppingItemArray.push(shoppingItemObject);
  localStorage.setItem('shoppingItemList', JSON.stringify(shoppingItemArray) );
  document.getElementById('txtItem').value = "";
  alert('Added!');
  LoadShoppingItem();
}

function LoadShoppingItem(){
	var output ="";
	for(var i = shoppingItemArray.length-1; i >= 0; i--){
		
		output += "<div class='row' style='margin-top: 5px;'><label class='col-xs-9'><input class='col-xs-2' type='checkbox' id='checkbox"+i+"' value='"+shoppingItemArray[i].shoppingitem+"'> "+shoppingItemArray[i].shoppingitem+"</label><a class='col-xs-1' onclick='DeleteAdditionalItems("+i+")'><i class='fa fa-trash-o fa-2x'></i></a></div><br>";
	}

	document.getElementById('listadditionalitems').innerHTML = output;
}

function DeleteAdditionalItems(index){
	var a = "Are you sure you want to delete " + shoppingItemArray[index].shoppingitem + "?";
	if(confirm(a) == true){
	  	shoppingItemArray.splice(index, 1);
	  	localStorage.setItem('shoppingItemList', JSON.stringify(shoppingItemArray));
	 	LoadShoppingItem();
  }

}
var doneShoppingItemList = localStorage.getItem('doneShoppingItemList') || '[]' ;
var doneShoppingItemArray = JSON.parse(doneShoppingItemList);
console.log(doneShoppingItemArray);

function DoneShoppingItems(index){
	var a = "";
	for(var i = shoppingItemArray.length-1; i>=0;i--){
		a = "checkbox" + i;
		if(document.getElementById(a).checked == true){
			doneShoppingItemArray.push(document.getElementById(a).value);
			console.log(doneShoppingItemArray);
		}
	}
  localStorage.setItem('doneShoppingItemList', JSON.stringify(doneShoppingItemArray) );
  alert('Store to Done Shopping List!');

  for(var i = shoppingItemArray.length-1; i >=0;i--){
  shoppingItemArray.splice(shoppingItemArray.length-1, 1);
	}
  localStorage.setItem('shoppingItemList', JSON.stringify(shoppingItemArray));
  LoadShoppingItem();
}

function DeleteDoneShoppingItem(){
	if(confirm("Are you sure?") == true){
	  	
	  	localStorage.setItem('doneShoppingItemList', "");
	 	LoadDoneShoppingList();
	 	location.href="archives.html";
  }
}

var addMyRecipeIngredientsArray = [];

function AddMyRecipeIngredients(){
var ingVar = "";

	var recipeIngredients = document.getElementById('txtAddMyRecipeIngredients').value;
	if(recipeIngredients != ""){
		addMyRecipeIngredientsArray.push(recipeIngredients);

		document.getElementById('txtAddMyRecipeIngredients').value = "";
		console.log(addMyRecipeIngredientsArray);
	for(var i = addMyRecipeIngredientsArray.length-1; i >= 0; i--){
		ingVar += "<i class='fa fa-plus fa-2x col-xs-1'></i><h4 class='col-xs-10' style='margin-top:-1px;'>"+addMyRecipeIngredientsArray[i]+"</h4><a onclick=''><i class='fa fa-trash-o fa-2x'></i></a>";
	}
	document.getElementById('divAddMyRecipeIngredients').innerHTML = ingVar;
	}else{
		$('#btnAddMyRecipeIngredients').popover();
	}
}


var myRecipeList = localStorage.getItem('myRecipeList') || '[]' ;
var myRecipeArray = JSON.parse(myRecipeList);
console.log(myRecipeArray);

function AddMyRecipe(){
	var myRecipeName = document.getElementById('txtAddMyRecipeName').value;
	
	var myRecipeObject = {
    myRecipe : myRecipeName,
    myIngredients: addMyRecipeIngredientsArray,
    myPhoto: localStorage.getItem('addpic')
  };

  myRecipeArray.push(myRecipeObject);
  localStorage.setItem('myRecipeList', JSON.stringify(myRecipeArray) );
  alert('Added!');
  location.href='myrecipe.html';
}

function LoadMyRecipe(){
	var output = "";

	for(var i= myRecipeArray.length-1;i>=0; i--){
		output += "<div style='position: absolute; margin-top: 40px; margin-left: 20px;'><p style='color: white; font-size: 30px; font-family: fantasy'>"+myRecipeArray[i].myRecipe+"</p></div><img class='img-thumbnail' style='width: 100%; height:100%; float: absolute' src='"+myRecipeArray[i].myPhoto+"' /></div></a><br>";

	}
	document.getElementById('output2').innerHTML = output;
}


var ingForumArray = [];
function ViewForForums(index){

	document.getElementById('viewNameForum').innerText = recipeArray[index].recipe;
	//document.getElementById('viewreciperating').innerText = menu.matches[index].rating;
	document.getElementById('viewImgForum').src = recipeArray[index].pic;
	document.getElementById('txtNameForum').value = recipeArray[index].recipe;
	document.getElementById('txtImgForum').value = recipeArray[index].pic;
	document.getElementById('txtIngForum').value = recipeArray[index].ingredients;
	

	
	for(var i= recipeArray[index].ingredients.length-1; i>= 0; i--){
		document.getElementById('viewIngForum').innerHTML += "<li>" + recipeArray[index].ingredients[i] + "</li>";
		ingForumArray.push(recipeArray[index].ingredients[i]);
	}
}

