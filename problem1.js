// Question no 1
let a = []

for(let i =0;i<10;i++){
    let num = Math.floor(Math.random()*1000)
    a.push(num)
}

function secondlargest(a){
let largest=a[0]
let second = a[0]

for(let i=0;i<a.length;i++){
    if(a[i]>largest){
        second =  largest;
        largest = a[i]
    }

    if(second<a[i] && a[i]<largest){
        second = a[i]
    }
}
console.log(`Second Lagest element is ${second}`)
}

// second smallest number 
function secondsmallest(array){
    let smallest = array[0];
    let secondsmallest = array[0];

    for(let i=0;i<array.length;i++){
        if(array[i]<smallest){
            secondsmallest = smallest;
            smallest = array[i]
        }

        if(array[i]>smallest && array[i]<secondsmallest){
            secondsmallest = array[i]
        }
    }

    console.log(`second smallest elemt is ${secondsmallest}`)
}
console.log('given array is : ',a)
secondlargest(a)
secondsmallest(a)

// Question no 2
function secondway(a){

       for(let i=0;i<a.length;i++){
        for(let j=0;j<a.length-1;j++){
            if(a[j]>a[j+1]){
                let temp = a[j]
                a[j] = a[j+1]
                a[j+1] = temp
            }
        }
       }
       console.log(a)

       console.log(`second smallest element is ${a[2]}`)
       console.log(`second largest element is ${a[a.length-2]}`)
}
secondway(a)

function checkprime(N){
    if(N === 1){
        return true
    }

    if(N === 2){
        return true
    }
    for(let i=2;i<N;i++){
        if(N%i===0){
            return false
        }   
    }
    return true
}

function primefactor(n){
    let primefactor =[]
    
    for(let i = 1 ;i<n ; i++){
        if(checkprime(i)){
            if(n%i ===0){
                primefactor.push(i)
            }
        }
    }
    console.log(primefactor)
}

primefactor(45)

// question no 5

function repetednum(){
    let repetednum =[]
    let n =100
    for(let i =0;i<=n;i++){
        if(i%11 ===0){
           repetednum.push(i)
        }
    }
    console.log(repetednum)
}
repetednum()
