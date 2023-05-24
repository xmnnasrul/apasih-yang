

//  hide and show form 
function showForm1() {
    document.getElementById('formContainer1').classList.remove('d-none');
}
function showForm2() {
    document.getElementById('formContainer2').classList.remove('d-none');
}
function showForm3() {
    document.getElementById('formContainer3').classList.remove('d-none');
}

function hideForm1() {
    document.getElementById('formContainer1').classList.add('d-none');
}
function hideForm2() {
    document.getElementById('formContainer2').classList.add('d-none');
}
function hideForm3() {
    document.getElementById('formContainer3').classList.add('d-none');
}

function showAlert() {
    document.getElementById('ashuuu').classList.remove('d-none');
    document.getElementById('whiteScreen').style.display = 'block';
}
function remAlert() {
    document.getElementById('ashuuu').classList.add('d-none');
    
    document.getElementById('whiteScreen').style.display = 'none';
}