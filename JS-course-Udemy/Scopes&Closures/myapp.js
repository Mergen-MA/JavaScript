var car = {
    make: "volvo",
    speed: 160,
    engine: {
        size: 2.0,
        make: "bmw",
        fuel: "petrol",
        pistons:[
            { maker: "BMW" },
            { maker: "BMW2" }
        ]
    },
    drive: function(){ return "drive"; }
};

var array = [ 
    "string",
    100,
    [ "embed", 200 ],
    { car: "ford" },
    function(){ return "drive"; }
];

console.log( car.make );

// Member Creation, Assignment and Deletion

// car = ["string"]

// change the value of one element
//car.make = "ford";

// car.speed *= 2 -- speed is 320

// Create new element
// car.model = "v60"

// car.stop = function() { return "stop";}; added new function

// Delete an element
// delete.car.color
