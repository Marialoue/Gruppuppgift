// JavaScript source code
console.log("Script is running")

// when called this function will add a drop down menu
function dropDown(){
    console.log("adding drop down list")

    var dropDownDiv = document.createElement("div"); // creates a div element to put drop down list into
    var button = document.createElement("button"); // drop down list button
    button.innerHTML= "Choose country";
    
    var fullList = document.createElement("li"); // list to place al items in

    // will be replaced by mockAPI countries
    var item = [ 
        ["country 1"],
        ["country 2"],
        ["country 3"],
        ["country 4"],
        ["country 5"],
        ["country 6"]
    ]
    // iterate a list using a for loop
    for (var i = 0; i < item.length; i++) {
        var listItem = document.createElement("p"); // creating paragraph element 
        listItem.appendChild(document.createTextNode(item[i])); // adding item from list to paragraph 
        fullList.appendChild(listItem); // adding paragraph to list element
    }

    button.addEventListener ("click",
    function(){
        
    })

    //  ading al elements to document body
    button.appendChild(fullList);
    dropDownDiv.appendChild(button);
    document.body.appendChild(dropDownDiv);

}

dropDown();



