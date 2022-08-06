jQuery(function(){


var positions = [];
var backImages = ['mario','monalisa'];
// var newPos = [];

    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName("div");
      
    // initialize each piece
    for (var i=0; i< divs.length; i++) {
        var div = divs[i];
        
        // calculate x and y for this piece
        var x = ((i % 4) * 100) ;
        var y = (Math.floor(i / 4) * 100) ;

        // set basic style and background
        if (i < divs.length-1) {
            div.className = "puzzlepiece";
            div.style.left = x + 'px';
            div.style.top = y + 'px';
            // div.style.backgroundImage = 'url("background.jpg")';
            div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
        }
        
        
        // store x and y for later
        div.x = x;
        div.y = y; 
        positions.push({a:div.x,b:div.y});
       // console.log(div);
    }        

//generate random index
var randomIndex = [];
    function getRandomNumber(){
        var ceiling = 16;
        var floor = 0;
        while(randomIndex.length<16){
            let val = Math.floor(Math.random() * (ceiling - floor) + floor)
            if(!randomIndex.includes(val)){
                randomIndex.push(val);
            }
        }
    }

    getRandomNumber();

$(document).ready(function(){
    $('select#images').change(function(){
        var selected = $('#images').val( );
        // console.log(backImages[selected])
        if (backImages[selected] == 'mario') {
            $('#puzzlearea').removeClass('monalisa');
            $('#puzzlearea').addClass('mario');
        }else{
            $('#puzzlearea').removeClass('mario');
            $('#puzzlearea').addClass('monalisa');
        }
        
    })
})

//shuffle boxs;
$('#shufflebutton').click(function(){
    // var divs = $('div#puzzlearea div ');
    for(let i = 0; i < divs.length; i++){
       var div = divs[i];
       var index = randomIndex[i];
       div.style.left = positions[index].b + 'px';
       div.style.top = positions[index].a + 'px';
    }
    findMovableBoxes();
});


function findMovableBoxes(){
    
    clearVisitedBox();
    // var divs = $('div#puzzlearea div ');
    var emptyBox = document.getElementById('emptyBox');
    let top = emptyBox.style.top;
    let left = emptyBox.style.left;

    for(let i=0; i<divs.length; i++){
        var div = divs[i];
        if(((div.style.left == left) && Math.abs((parseInt(div.style.top) - parseInt(top+100)) == 100))
            || ((div.style.left == left) && Math.abs(parseInt(top) - (parseInt(div.style.top))) == 100)
            ) {
                div.classList.add('ready')
                
            }
        if(((div.style.top == top) && Math.abs((parseInt(div.style.left) - parseInt(left+100)) == 100))
        || ((div.style.top == top) && Math.abs(parseInt(left) - (parseInt(div.style.left))) == 100)
        ){
            div.classList.add('ready')
        }

    }
}

//clear prev selected box
function clearVisitedBox(){
    for(let j = 0; j< divs.length; j++){
        var s = divs[j];
        s.classList.remove('ready');
    }
}

$('body').on('click','.ready',function(){
    if(Bravo()){
       $('h1#winner').text("Congradulations You Win");
    }else{
        //move empty box and the one clicked 
        var empty = document.getElementById('emptyBox');
    
        let tempTop = empty.style.top;
        let tempLeft = empty.style.left;
        let elementLeft = $(this).position().left;
        let elementTop = $(this).position().top;

        empty.style.top = elementTop+'px';
        empty.style.left = elementLeft+'px';
        $(this).css({top:tempTop,left:tempLeft});
        
        findMovableBoxes();
    }
})

function Bravo(){
    var currentPositions = [];
    for(let i=0; i<divs.length; i++){
        currentPositions.push({a:parseInt(divs[i].style.left), b:parseInt(divs[i].style.top)});
    }
    var initialPos = JSON.stringify(positions);
    var currentPos = JSON.stringify(currentPositions);
    return initialPos === currentPos
}

});