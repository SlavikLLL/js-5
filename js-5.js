

let space='';
let NumberOfFloors= +prompt("Укажите кол-во ярусов");
if(!isNaN(NumberOfFloors)){
    for(let i=1;i<=NumberOfFloors;i++){
        
        for( let height=i;height<=NumberOfFloors;height++){
            space += ' '; 
        }
        for( let NumberOfElements=i;NumberOfElements<=2*i-1;NumberOfElements++){
            space += '* '; 
        }
        
        
     space +='\n'
    }
    console.log(space);
}