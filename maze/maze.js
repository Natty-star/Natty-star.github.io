$(document).ready(function(){

    var started = false;
    var finished = false;
    var failed = false;
    

    const startingPosition = $("#start").position();
    const dimentionWidth = $("#start").width();
    const dimentionHeight = $("#start").height();

    console.log(startingPosition + " " + dimentionHeight + " " + dimentionWidth);
    $("#start").click(function(){
        
        failed = false;
        started = true;
        finished = false;
        resetGame();
        message("Maze started!")

        
        $("#maze").mousemove(function(e){
            let maze = $(this).position();
            console.log(maze)
            
            if(failed || finished || $("#start").position().left < 0){
                $("#start").offset({top: maze.top + startingPosition.top ,left: maze.left + startingPosition.left})
                return;
            }
            $("#start").offset({top: maze.top + (e.pageY-maze.top) - dimentionHeight,left:  maze.left+(e.pageX-maze.left) - dimentionWidth})
            
        })
       
    })

    $(".boundary").mouseenter(function(){
        if(started && !failed){
            $(this).css("backgroundColor","red");
            failed = true;
            message("Sorry. You Failed! :( Press on \"S\" to Restart","error")
        }
        
    })

    function resetGame(){
        $(".boundary").css("backgroundColor","#eeeeee");
    }

    function message(notifaction,type){
        if(type === "error"){
            $("#status").css({color: "red"});
        }
        else if(type === "win"){
            $("#status").css({color: "green"});
        }
        else{
            $("#status").css({color: "black"});
        }
        $("#status").html(notifaction);
    }

    $("#end").mouseenter(function(){
        if(!failed && started){
            finished = true;
            message("Congratulations. You Win! :)  Press on \"S\" to play again","win");
            $("#start").offset({top: maze.top + startingPosition.top ,left: maze.left + startingPosition.left})
        }
        else if(!started){
            //return;
        }
        else{
            message("Sorry. You Failed! :( Press on \"S\" to Restart","error")
        }
        started = false;
    })

    $("#maze").mouseleave(function(){
        if(started){
            
            $(".boundary").css("backgroundColor","red");
            message("Sorry. You Failed! :( Press on \"S\" to Restart","error")
        }
        failed = true;
        started = false;
        
    })

})