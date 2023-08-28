var name = "Dilshan Geethappriya";
console.log('Hello i am '+name);
  let car = {
    color:["red","blue","green","white","gray"],
    speed:120,
    maker:"honda",
    start: function(){ return "car started";},
    stop : function(){ return "car stoped";} 
  };

  function factorial(number){
    if(number == 1)
    {
        return 1;
    }
    else
    {
        return number*factorial(number-1);
    }
  }



/*function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        } 
    };
}

const circle = createCircle(1);
circle.draw();

function Circle(radius) {
    this.radius = radius;
    this.draw = function()
    {
      console.log('draw a circle')
    }
}

const another = new Circle(1);
another.draw();*/




/*console.log('My name is dilshan');//this is my name
let isapproved = false;
let fnm = undefined;
let slctcolor = null;
let person = {
    name: 'Dilshan',
    age: 25
};

 ;

function greet(name){
    console.log('Hi my name is '+name);
}

greet('geeth'); */
