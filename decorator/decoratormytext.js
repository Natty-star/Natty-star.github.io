
function buttonClicked(){
    var textArea = document.querySelector('#texts');
    //document.getElementById('texts').style.fontSize = parseInt(document.getElementById('texts').style.fontSize) +2 +'px';
    var styl = getComputedStyle(document.getElementById('texts'))
    console.log(styl.fontSize);
    textArea.style.fontSize = parseInt(styl.fontSize) + 2 + 'px';
    //textArea.style.fontSize = '24px';
    //console.log(parseInt('12px'));
    //setInterval(buttonClicked, 500)
    doubeFont;
}
//doubeFont();

function doubeFont(){
        setInterval(buttonClicked, 500);
}


function boxChecked(e){
    var checkBox = document.getElementById('billing');
    var textArea = document.querySelector('#texts');
    var body = document.querySelector('body')
    if(e.checked){
        textArea.style.fontWeight = 'bold';
        textArea.style.color = 'green';
        textArea.style.textDecoration = 'underline';
        body.style.backgroundImage = "url(../assets/images/new-100-dollar-bill-background-G19KCA.jpg)";

    }else{
        textArea.style.fontWeight = 'normal'; 
        textArea.style.color = 'black';
        textArea.style.textDecoration = 'auto';
        body.style.backgroundImage = 'none';
    }

    //console.log(e.checked)
    
}
