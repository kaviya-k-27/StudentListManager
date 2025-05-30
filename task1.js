let studentData=[];
function AddStudent(){
          let stdname=document.getElementById("sname").value;
          studentData.push(stdname);
          // function add(num,index,array){
          //   document.getElementById("output").innerHTML+= num + "<button> Remove </button>"+"<br>" +"<br>";
          // }
          add();
           document.getElementById("sname").value=" ";
}

function az(){
let result=studentData.sort(function(a,b){
  // alert("2");
   let lowA=a.toLowerCase();
   let lowB=b.toLowerCase();
       if(lowA<lowB) return -1; 
       if(lowA>lowB) return 1;
       if(lowA===lowB) return 0;
  });
  add();
}

function za(){
  let result=studentData.sort(function(a,b){
  // alert("2");
   let lowA=a.toLowerCase();
   let lowB=b.toLowerCase();
       if(lowA>lowB) return -1; 
       if(lowA<lowB) return 1;
       if(lowA===lowB) return 0;
  });
  add();
}

function remove(res){

  studentData.splice(res,1);
  add();
}
function add(){
    document.getElementById("output").innerHTML="";
    for(let i=0;i<studentData.length;i++){
        document.getElementById("output").innerHTML+="<div>"+studentData[i]+"<button onclick='remove("+i+")'>Remove</button>" +"</div>"+"<br>";
    }
  }