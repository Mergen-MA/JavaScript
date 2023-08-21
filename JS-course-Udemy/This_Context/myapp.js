 // console.log( this );

var object = {
    prop: this,
    emdeb: {
        embed: true,
        method: function() { return this; }
    }
};

var array = [
    this,
    function(){ return this;}
];


function global () {
    console.log( 'from global', this);

    function sub(){ console.log( 'from sub', this ) }

    sub(); // when I invoke this way it always refers to window. if it was new keyword, it wouldn't be window 
}

global.call ( object );

