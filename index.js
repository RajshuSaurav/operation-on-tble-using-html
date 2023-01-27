function addRowBottom(){
    var collumn,firstRow,row;
  var table=document.getElementById("table");
  firstRow=table.rows[0];
  row=table.insertRow(-1);
  if((table.rows.length-1)%2==0)row.className="odd";
  else row.className="even";
  collumn=row.insertCell(-1);
  collumn.innerHTML=(table.rows.length-1);
  for (let i=1;i<firstRow.cells.length;i++){
    collumn=row.insertCell(-1)
  }  
}
function addRowTop(){
    var collumn,firstRow,row;
  var table=document.getElementById("table");
  firstRow=table.rows[0];
  row=table.insertRow(1);
  row.className="even";
  collumn=row.insertCell(-1);
  collumn.innerHTML="1";
  for (let i=0;i<firstRow.cells.length-1;i++){
    collumn=row.insertCell(-1)
  } 
  for (let i=2;i<table.rows.length;i++){
    table.rows[i].cells[0].innerHTML=i;
    if((table.rows.length-1)%2==0)row.className="odd";
  else row.className="even";
  }
}