const fs = require('fs');

fs.readFile('day3input.txt', 'utf-8', (err, data)=> {
    if(err){
        console.log(err);
    }else{
        const strArray = data.split(/\r?\n/);

        console.log(strArray);

        let numStrings = strArray.length;

        let sumParts = 0, spCHar = 0, totalGearRatio = 0;

        for(let i=0; i< strArray.length; i++){
            let currStr = strArray[i];

            let strlen = currStr.length;

           // console.log("\n special char indices ==");

            for(let j=0; j< currStr.length; j++){
                let currChar = currStr[j];

                let currAscii = Number(currStr.charCodeAt(j));

                if(currAscii !== 46){

                    let startAdNumCount = 0, gearRatio = 1;
                    //second question:
                    if(currAscii == 42){
                       
                                 //check for left
                                 if(j>0){
                                     if(!isNaN(strArray[i][j-1])){
                                         let result = findWholeNumber(strArray[i], j-1);
     
                                         let fullNumber = result.fullNumber;
                                         gearRatio = gearRatio * fullNumber;
                                         startAdNumCount++;
                                     } 
                                 }
                                 
     
                                 //check for right
                                if(j < currStr.length - 1){
                                     if(!isNaN(strArray[i][j+1])){
                                         let result = findWholeNumber(strArray[i], j+1);
     
                                         let fullNumber = result.fullNumber;
                                         gearRatio = gearRatio * fullNumber;
                                         startAdNumCount++;
                                     }
                                 }
                                 
     
                                 //check for top
                                 if(i>0){
                                     if(!isNaN(strArray[i-1][j])){
                                         let result = findWholeNumber(strArray[i-1], j);
     
                                         let fullNumber = result.fullNumber;
                                         gearRatio = gearRatio * fullNumber;
                                         startAdNumCount++;
                                          //top is a number so it will include both top right and left
                                     }else{
                                         //top is not a number so there is separation between top left and top right
                                         if(j> 0){
                                             if(!isNaN(strArray[i-1][j-1])){
                                                 let result = findWholeNumber(strArray[i-1], j-1);
     
                                                 let fullNumber = result.fullNumber;
                                                 gearRatio = gearRatio * fullNumber;
                                                 startAdNumCount++;
                                             } 
                                         }
                                         
                                        if(j < currStr.length - 1){
                                             if(!isNaN(strArray[i-1][j+1])){
                                                 let result = findWholeNumber(strArray[i-1], j+1);
     
                                                 let fullNumber = result.fullNumber;
                                                 gearRatio = gearRatio * fullNumber;
                                                 startAdNumCount++;
                                             }
                                         }
                                     }
                                 }
                           
     
                                 //check for bottom
                                 if(i< numStrings -1){
                                     if(!isNaN(strArray[i+1][j])){
                                         let result = findWholeNumber(strArray[i+1], j);
     
                                         let fullNumber = result.fullNumber;
                                         gearRatio = gearRatio * fullNumber;
                                         startAdNumCount++;
                                         //bottom is a number so it will include both bottom right and left
                                     }else{
                                         //bottom is not a number so there is separation between bottom left and bottom right
                                        if(j >0){
                                             if(!isNaN(strArray[i+1][j-1])){
                                                 let result = findWholeNumber(strArray[i+1], j-1);
     
                                                 let fullNumber = result.fullNumber;
                                                 gearRatio = gearRatio * fullNumber;
                                                 startAdNumCount++;
                                             }
                                         }
                                         //check for bottom left
                                         if(j < currStr.length - 1){
                                             if(!isNaN(strArray[i+1][j+1])){
                                                 let result = findWholeNumber(strArray[i+1], j+1);
     
                                                 let fullNumber = result.fullNumber;
                                                 gearRatio = gearRatio * fullNumber;
                                                 startAdNumCount++;
                                             }
                                         }
                                     }
                                 }
                                
                                   
                             //}
                             if(startAdNumCount == 2){
                                totalGearRatio += gearRatio;
                             }
                         }

                    //first question
                    if(currAscii < 48 || currAscii > 57){
                   //  console.log(currChar, i, j); //Special char found
                     spCHar++;

                        //check for the neighbour indexes:
                        //if(i > 0 && i< numStrings && j> 0 && j < strlen){

                            //check for left
                            if(j>0){
                                if(!isNaN(strArray[i][j-1])){
                                    let result = findWholeNumber(strArray[i], j-1);

                                    let fullNumber = result.fullNumber;
                                    sumParts += fullNumber;

                                    strArray[i] = result.newStr;
                                } 
                            }
                            

                            //check for right
                           if(j < currStr.length - 1){
                                if(!isNaN(strArray[i][j+1])){
                                    let result = findWholeNumber(strArray[i], j+1);

                                    let fullNumber = result.fullNumber;
                                    sumParts += fullNumber;

                                    strArray[i] = result.newStr;
                                }
                            }
                            

                            //check for top
                            if(i>0){
                                if(!isNaN(strArray[i-1][j])){
                                    let result = findWholeNumber(strArray[i-1], j);

                                    let fullNumber = result.fullNumber;
                                    sumParts += fullNumber;

                                    strArray[i-1] = result.newStr;
                                     //top is a number so it will include both top right and left
                                }else{
                                    //top is not a number so there is separation between top left and top right
                                    if(j> 0){
                                        if(!isNaN(strArray[i-1][j-1])){
                                            let result = findWholeNumber(strArray[i-1], j-1);

                                            let fullNumber = result.fullNumber;
                                            sumParts += fullNumber;
                                    strArray[i-1] = result.newStr;
                                        } 
                                    }
                                    
                                   if(j < currStr.length - 1){
                                        if(!isNaN(strArray[i-1][j+1])){
                                            let result = findWholeNumber(strArray[i-1], j+1);

                                            let fullNumber = result.fullNumber;
                                            sumParts += fullNumber;
                                    strArray[i-1] = result.newStr;
                                        }
                                    }
                                }
                            }
                      

                            //check for bottom
                            if(i< numStrings -1){
                                if(!isNaN(strArray[i+1][j])){
                                    let result = findWholeNumber(strArray[i+1], j);

                                    let fullNumber = result.fullNumber;
                                    sumParts += fullNumber;
                                    strArray[i+1] = result.newStr;
                                    //bottom is a number so it will include both bottom right and left
                                }else{
                                    //bottom is not a number so there is separation between bottom left and bottom right
                                   if(j >0){
                                        if(!isNaN(strArray[i+1][j-1])){
                                            let result = findWholeNumber(strArray[i+1], j-1);

                                            let fullNumber = result.fullNumber;
                                            sumParts += fullNumber;
                                    strArray[i+1] = result.newStr;
                                        }
                                    }
                                    //check for bottom left
                                    if(j < currStr.length - 1){
                                        if(!isNaN(strArray[i+1][j+1])){
                                            let result = findWholeNumber(strArray[i+1], j+1);

                                            let fullNumber = result.fullNumber;
                                            sumParts += fullNumber;
                                    strArray[i+1] = result.newStr;
                                        }
                                    }
                                }
                            }
                           
                              
                        //}
                    }
                }
            }
        }

        console.log("sumParts==", sumParts, spCHar);
        console.log("totalGearRatio==", totalGearRatio);

        // fs.writeFile("day3output.txt", strArray.join('\r\n'), (err) => { 
        //     if (err) 
        //       console.log(err); 
        //     else { 
        //       console.log("File written successfully");
        //     } 
        //   }); 
      // console.log(strArray);

    }
});

function findWholeNumber(currStr, inx){
    
 //console.log("inx before==", inx);

    while(!isNaN(currStr[inx])){
        inx--;
    }

 //   console.log("inx after==", inx);

    inx++;

    let fullNumber = '';

    let currStr2 = currStr;

    while(!isNaN(currStr2[inx])){
        fullNumber += currStr[inx];
        currStr2 = currStr2.slice(0, inx) + '.' + currStr.slice(inx +1);
        inx++;
    }

    //console.log("Number(fullNumber)==", Number(fullNumber), currStr2);

    let result = { fullNumber: Number(fullNumber), newStr: currStr2 };
    
    return result;
}