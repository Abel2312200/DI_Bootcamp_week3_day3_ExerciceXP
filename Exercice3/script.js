function allowDrop(event) {
    event.preventDefault(); // Necessary. Allows us to drop.
  }
  
  //add dashes
  function allowEnter(event) {
    event.target.classList.add('over');
  }
  
  //remove dashes
  function allowLeave(event) {
    event.target.classList.remove('over');
  }
  
  function dragStart(event) {
  //set the data to be dragged
  console.log("target:",  event.target)
  console.log("id: ",  event.target.id ) // id: square1
  event.dataTransfer.setData("text", event.target.id);
  }
  
  function dragDrop(event) {
  
  event.preventDefault();
  // retrieve the data dragged
    
  let data = event.dataTransfer.getData("text");
  console.log("data: ",  data) 
  
  let box = document.getElementById(data)
  event.target.appendChild(box);
  }
  
