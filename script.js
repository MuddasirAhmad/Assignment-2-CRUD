
 var data1 = [];  
create = function(){
    
     
   var name = document.getElementById("name").value;
   data1[0] = name;
   data1.push(data1[0]);
  document.getElementById("lname").innerHTML=data1[0];


     var fname =document.getElementById("fName").value;
    data1[1]= fname;
    data1.push(data1[1]);
    document.getElementById("lfname").innerHTML= data1[1];
    

    var cntct = document.getElementById("cntct").value;
    data1[2]=cntct;
    data1.push(data1[2]);
    document.getElementById("lcntct").innerHTML = data1[2];
    
    
    
    
    form.reset();
    
}


Edit = function(){

 
document.getElementById("name").value=data1[0];
document.getElementById("fName").value=data1[1];
document.getElementById("cntct").value=data1[2];
    

}



Del = function(){
  data1[0]="";
  data1[1]="";
  data1[2]="";
   document.getElementById("lname").innerHTML=data1[0];
    document.getElementById("lfname").innerHTML= data1[1];
     document.getElementById("lcntct").innerHTML = data1[2];

}
