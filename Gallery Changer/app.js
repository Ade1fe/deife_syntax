const gallery = document.querySelector("#gallery img");
console.log(gallery)

  var imageSources = [
        "/imgs/img1.jpg",
        "/imgs/img2.jpg",
        "/imgs/img3.jpg" ,
        "/imgs/img4.jpg" ,
        "/imgs/img5.jpg" ,
        "/imgs/img6.jpg" ,
        "/imgs/img7.jpg" ,
        "/imgs/img8.jpg" ,
        "/imgs/img9.jpg" ,
        "/imgs/img10.jpg" 
    ];

    var curInd = 0;
    function changeImages(){
        gallery.src = imageSources[curInd];
        curInd = (curInd + 1) % imageSources.length;
        gallery.src = imageSources[curInd];
    }
    setInterval(changeImages, 1000);