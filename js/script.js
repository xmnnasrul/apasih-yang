

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

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }


  const scriptURL = 'https://script.google.com/macros/s/AKfycbxq3JIbY_7dTL8fgK835Kv-7SnfQqdB2hxbjr7YbBXlKuv7Fc36IjAwUGbvynfkRb9X/exec'

  const form1 = document.forms['submit-to-google-sheet1']
  const form2 = document.forms['submit-to-google-sheet2']
  const form3 = document.forms['submit-to-google-sheet3']


  form1.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form1)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

  form2.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form2)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

  form3.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form3)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })