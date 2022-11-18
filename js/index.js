$(document).ready(function(){
// const scriptURL="https://script.google.com/macros/s/AKfycbwbt_PVl8V9ikhP6BmT11UJ-NwnreYYSQlFUdMUcNQJPxs2gock674885GDzTqYP8u5Vw/exec"
// const scriptURL="https://script.google.com/macros/s/AKfycbydBC1MCKQPvoz-yBMkXO545fR1k-KJnkm69TBJiMeMlP-uDEHGIsIcfYK6iyo0hMDiwg/exec"
const scriptURL="https://script.google.com/macros/s/AKfycbzeZhZZbJIIW6NaSwvE8KG8HfMVicFk1g_Am11Jqko5G-3hrikVEAo_1xFeMmPZOid3ZQ/exec"
const form = document.forms['google']

const perform_submit=form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("You have successfully submitted."))
    .catch(error => console.error('Error!', error.message))
    $("textarea#title").val('[DDM] ');
    $("textarea#des").val('1. \n2. \n3. \n4. \n\nResult: \nExpectation: ');
    $("textarea#descript").val('[DDM] ');
    $("textarea#link").val('');
})


$("#label_mo2").click(function(){
    $("#label_mo2").toggleClass( "fas fa-minus-square", 1000 );
    $("#label_mo2").toggleClass( "fas fa-plus-square", 1000 );

})
$("#label_pc2").click(function(){
    $("#label_pc2").toggleClass( "fas fa-minus-square", 1000 );
    $("#label_pc2").toggleClass( "fas fa-plus-square", 1000 );
})


});	