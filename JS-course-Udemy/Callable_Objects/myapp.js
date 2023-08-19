function name() {
    var fullname = "Mali Dinc";

    function concat( name) {
        return "Mr." + name;
    }

    return concat(fullname);
}



function name1 ( fullname) {
    return fullname.firstname + "" + fullname.lastname;

}

name1( { firstname:"Mali", lastname:"Dinc"});

// Callable Object -- functions are callable object.

function name2 ( fullname ) {
    
    return fullname();
}



console.log(name2( function(){ return "emdeb";}));