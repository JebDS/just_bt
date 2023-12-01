function BackCo(ID,ID2){
    document.getElementById(ID).innerHTML=ID2.value;
    BT.style.backgroundColor = ID2.value; 
}

function BorCo(ID,ID2){
    document.getElementById(ID).innerHTML=ID2.value;
    BT.style.borderColor = ID2.value; 
}

function Wsize(ex, ID){
    document.getElementById(ex).innerHTML=ID.value+'px';
    BT.style.width = ID.value+'px';
}

function Hsize(ex, ID){
    document.getElementById(ex).innerHTML=ID.value+'px';
    BT.style.height = ID.value+'px';
}

function Rsize(ex, ID){
    document.getElementById(ex).innerHTML=ID.value+'px';
    BT.style.borderRadius = ID.value+'px';
}

function Bsize(ex, ID){
    document.getElementById(ex).innerHTML=ID.value+'px';
    BT.style.borderWidth = ID.value+'px';
}