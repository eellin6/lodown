'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;



/**
 * 
 * identity: this function takes a value and returns a value unchanged 
 * 
 * @param {*} value: single value that can be any datatype
 * 
 * @returns {*} : returns the value unchanged
 * 
 * 
 */
 
 function identity (value) {
     return value;
 }
 
 module.exports.identity = identity;
 
 
 /**
  * 
  * typeOf: This function will take any value and returns a string stating its datatype
  * 
  * @param {*} value : single value that can be any datatype
  * 
  * @returns {string} : returns a string of the datatype
  * 
  */
  
  function typeOf(value){
    if (typeof value === "object"){ 
        if (Array.isArray(value)){  
        return "array";
        } else if (value === null) { 
            return 'null';
        } else if (typeof value === "object"){ 
            return "object";
        }
    } else {
        return typeof value; 
    }
}

module.exports.typeOf = typeOf;

/**
 * 
 * first : This function will take an array and a number and returns an array literal if array is not an array
 * and if the number is not given or is not a number, the function will returns the first element in array.
 * Also, if a number and an array is given it returns the first number item in array
 * 
 * @param {array} array : expected to be an array
 * @param {number} number : expected to be a number
 * 
 * @returns {*} : [] if array param is not array;
 * @returns {*} : the first element in an array if number is not gien or not a number;
 * @returns {*} : first number of items if array and number are given
 * 
 */
 
 function first(array, number) {
    if(Array.isArray(array) === false || number < 0){
        return [];
    }
    if(typeof number !== 'number' || number === null){
        return array[0];
    }
    return array.slice(0, number);
}
ju
module.exports.first = first;


/**
 * 
 * last : takes an array and a number and returns an array literal if array is not an array
 * and if number is not given or is not a number, returns the last element in array.
 * Also, a number and an array is given the function will return the last number item in array
 * 
 * @param {array} array : expected to be an array
 * @param {number} number : expected to be a number
 * 
 * @returns {*} : [] if array param is not array;
 * @returns {*} : the last element in an array if number is not gien or not a number;
 * @returns {*} : the last number item if array and number are given
 * 
 */
 
 function last(array,number){
    if(Array.isArray(array) === false || number < 0){
        return [];
    }
     if (typeof number !== "number" || number === null){
        return array[array.length - 1] ;
    }
    if(array.length <= number){
    return array; 
}
    return array.slice(number -1, array.length);
}

module.exports.last = last;


/**
 * 
 * IndexOf : gives the index of the array that is the first occurance of the value
 * and will return - 1 if  the value is not an array
 * 
 * @param {array} array : expecting array
 * @param {value} value : could be any datatype
 * 
 * @returns {*} : return the index of array that is first occurrance of value
 * @returns {*} : returns -1 if the value is not an array
 * 
 */
 
 function indexOf(array, value){
    if(array.includes(value)) {
        for(let i = 0; i < array.length; i++){
            if(array[i] === value){
                return i;
            }
        }
    } else {
        return -1;
    }
    
}

module.exports.indexOf = indexOf;

/**
 * 
 * contains : lets you know if an array contains a certain value
 * 
 * @param {array} array : expects to have an array as argument
 * @param {value} value : value can be any datatype
 * 
 * @returns {boolean} : returns either true or false
 * 
 */
 
 
 function contains(array,value){ 
    return array.includes(value) ? true : false;
};

module.exports.contains = contains;


/**
 * 
 * each : checks if argument is an array and then loops through array and applies 
 *        function to each value in array and if argument is an object it will loop
 *        through the object and apply the function argument to its elements.
 * 
 * @param {array or object} : can take any array or object as argument
 * 
 * @param {function} : takes function as argument to be applied to array values or array elements
 * 
 * @returns : onece each is called it will loop through object or array and apply and return whatever 
 *           the function is passed as argument to the value or element
 * 
 */

    function each(collection, someFunction){
    if(Array.isArray(collection) === true){
        for(let i = 0; i < collection.length; i++){
            someFunction(collection[i],i, collection);
            }
        }
        else {
            for(let key in collection){
            someFunction(collection[key], key, collection);
            }
    }
}

module.exports.each = each;


/**
 * 
 * unique : loops through the array that is passed in as the argument and returns a new
 *          array that only contains the values of the array with the duplicates removed
 * 
 * @param : expects an array to be passed through
 * 
 * 
 * @returns : returns a new array with the duplicates removed.
 * 
 */
 
 function unique(array) {
    let uniqueArray = [];
    for( let i = 0; i < array.length; i++){
        if(_.indexOf(uniqueArray, array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}

module.exports.unique = unique;


/**
 * 
 * filter : takes an array and function as the argument and returns the result of the funtions action
 *          on the values in the array in a new array
 * 
 * @param {array} : expects an array to be passed as argument
 * 
 * @paran {function} : expects a function to be passed as an argument that acts on the values in the array
 * 
 * @returns : Once the function has acted on each value in the array it returns a new array with the results
 *           of the acted on values
 * 
 */
   
    function filter(array, sumfunction) {
    let filteredArray = [];
    for (let i = 0; i < array.length; i++){
        if(sumfunction(array[i], i, array) === true){
            filteredArray.push(array[i]);//pushing array[i] because that is the actual value that will be pushed through
        }
    }
    return filteredArray;
}

module.exports.filter = filter;


/**
 * 
 * reject : takes an array and returns a new array with the resulting elements that resulted as false after
 *          the function acted on it.
 *          
 * @param {array} : expect an array to be passed as an argument
 * 
 * @param {function} : expect a function to be passed that acts on the array
 * 
 * @returns : returns a new array with the result of the fumction acting on the array that result is false
 * 
 */
 
 
    function reject(array, func){
    return _.filter(array, function(elements, i , array){
        return !(func(array[i],i,array));
    });
}

module.exports.reject = reject;


/**
 * 
 * partition : takes an array and function as arguments and returns two sub-arrays in an array. One
 *             sub-array has the results of the function acting on the array that was true when tested
 *             by the function and another sub=array that resulted in false when tested by the function
 * 
 * @param {array} : expects an array to be passed through as argument
 * 
 * @param {function} : expects a function to be passed through as an argument
 * 
 * @returns : returns an array with two sub-arrays that hold the values that passed true after acted on
 *           by the function and the other with false after being acted on by the function
 * 
 */
 
    function partition(array,action){
    return [_.filter(array,action),_.reject(array,action)];
}

module.exports.partition = partition;


/**
 * 
 * map : takes a collection and a function as arguments and checks if it is an object or an array. Once that
 *       is decided it loops through the array and has the function being passed as an argument act on each
 *       of the values/elements in the object or array
 * 
 * @param {collection} : this can be an array or an object
 * 
 * @param {function} : expects a function to be passed as an argument
 * 
 * @returns : returns a new array with the new values or elements that have been acted on by the passed through
 *           function
 * 
 */ 
 
 
 function map(collection, funky){
    let mapArray = [];
    if(typeof(collection) === 'object'){
        //don't forget typeof!
        for(let key in collection){
            mapArray.push(funky(collection[key], key, collection));
            //for in loop lets us run funky on values keys 
                
            }
        }else {
            for(let i = 0; i < collection.length; i++){
                mapArray.push(funky(collection[i], i , collection));
            }
        }
        return mapArray;
}

module.exports.map = map;


/**
 * 
 * pluck : takes an array of objects, loops through them, and returns the values of the objects in a new array.
 * 
 * @param {property} : expects an array of objects to be passed through as an argument
 * 
 * @returns : returns the values of the objects in the array in a new array
 * 
 */
 
 
    function pluck(arrayObj, prop){
    let pluckArray = [];
    _.map(arrayObj, function(elements, i , array){
        pluckArray.push(array[i][prop]);
    });
    return pluckArray;
};


module.exports.pluck = pluck;


/**
 * 
 * every : takes a collection and a function (or any value) and test if any value of an array or objectbeing past through 
 *         will return false and if there is any values that return false the _.every returns false but if all the
 *         valueus return true every will return true.
 * 
 * 
 * @param {*} : collection and function are expected but do not have be true. the function will work with
 *              any value passed through
 * 
 * @return : returns true or false
 * 
 * 
 */
 
  function every(collection, sumFunc){
  if(typeof sumFunc !== "function"){ sumFunc = _.identity};
    if((Array.isArray(collection))){ 
        for (let i = 0; i < collection.length; i++){ 
            if((sumFunc(collection[i], i, collection)) === false){                // checking if results of sumFunc are strictly equal to false 
                return false; 
        }
  
    }
    if((typeof collection) === 'object'){
        for (var key in collection){ 
            if ((sumFunc(collection[key], key, collection) === false)){ 
                return false;
            }
        }
    }
}
return true;
}

module.exports.every = every;



/**
 * 
 * some : takes a collection and a function (or any value) and test if any value of an array or object being past through 
 *        will return true and if there is any that return true than the _.some returns false but if all the
 *        valueus return false every will return false.
 * 
 * @param {*} : collection and function are expected but do not have be true. the function will work with
 *              any value passed through
 * 
 * @return : returns true or false
 * 
 */
 
 
    function some(collection,funky){
    if(typeof funky !== "function"){ funky = _.identity}
    if((typeof collection) === 'object'){
        for (var key in collection){ 
            if ((funky(collection[key], key, collection) === true)){ 
                return true;
            }
        }
   } else if((Array.isArray(collection))){ 
        for (let i = 0; i < collection.length; i++){ 
            if((funky(collection[i], i, collection)) === true){
                return true; 
            }
        }
    }
    return false;
}

module.exports.some = some;



/**
 * 
 * reduce : calls a function for every element that is passing the arguments provided. It uses the return value
 *          of the function as the prevResult for the next iteration and the seed as the first prevResult. If no 
 *          seed is provided, the first prevResult will be the first index value of the array. After the last 
 *          iteration, the return value of the final function call will be returned as a single value.
 * 
 * @param {array} : expects an array to be passed 
 * @param {function} : expects a function to be passed
 * @param {seed} : param that may or may not be given. If given then seed will be the first previous value, if not,
 *                 the first previous value will be the first value in the array.
 * 
 * @return : A number or an array representing the final function call of the array.
 * 
 * 
 */
 
 
    function reduce(array,funcs,seed){// Create function expression with array,function,and seed as parameters. 
    var prevResult = typeof seed === "number" ? funcs(seed,array[0],0) : array[0];
    for(let i = 1; i <= array.length - 1; i++){
        prevResult = funcs(prevResult, array[i], i);
    }
    return prevResult;
}


module.exports.reduce = reduce;


/**
 * 
 * extend : Updates the object values with other object values if they have the same key. If there
 *          is no key in the first object then the key with the value will be added to the object.
 * 
 * @param {...objects} : uses multiple objects as params
 * 
 * @return : returns objects that have been updated to having the same key
 * 
 */
 
 
    function extend(a,...more){
    for(let i = 0; i<= more.length -1; i++){
        for(var key in more[i]){
            a[key] = more[i][key]; 
        }
    }
    return a;
}

module.exports.extend = extend;