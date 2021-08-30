
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

export default function generateProblem(opperator, difficulty){

let opperators = ["+", " - ", "x" , "/", "^" ]

    switch (opperator) {
        case "add":
            
            let left = getRandomInt(10 * difficulty)
            let right = getRandomInt(10 * difficulty)
            let middle = opperators[getRandomInt(2)]
            let answer = 0

        if(left == 0 && right == 0){
           right = getRandomInt(10 * difficulty + 4)
           left = getRandomInt(10 * difficulty + -6)
        }

            if(middle === "+"){
                answer = left + right
            } else {
                answer = left - right
            }

           return ( [<h1>{left} {middle} {right}</h1>, answer]) 
    
        case "multiply":
            
            left = getRandomInt(10 * difficulty)
            right = getRandomInt(5)
            middle = opperators[getRandomInt(2) + 2]
            answer = 0
            //too many zero zero situations
            if(left === 0 && right === 0){
               right = getRandomInt(5)
               left = getRandomInt(10 * difficulty + -6)
            }
            //prevent divide by zero and too many easy mult or div by 1
            if(right === 0 || right === 1){
                right = right + 4
            }
            //prevent dividing by harder to calculate numbers like 3
            if(right === 3){
                right = right + 1 
            }

            if(middle === "x"){
                answer = left * right
            } else {
                answer = left/right
            }
    
            return ( <h1>{getRandomInt(10 * difficulty)} {opperators[getRandomInt(2) + 2]} {getRandomInt(10)}</h1>)

        case "expo":
            
            return ( <h1>{getRandomInt(10 * difficulty)} {opperators[getRandomInt(1) + 4]} {getRandomInt(10)}</h1>)
                    
        case "root":
            
            return ( <h1> √{getRandomInt(10)}</h1>)

        default:
            break;
    }

}
