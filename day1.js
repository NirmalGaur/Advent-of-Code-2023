const fs = require('fs');

function calcTotal(currStr, firstNum, lastNum, firstNumInx, lastNumInx){

  // console.log("currStr==", currStr);

    let flag1 = 0, flag2 = currStr.length -1, firstDig = false, secondDig = false, twoDigStr, firstDigInx, secondDigInx;

    for(let j=0; j< currStr.length; j++){

        // console.log("firstDig==", firstDig, flag1);
        // console.log("secondDig==", secondDig, flag2);

        if((flag1 > flag2) && isNaN(currStr[flag1])){
            twoDigStr = 0;
            break;
        }

        if(isNaN(currStr[flag1])){
            flag1++;
        }else{
            firstDig = currStr[flag1];
            firstDigInx = flag1;
        }

        if(isNaN(currStr[flag2])){
            flag2--;
        }else{
            secondDig = currStr[flag2];
            secondDigInx = flag2;
        }
        
        if(firstDig && secondDig){
            break;
        }
    }

        if(firstDig && secondDig){ //once  both are found

            // console.log("firstDigInx==", firstDigInx);
            // console.log("secondDigInx==", secondDigInx);

            if(firstDigInx > firstNumInx){ //index of first numerical number found is greater the index of first alphabetical number
                firstDig = firstNum;
            }
        
            if(secondDigInx < lastNumInx){
                secondDig = lastNum
            }
            twoDigStr = `${firstDig}${secondDig}`;

        }else{

            firstDig = firstNum;
            secondDig = lastNum;
        }

    //console.log("firstDig, secondDig>>>", firstDig, secondDig);

    console.log("twoDigStr===>>", Number(twoDigStr));

    return Number(twoDigStr);
}

fs.readFile('day1input.txt', 'utf-8', (err, data)=> {
    if(err){
        console.log("error", err);
    }else{
        //console.log("data==", data);

        let strArray = data.split(/\r?\n/);
       console.log(strArray.length);

        let totalSum = 0, totalSum2 = 0;

        // for(let i=0 ; i< strArray.length; i++){

        //     let currStr = strArray[i];

        //     //FIRST PROBLEM LOGIC
        //     console.log("calcTotal(currStr)==", calcTotal(currStr));
        //     totalSum += calcTotal(currStr);
            
        // }
        // console.log("totalSum==", totalSum);


        for(let i=0 ; i< strArray.length; i++){

            let currStr = strArray[i];


            let indexObj = [
                {
                    num: "one",
                    ind: 0,
                    lastInd: 0,
                },
                {
                    num: "two",
                    ind: 0,
                    lastInd: 0,
                },
                {
                    num: "three",
                    ind: 0,
                    lastInd: 0,
                },
                {
                    num: "four",
                    ind: 0,
                    lastInd: 0,
                },
                {
                    num: "five",
                    ind: 0,
                    lastInd: 0,
                },
                {
                    num: "six",
                    ind: 0,
                    lastInd: 0,
                },
                {
                    num: "seven",
                    ind: 0,
                    lastInd: 0,
                },
                {
                    num: "eight",
                    ind: 0,
                    lastInd: 0,
                },
                {
                    num: "nine",
                    ind: 0,
                    lastInd: 0,
                }
            ]

            let minInd = 999999999999, maxInd = -999999999999, minAlp, maxAlp;

            //console.log("indexObj.length==", indexObj.length);

            for(let k=0; k < indexObj.length; k++){
                
                let index = currStr.indexOf(indexObj[k].num);

                let lastIndex = currStr.lastIndexOf(indexObj[k].num);

                    //  console.log("index==", index);
                    indexObj[k].ind = index;
                    indexObj[k].lastInd = lastIndex;

                    if(index >=0 && index <= minInd){
                        minInd = index;
                        minAlp = k;
                    }
                    if(lastIndex >=0 && lastIndex >= maxInd){
                        maxInd = lastIndex;
                        maxAlp = k;
                    }

                //console.log(index, minInd, maxInd);
             
            }

          console.log(currStr);

         //  console.log("indexObj==", indexObj);
        // console.log("minAlp, maxAlp===" , minAlp, maxAlp);

          let firstNum, lastNum, firstNumInx, lastNumInx;

          if(minAlp>=0 && maxAlp>=0){
            firstNum = minAlp + 1, lastNum = maxAlp + 1, firstNumInx = indexObj[minAlp].ind, lastNumInx = indexObj[maxAlp].lastInd;
          }

            let currStr2 = currStr;

            // if(minAlp>=0 && maxAlp>=0){

            //     let minChange = indexObj[minAlp].num;
            //     let maxChange = indexObj[maxAlp].num;

            //     currStr2 = currStr2.replace(minChange, `${minAlp+1}`);

            // //     let lastStrStartIndex = indexObj[maxAlp].lastInd;
            // //     let lastStrEndIndex = lastStrStartIndex + maxChange.length;

            // // //    console.log(lastStrStartIndex, lastStrEndIndex);

            // //     currStr2 = currStr2.slice(0, lastStrStartIndex) + `${maxAlp+1}` + currStr2.slice(lastStrEndIndex)

            //     currStr2 = currStr2.replaceAll(maxChange, `${maxAlp+1}`);

            // }
           

       // console.log("firstNum, lastNum, firstNumInx, lastNumInx==", firstNum, lastNum, firstNumInx, lastNumInx);

            //SECOND PROBLEM LOGIC
        // console.log(currStr2, calcTotal(currStr2));

             totalSum2 += calcTotal(currStr2, firstNum, lastNum, firstNumInx, lastNumInx);
            
        }

        console.log("totalSum2==", totalSum2);

    }
})