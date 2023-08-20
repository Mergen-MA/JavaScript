console.log( myName, printName() );

var myName = "Lawrence";

function printName()
{
    console.log( a, embed() );
    
    var a = 100;
    
    function embed(){ return "hello"; }
    
    return "John Doe";
}

// JS parsor reads line by line, lexically-left-to-right