// JavaScript source code
console.log("Script is running")

// when called this function will add a drop down menu
function dropDown() {
    console.log("adding drop down list")

    var dropDownDiv = document.createElement("div"); // creates a div element to put everything into
    dropDownDiv.className = "dropdownDiv"; // assigning classname to access element in css file

    var button = document.createElement("button"); // drop down list button
    button.className = "dropbtn";
    button.innerHTML = "Choose country";

    var fullList = document.createElement("li"); // list to place al items in
    fullList.id = "dropdown-content"; // assigning id to get this element later on
    fullList.className = "dropdown-content"; // assigning classname for css file, and also window.onclick event

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

    button.addEventListener("click",
        function dropTheList() {
            document.getElementById("dropdown-content").classList.toggle("show");
        })
    
    // event to close dropdown list when clicking anywhere else 
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    //  adding all elements to document body
    button.appendChild(fullList);
    dropDownDiv.appendChild(button);
    document.body.appendChild(dropDownDiv);

}

dropDown();