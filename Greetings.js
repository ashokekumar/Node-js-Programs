var Greetings = /** @class */ (function () {
    function Greetings() {
    }
    Greetings.prototype.Greet = function () {
        console.log("Hello....");
        var test = "Ashoke is here...";
        console.log(test);
    };
    Greetings.prototype.display = function (n1, n2) {
        return n1 + n2;
    };
    return Greetings;
}());
var obj = new Greetings();
obj.Greet();
var myAdd = obj.display(2, 1);
console.log(myAdd);
