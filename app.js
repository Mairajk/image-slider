


// let images = ["./images0.jpg" , "./images1.jpg", "./images2.jpg", "./images3.jpg", ./images4.jpg", "./images5.jpg" ] ;

let images = [ "0" , "1", "2", "3", "4", "5" ] ;

// console.log(images.indexOf(`./images3.jpg`));

let img = document.querySelector(`#image`) ;

img.innerText = images[0] ;

function slider(event) {

    console.log(event);

    let xAxis = event.clientX ;

    if ( xAxis < 200 ) {
        img.innerText = 
    } else {
        
    }




    //<<<<<<<<========== for  image =============>>>>>>>>>>>>// 


    // let srcImage =  document.querySelector(`#image`).src.split("") ;
    // console.log("src :", srcImage[48]) 

    // let icon = images[5]   //"./images4.jpg" //images[++srcImage[48]];
    // icon.replace("/file// ");
   

    // document.querySelector(`#image`).src =  "./images4.jpg"         //images[++srcImage[48]] icon ; //


 //<<<<<<<<===========================>>>>>>>>>>>>// 









    // let imagesIndex = images.indexOf(document.querySelector(`#image`).src) ;
    // console.log("position :" , document.querySelector(`#image`).src);
    // console.log(event);
    // let imageX = event.clientX ;
    // console.log(imageX);
    
}

