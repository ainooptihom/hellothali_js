

function toggleButton() {

    var moreText = document.getElementById('moretext');
    var btn = document.getElementById('button')

    if(moreText.style.display === "none"){
        moreText.style.display = "block";
        btn.innerHTML = "Read Less";
    }
    else{
        moreText.style.display = "none";
        btn.innerHTML = "Read More";
    }
};