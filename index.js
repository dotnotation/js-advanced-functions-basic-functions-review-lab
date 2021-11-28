// function declaration 
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

// function expression
const mondayWork = function(work = "go to the office"){
    return `This Monday, I will ${work}.`;
}

// scope chain
function wrapAdjective(flair = "*"){
    return function (adjective = "special"){
        return `You are ${flair}${adjective}${flair}!`;
    };
}

const Calculator = {
    add: (...args) => {
      return args.reduce((accum, number) => accum + number);
    },
    subtract: (...args) => {
      return args.reduce((accum, number) => accum - number);
    },
    multiply: (...args)=> {
      return args.reduce((accum, number) => accum * number);
    },
    divide: (...args)=> {
      return args.reduce((accum, number) => accum / number);
    }
  };
  
function actionApplyer(start, array) {
    if (array.length !== 0) {
        return array.reduce((result, func) => {return func(result)}, start)
    } else {
        return start
    }
}