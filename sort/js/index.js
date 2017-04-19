$(function() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  /* Enable Cross Origin Image Editing */
  var img = new Image();
  img.crossOrigin = '';
  img.src = 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Dental_X-ray_70.JPG';

  img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);
   
    //brightnessbtn.onclick = increaseBrightness;
  invertbtn.onclick=invert;
  upVerbtn.onclick=upVer;
  downVerbtn.onclick=downVer;
  rightHorbtn.onclick=rightHor;
  leftHorbtn.onclick=leftHor;
   // resetbtn.onclick = resetImage;
    
   
  }
  
  
});

       
function increaseBrightness() {
  Caman('#canvas', function() {
    this.brightness(30).render();
  })
}

function resetImage() {
  Caman('#canvas', function() {
    this.reset();
    this.render();
  });
};

function invert(){
    Caman('#canvas', function() {
  this.invert().render();
  });
 }

	function upVer() {
  Caman('#canvas', function() {
    this.rotate(180);
    this.render();
  });
};function downVer() {
  Caman('#canvas', function() {
    this.rotate(-180);
    this.render();
  });
};function rightHor() {
  Caman('#canvas', function() {
    this.rotate(-90);
    this.render();
  });
};function leftHor() {
  Caman('#canvas', function() {
    this.rotate(90);
    this.render();
  });
};


function changeEverything() {
  Caman('#canvas', function() {
    this.reset();
    var b = Number(brightness.value);
    var c = Number(contrast.value);
    this.brightness(b);
    this.contrast(c);
    this.render();
  })
}//takes contrast and brightness and adds it to the page


function undo() {

  brightness.value = 0;
  contrast.value = 0;
  changeEverything();
};

function set() {
  alert("this is your final adjustment to your photo")
  
  changeEverything()
  
  setbtn.disabled = true
  undobtn.disabled = true
  brightness.disabled = true
  contrast.disabled = true
  
}