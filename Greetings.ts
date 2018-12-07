class  Greetings{

 Greet():void{
    console.log("Hello....")
    let test: string = "Ashoke is here..."
    console.log(test);

}

display(n1: number, n2: number): number{
    return n1+n2;
}

}

var obj = new Greetings();
obj.Greet();
let myAdd = obj.display(2, 1);
console.log(myAdd);