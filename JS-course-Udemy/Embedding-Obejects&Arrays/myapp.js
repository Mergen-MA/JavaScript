var car = {
    make: "volvo",
    speed: 160,
    engine: {
        size: 2.2,
        make: "bmw",
        fuel: [{ maker: "BMW" }, { maker: "BMW2" }]
    },
    drive: function(){ return "drive";}

};

var array = [
    "string",
    100, 
    ["embed", 200],
    { car: "ford" },
    function() { return "drive" }
]