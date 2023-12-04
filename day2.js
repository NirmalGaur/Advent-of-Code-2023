const fs = require('fs');

fs.readFile('day2input.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    }else{

        let inputStrArr = data.split(/\r?\n/);
        console.log(inputStrArr.length);
        //console.log(inputStrArr);

        let totalGameID = 0, totalGamePower = 0;

        for(let i=0; i< inputStrArr.length; i++){

           // console.log(inputStrArr[i]);
            
            if(currGameID(inputStrArr[i])){
                totalGameID += (i+1);
            }

            totalGamePower += currGamePower(inputStrArr[i]);
        }

        console.log("totalGameID =", totalGameID);

        console.log("totalGamePower =", totalGamePower);

    }
});

//First question:
function currGameID(str){

    let numBlue = 14, numGreen = 13, numRed = 12;
    let newStr = str.slice(str.indexOf(':')+1);

    newStr = newStr.replaceAll(';', ',');

    let cubeArray = newStr.split(', ');

    for(let i=0; i< cubeArray.length; i++){
        let currCube = cubeArray[i];

        if(currCube.includes('green')){
            let greenCubeNum = currCube.replace(' green', '');
            if(Number(greenCubeNum) > numGreen) return false;
        }
        if(currCube.includes('red')){
            let redCubeNum = currCube.replace(' red', '');
            if(Number(redCubeNum) > numRed) return false;
        }
        if(currCube.includes('blue')){
            let blueCubeNum = currCube.replace(' blue', '');
            if(Number(blueCubeNum) > numBlue) return false;
        }

    }

    return true;

    console.log("cubeArray==", cubeArray);
}

//Second question:
function currGamePower(str){

   // let numBlue = 14, numGreen = 13, numRed = 12;
    let newStr = str.slice(str.indexOf(':')+1);

    newStr = newStr.replaceAll(';', ',');

    let cubeArray = newStr.split(', ');

    let maxgreenCube = 1, maxblueCube = 1, maxredCube = 1;

    for(let i=0; i< cubeArray.length; i++){

        let currCube = cubeArray[i];

        let greenCubeNum = currCube.replace(' green', '');
        let redCubeNum = currCube.replace(' red', '');
        let blueCubeNum = currCube.replace(' blue', '');

        if(Number(greenCubeNum) > maxgreenCube) maxgreenCube = Number(greenCubeNum);
        if(Number(blueCubeNum) > maxblueCube) maxblueCube = Number(blueCubeNum);
        if(Number(redCubeNum) > maxredCube) maxredCube = Number(redCubeNum);

    }

   // console.log("maxgreenCube, maxblueCube, maxredCube>>>", maxgreenCube, maxblueCube, maxredCube);

    return (maxgreenCube * maxredCube * maxblueCube);

    console.log("cubeArray==", cubeArray);
}