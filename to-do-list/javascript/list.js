function addItemsToList () {
    document.getElementById ("div-for-list").style.display = 'block';
    var getInputData = document.getElementById("task-input").value; //this gets our input data & stores it as a value that JS can read and assigns it to a variable.
    var creatingInputDataToText = document.createTextNode(getInputData); //this gets the data from the input and converts it to text and then stores that text as a variable.
    var listItem = document.createElement("li"); //this creates a list element and stores it as a variable
    listItem.appendChild(creatingInputDataToText); //this appends the data converted to text into the list item. 
    document.getElementById("todolist").appendChild(listItem); //this gets the ul by id and adds the listItem which has the li item with text. 
   };
   
   
   
   
   
   
   