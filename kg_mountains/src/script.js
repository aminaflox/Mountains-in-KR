const images = [];
const desc = [];
const path = [];

//vouna === mountains
vouna.forEach(el => images.push(el));

const current = document.querySelector("#selected");
const mikrografies=document.querySelector(".mikrografies");
const buttons=document.querySelector(".buttons");

const shuffledImgs = shuffleArray(images);

shuffledImgs.forEach(el => {
  desc.push(el[0]);
  path.push(el[1]);
});
current.setAttribute('title',desc[0]);

const text = document.createTextNode(desc[0]);
const perigrafh = document.querySelector(".perigrafi")
perigrafh.appendChild(text);

for(let i=0; i<shuffledImgs.length;i++){
  img = document.createElement('img');
  img.src = path[i];
  document.querySelector(".").appendChild(img);
}

const thumbs = document.querySelectorAll(".mikrografies img");

thumbs[0].style.opacity = 0.5;
thumbs.forEach(img => img.addEventListener("click",imgActivate));
current.setAttribute('src',thumbs[0].getAttribute('src'));



//New Photo
const newPhoto = document.createElement('button');
buttons.appendChild(newPhoto);
newPhoto.textContent = "New Photo";
newPhoto.addEventListener("click", function(){
  const randomIndex = Math.floor(Math.random() * vouna.length);
  selectedImg = thumbs[randomIndex];
  thumbs.forEach(img => (img.style.opacity = 1));

  current.setAttribute('src', selectedImg.getAttribute('src'));
  const index = path.indexOf(selectedImg.getAttribute("src"));

  selectedImg.style.opacity = 0.5;
  perigrafh.childNodes[perigrafh.childNodes.length-1].nodeValue = desc[index];
  current.setAttribute('title',desc[index]);
});

//Previous Photo
const prevPhoto = document.createElement('button');
buttons.appendChild(prevPhoto);
prevPhoto.textContent = "Previous Photo";
prevPhoto.addEventListener("click", function(){
  const index = path.indexOf(current.getAttribute("src"));
  thumbs[index].style.opacity = 1.0;
  if (index == 0){
    //write code
    current.setAttribute('src',thumbs[thumbs.length-1]).getAttribute('src');
    thumbs[thumbs.length-1].style.opacity = 0.5;
    perigrafh.childNodes[perigrafh.childNodes.length-1].nodeValue = desc[desc.length-1];
    current.setAttribute('title',desc[desc.length-1]);

  }else{
    // write code
    current.setAttribute('src',thumbs[index-1].getAttribute('src'));
    thumbs[index-1].style.opacity = 0.5;
    perigrafh.childNodes[perigrafh.childNodes.length-1].nodeValue = desc[index-1];
    current.setAttribute('title',desc[index-1]);
  }
})

//Next Photo
const nextPhoto = document.createElement('button');
buttons.appendChild(nextPhoto);
nextPhoto.textContent = " Next Photo";
nextPhoto.addEventListener("click", function(){
  const index = path.indexOf(current.getAttribute("src"));
  thumbs[index].style.opacity = 1.0;
  if (index == thumbs.length-1){
    // write code
    current.setAttribute('src',thumbs[0].getAttribute('src'));
    thumbs[0].style.opacity = 0.5;
    perigrafh.childNodes[perigrafh.childNodes.length-1].nodeValue = desc[0];
    current.setAttribute('title',desc[0]);
  }else{
    // write code
    current.setAttribute('src',thumbs[index+1].getAttribute('src'));
    thumbs[index+1].style.opacity = 0.5;
    perigrafh.childNodes[perigrafh.childNodes.length-1].nodeValue = desc[index+1];
    current.setAttribute('title',desc[index+1]);
  }
})

//Functions
function imgActivate(e) {
  const selectedImg = e.target;

  thumbs.forEach(img => (img.style.opacity = 1));

  current.setAttribute('src', selectedImg.getAttribute('src'));
  const index = path.indexOf(selectedImg.getAttribute("src"));

  selectedImg.style.opacity = 0.5;
  perigrafh.childNodes[perigrafh.childNodes.length-1].nodeValue = desc[index];
  current.setAttribute('title',desc[index]);
}

function shuffleArray(array) {
  // write code
  for (let i = array.length - 1; i > 0; i--) {
    let s = Math.floor(Math.random() * (i+1));
    [array[i], array[s]] = [array[s], array[i]];
    
  }
  return array;
}

