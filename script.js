let canvas = document.querySelector("#canvas");

canvas.addEventListener("click", function (event) {

  console.log("clicking the canvas");
  let art = new Array('256/image1.jpeg','256/image2.jpeg',
                      '256/image3.jpeg','256/image4.jpeg',
                      '256/image5.jpeg','256/image6.jpeg',
                      '256/image7.jpeg','256/image8.jpeg',
                      '256/image9.jpeg','256/image10.jpeg',
                      '256/image11.jpeg','256/image12.jpeg',
                      '256/image13.jpeg','256/image14.jpeg',
                      '256/image15.jpeg','256/image16.jpeg',
                      '256/image17.jpeg','256/image18.jpeg',
                      '256/image19.jpeg','256/image20.jpeg',
                      '256/image21.jpeg','256/image22.jpeg',
                      '256/image23.jpeg','256/image24.jpeg',
                      '256/image25.jpeg','256/image26.jpeg',
                      '256/image27.jpeg','256/image28.jpeg',
                      '256/image29.jpeg','256/image30.jpeg',
                      '256/image31.jpeg','256/image32.jpeg',
                      '256/image33.jpeg','256/image34.jpeg',
                      '256/image35.jpeg','256/image36.jpeg',
                      '256/image37.jpeg','256/image38.jpeg',
                      '256/image39.jpeg','256/image40.jpeg',
                      '256/image41.jpeg','256/image42.jpeg',
                      '256/image43.jpeg','256/image44.jpeg',
                      '256/image45.jpeg','256/image46.jpeg',
                      '256/image47.jpeg','256/image48.jpeg',
                      '256/image49.jpeg','256/image50.jpeg',
                      '256/image51.jpeg','256/image52.jpeg',
                      '256/image53.jpeg','256/image54.jpeg',
                      '256/image55.jpeg','256/image56.jpeg',
                      '256/image57.jpeg','256/image58.jpeg',
                      '256/image59.jpeg','256/image60.jpeg',
                      '256/image61.jpeg','256/image62.jpeg',
                      '256/image63.jpeg','256/image64.jpeg',
                      '256/image65.jpeg','256/image66.jpeg',
                      '256/image67.jpeg','256/image68.jpeg',
                      '256/image69.jpeg','256/image70.jpeg',
                      '256/image71.jpeg','256/image72.jpeg',
                      '256/image73.jpeg','256/image74.jpeg',
                      '256/image75.jpeg','256/image76.jpeg',
                      '256/image77.jpeg','256/image78.jpeg',
                      '256/image79.jpeg','256/image80.jpeg',
                      '256/image81.jpeg','256/image82.jpeg',
                      '256/image83.jpeg','256/image84.jpeg',
                      '256/image85.jpeg','256/image86.jpeg',
                      '256/image87.jpeg','256/image88.jpeg',
                      '256/image89.jpeg','256/image90.jpeg',
                      '256/image91.jpeg','256/image92.jpeg',
                      '256/image93.jpeg','256/image94.jpeg',
                      '256/image95.jpeg','256/image96.jpeg',
                      '256/image97.jpeg','256/image98.jpeg',
                      '256/image99.jpeg','256/image100.jpeg',
                      '256/image101.jpeg','256/image102.jpeg',
                      '256/image103.jpeg','256/image104.jpeg',
                      '256/image105.jpeg','256/image106.jpeg',
                      '256/image107.jpeg','256/image108.jpeg',
                      '256/image109.jpeg','256/image110.jpeg',
                      '256/image111.jpeg','256/image112.jpeg',
                      '256/image113.jpeg','256/image114.jpeg',
                      '256/image115.jpeg','256/image116.jpeg',
                      '256/image117.jpeg','256/image118.jpeg',
                      '256/image119.jpeg','256/image120.jpeg',
                      '256/image121.jpeg','256/image122.jpeg',
                      '256/image123.jpeg','256/image124.jpeg',
                      '256/image125.jpeg','256/image126.jpeg',
                      '256/image127.jpeg','256/image128.jpeg',
                      '256/image129.jpeg','256/image130.jpeg',
                      '256/image131.jpeg','256/image132.jpeg',
                      '256/image133.jpeg','256/image134.jpeg',
                      '256/image135.jpeg',
                      '256/image136.jpeg','256/image137.jpeg',
                      '256/image138.jpeg','256/image139.jpeg',
                      '256/image140.jpeg','256/image141.jpeg',
                      '256/image142.jpeg','256/image143.jpeg',
                      '256/image144.jpeg','256/image145.jpeg',
                      '256/image146.jpeg','256/image147.jpeg',
                      '256/image148.jpeg','256/image149.jpeg',
                      '256/image150.jpeg','256/image151.jpeg',
                      '256/image152.jpeg','256/image153.jpeg',
                      '256/image154.jpeg','256/image155.jpeg',
                      '256/image156.jpeg','256/image157.jpeg',
                      '256/image158.jpeg','256/image159.jpeg',
                      '256/image160.jpeg','256/image161.jpeg',
                      '256/image162.jpeg','256/image163.jpeg',
                      '256/image164.jpeg','256/image165.jpeg',
                      '256/image166.jpeg','256/image167.jpeg',
                      '256/image168.jpeg','256/image169.jpeg',
                      '256/image170.jpeg','256/image171.jpeg',
                      '256/image172.jpeg','256/image173.jpeg',
                      '256/image174.jpeg','256/image175.jpeg',
                      '256/image176.jpeg','256/image177.jpeg',
                      '256/image178.jpeg','256/image179.jpeg',
                      '256/image180.jpeg','256/image181.jpeg',
                      '256/image182.jpeg','256/image183.jpeg',
                      '256/image184.jpeg','256/image185.jpeg',
                      '256/image186.jpeg','256/image187.jpeg',
                      '256/image188.jpeg','256/image189.jpeg',
                      '256/image190.jpeg','256/image191.jpeg',
                      '256/image192.jpeg','256/image193.jpeg',
                      '256/image194.jpeg','256/image195.jpeg',
                      '256/image196.jpeg','256/image197.jpeg',
                      '256/image198.jpeg','256/image199.jpeg',
                      '256/image200.jpeg','256/image201.jpeg',
                      '256/image202.jpeg','256/image203.jpeg',
                      '256/image204.jpeg','256/image205.jpeg',
                      '256/image206.jpeg','256/image207.jpeg',
                      '256/image208.jpeg','256/image209.jpeg',
                      '256/image210.jpeg','256/image211.jpeg',
                      '256/image212.jpeg','256/image213.jpeg',
                      '256/image214.jpeg','256/image215.jpeg',
                      '256/image216.jpeg','256/image217.jpeg',
                      '256/image218.jpeg','256/image219.jpeg',
                      '256/image220.jpeg','256/image221.jpeg',
                      '256/image222.jpeg','256/image223.jpeg',
                      '256/image224.jpeg','256/image225.jpeg',
                      '256/image226.jpeg','256/image227.jpeg',
                      '256/image228.jpeg','256/image229.jpeg',
                      '256/image230.jpeg','256/image231.jpeg',
                      '256/image232.jpeg','256/image233.jpeg',
                      '256/image234.jpeg','256/image235.jpeg',
                      '256/image236.jpeg','256/image237.jpeg',
                      '256/image238.jpeg','256/image239.jpeg',
                      '256/image240.jpeg','256/image241.jpeg',
                      '256/image242.jpeg','256/image243.jpeg',
                      '256/image244.jpeg','256/image245.jpeg',
                      '256/image246.jpeg','256/image247.jpeg',
                      '256/image248.jpeg','256/image249.jpeg',
                      '256/image250.jpeg','256/image251.jpeg',
                      '256/image252.jpeg','256/image253.jpeg',
                      '256/image254.jpeg','256/image255.jpeg',
                      '256/image256.jpeg',
                    ); 

  let currentArt = art[Math.floor(Math.random() * art.length)];
  var divsize = 100;

  var posx = (Math.random() * window.innerWidth - divsize).toFixed();
  var posy = (Math.random() * window.innerHeight - divsize).toFixed();

  imgArray = new Image();
  imgArray.classList.add("imgArray");
  imgArray.src = currentArt;
  
  imgArray.style.left = posx + "px";
  imgArray.style.top = posy + "px";
  imgArray.style.position = "fixed";
  imgArray.style.width = Math.floor((Math.random()*180)+100)+"px";
  canvas.appendChild(imgArray);

  // moved this block of code into this function above seems to have fixed everything. 
  let shuffleButton = document.querySelector(".shuffle");
  shuffleButton.addEventListener("click", function (event) {
    console.log("clicking the suffle button");
  
    Array.from(document.querySelectorAll('.imgArray')).forEach(function(img) {
        
      var posx = (Math.random() * window.innerWidth - divsize).toFixed();
      var posy = (Math.random() * window.innerHeight - divsize).toFixed();
    
      img.style.left = posx + "px"; 
      img.style.top = posy + "px";
  
  })

   });
})
let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", function (event) {
  console.log("clicking the clear button");
  canvas.innerHTML = " ";
 });


// let canvas = document.querySelector("#canvas");

// canvas.addEventListener("click", function (event) {
//   console.log("clicking the canvas");

//   let art = new Array('images/piano.png','images/blue.png',
//                       'images/blue2.png','images/blue3.png','images/blue4.png',
//                       'images/green.png', 'images/green2.png', 'images/green4.png',
//                       'images/doodle1.png','images/doodle2.png','images/doodle3.png',
//                       'images/doodle4.png','images/doodle5.png','images/doodle6.png',
//                       'images/doodle7.png','images/doodle8.png','images/doodle9.png' ); 

//   let currentArt = art[Math.floor(Math.random() * art.length)];
//   var divsize = 100;
//   var posx = (Math.random() * window.innerWidth - divsize).toFixed();
//   var posy = (Math.random() * window.innerHeight - divsize).toFixed();

//   imgArray = new Image();
//   imgArray.classList.add("imgArray");
//   imgArray.src = currentArt;

//   imgArray.style.left = posx + "px";
//   imgArray.style.top = posy + "px";
//   imgArray.style.position = "fixed";
//   imgArray.style.width = Math.floor((Math.random()*180)+150)+"px";

//   canvas.appendChild(imgArray);
//     let shuffleButton = document.querySelector(".shuffle");
//   shuffleButton.addEventListener("click", function (event) {
//     console.log("clicking the suffle button");
  
//     Array.from(document.querySelectorAll('.imgArray')).forEach(function(img) {
        
//       var posx = (Math.random() * window.innerWidth - divsize).toFixed();
//       var posy = (Math.random() * window.innerHeight - divsize).toFixed();
    
//       img.style.left = posx + "px"; 
//       img.style.top = posy + "px";
  
//   })
// });


// let clearButton = document.querySelector(".clear");
// clearButton.addEventListener("click", function (event) {

//   console.log("clicking the clear button");
//   canvas.innerHTML = " ";
// })