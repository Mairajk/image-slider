let images = ["/image0.jpg", "/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg", "/image5.jpg"];


// console.log(images.length ,": images array length" );

// let images = [ "0" , "1", "2", "3", "4", "5" ] ;

// console.log(images.indexOf(`./images3.jpg`));


let img = document.querySelector(`#image`);

img.innerText = images[0];

function slider(event) {

    // console.log(event);

    let clickX = event.offsetX;
    let imageCurrentRenderWidth = event.target.clientWidth;
    let clickXPercentage = Math.round((clickX * 100) / imageCurrentRenderWidth);


    // console.log("clickXPercentage: ", clickXPercentage, "%");



    //<<<<<<<<========== for  image =============>>>>>>>>>>>>// 


    let srcCurrentImage = document.querySelector(`#image`).src.split("-slider")[1];
    // console.log(srcCurrentImage ," : src");


    if (clickXPercentage > 25) {

        // console.log("forwad");

        let nextIndexOfImages = (images.indexOf(srcCurrentImage) + 1);

        // console.log(nextIndexOfImages, "  index") ;

        if (nextIndexOfImages > images.length - 1) {
            nextIndexOfImages = 0;
        }

        document.querySelector(`#image`).src = `.${images[nextIndexOfImages]}`;

    } else {

        let nextIndexOfImages = (images.indexOf(srcCurrentImage) - 1);

        // console.log(nextIndexOfImages, "  index") ;

        if (nextIndexOfImages < 0) {
            nextIndexOfImages = images.length - 1;
        }

        document.querySelector(`#image`).src = `.${images[nextIndexOfImages]}`;

    }

}



    //<<<<<<<<============= for auto siliding ==============>>>>>>>>>>>>// 


    let isMouseOnImage = false;

    function onEnter() {
        console.log("onmouseover");
        isMouseOnImage = true;
    }
    function onAway() {
        console.log("onmouseaway");
        isMouseOnImage = false;
    }


    setInterval(() => {

        console.log("running");
        if (!isMouseOnImage) {

        let images = ["/image0.jpg", "/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg", "/image5.jpg"];

        let srcCurrentImage = document.querySelector(`#image`).src.split("-slider")[1];
        console.log(srcCurrentImage, "srcCurrentImage");

        let nextIndexOfImages = (images.indexOf(srcCurrentImage) + 1);
        console.log(nextIndexOfImages, "  index");

        if (nextIndexOfImages > images.length - 1) {
            nextIndexOfImages = 0;
        }

        document.querySelector(`#image`).src = `.${images[nextIndexOfImages]}`;

        }
    }, 4000);
    





 













































    // let imageNum = srcImage[48]
    // console.log("imageNum :", imageNum) 

    // let icon = images[5]   //"./images4.jpg" //images[++srcImage[48]];
    // icon.replace("/file// ");


    // document.querySelector(`#image`).src =  "./image4"         //images[++srcImage[48]] icon ; //











    // let imagesIndex = images.indexOf(document.querySelector(`#image`).src) ;
    // console.log("position :" , document.querySelector(`#image`).src);
    // console.log(event);
    // let imageX = event.clientX ;
    // console.log(imageX);






// let xAxis = event.clientX ;

// if ( xAxis < 200 ) {
//     img.innerText = 
// } else {

// }