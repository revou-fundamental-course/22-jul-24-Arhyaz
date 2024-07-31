
function formValidation(){
    let name = document.getElementById("input-name").value
    console.log(name);

    if(name === ""){
        alert('Maaf isinya kosong');
    } else{
        alert("sukses");
    }
}

let indexSlide = 1;
showSlide(1);

function nextSlide(n){
    showSlide(indexSlide += n)
}

function showSlide(n){
    let listImage = document.getElementsByClassName('main-content-banner');
    console.log(listImage);

    if(n > listImage.length)
        indexSlide = 1;
    
    //algoritma untuk menghilangkan semua gambar
    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    //algoritma untuk menunjukkan 1 gambar
    listImage[indexSlide - 1].style.display = 'block';
}

setInterval(() => nextSlide(1), 3000);