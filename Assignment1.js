// Question 1.  Function to get an array and to check the first element is prime or not
console.log("Question 1");
function prime(array1) {

    let a1=array1[0];   //taking the first element of array and assign it to a1.
    let flag=0;           
    if (a1===1){
        console.log("The number"+ a1 +"is neither prime nor composite");    
    }
    else if (a1 > 1){
        for( let i = 2; i < a1; i++ ){
            if (a1 % i == 0){
                flag = flag + 1;
                break;
            }
        }
        if( flag ==0 ){
            console.log("The number "+ a1 +" is  prime");
        }
        else{
            console.log("The number "+ a1 +" is not prime");
        }
    }    
    
}
let array=[7,3,4,5,8];   //pre declaration of array
prime(array);             //calling the function and passing array as argument


console.log("-------------------------------------------------------");//to separate each program

// Question 2. most frequent item of an array
console.log("Question 2");
let array1=[3,4,5,3,4,6,7,3,8,3,9,1,4,3];
let count = 1,       //to count how many times the element appear in array
    max = 0,         //setting the maximum occurenece of an element as zero
    element;        //to store the most frequent item in an array

for (let i = 0; i < array1.length; ++i) { 
    if (array1[i] === array1[i - 1]) {         //checking previous element is same as next element
        count++;    
    } else { 
        count = 1; 
    } 
    if (count > max) { 
        max = count; 
        element = array1[i]; 
    } 
} 
console.log("The most frequent item in the array is " + element);

console.log("-------------------------------------------------------");//to separate each program

//Question 3. Program to iterate from 0 to 15 and to display whether the elements are odd or even
console.log("Question 3");
let i;      
for (i=0; i <= 15; i++){
    if( i % 2 == 0){
        console.log( i + " : is an even number");
    }
    else{
        console.log( i + " : is an odd number");
    }
}

console.log("-------------------------------------------------------");//to separate each program


//Question 4. program to find the sum of the squares of the elements of the array
console.log("Question 4");
let array2=[2,4,6,5,7];
let sum=0;          //declaring and initializing the value of sum to zero
let sq=0;          //declaring and initializing the value of square to zero
for( let i = 0; i < array2.length; i++){

    sq = array2[i] * array2[i];   
    sum = sum + sq;          

}

console.log("The sum of squares of the elements of array : " + sum);