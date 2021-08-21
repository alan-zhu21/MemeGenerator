const memeForm = document.querySelector('#memeForm');
const memesGoHere = document.querySelector('#memesGoHere');
const imgURL = document.querySelector('#ImageURL');
const topTextBox = document.querySelector('#topText');
const bottomTextBox = document.querySelector('#bottomText');


memeForm.addEventListener('submit', function(e) {
    e.preventDefault();
    //create <p> and append to <div> element

    const meme = document.createElement('div');
    meme.setAttribute('class', 'displayedMeme');

    const topText = document.createElement('p');
    topText.setAttribute('class','displayedTopText');
    topText.innerText = topTextBox.value;
    meme.appendChild(topText);

    //create and append the image to the <div> element
    const memeImg = document.createElement('img');
    memeImg.setAttribute('src', imgURL.value);
    memeImg.setAttribute('class', 'image');
    memeImg.setAttribute('alt', 'Image did not generate properly');
    meme.appendChild(memeImg);

    //set attribute to be bottom text

    const bottomText = document.createElement('p');
    bottomText.setAttribute('class','displayedBottomText');
    bottomText.innerText = bottomTextBox.value;
    meme.appendChild(bottomText);

    const deleteMeme = document.createElement('button');
    deleteMeme.setAttribute('class', 'deleteMemeBtn');
    deleteMeme.innerText = 'Delete';
    meme.appendChild(deleteMeme);

    deleteMeme.addEventListener('click', function (e) {
        e.target.parentElement.remove();
    })

    memesGoHere.appendChild(meme);
    memesGoHere.appendChild(document.createElement('br'));

    //clear the input values
    imgURL.value = '';
    topTextBox.value = '';
    bottomTextBox.value = '';

    //need to figure out how to use name and value in inputs
})

