

let space='';
let NumberOfFloors= +prompt("Укажите кол-во ярусов");
if(!isNaN(NumberOfFloors)){
    for(let i=0;i<=NumberOfFloors;i++){
        
        for( let height=0;height<=NumberOfFloors-i;height++){
            space += ' '; 
        }
        for( let NumberOfElements=0;NumberOfElements<=2*i;NumberOfElements++){
            space += '*'; 
        }
        
        
     space +='\n'
    }
    console.log(space);
}