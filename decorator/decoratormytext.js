function buttonClicked(){
    var textArea = document.querySelector('#texts');
    document.getElementById('texts').style.fontSize = parseInt(document.getElementById('texts').style.fontSize) +2 +'px';

    console.log(document.getElementById('texts').style.fontSize);
    //textArea.style.fontSize = '24px';
    //console.log(parseInt('12px'));
}

setInterval(buttonClicked, 500)

function boxChecked(e){
    var checkBox = document.getElementById('billing');
    var textArea = document.querySelector('#texts');
    if(e.checked){
        textArea.style.fontWeight = 'bold';
        textArea.style.color = 'green';
        textArea.style.textDecoration = 'underline';
    }else{
        textArea.style.fontWeight = 'normal'; 
        textArea.style.color = 'black';
        textArea.style.textDecoration = 'auto';
    }

    //console.log(e.checked)
    
}
