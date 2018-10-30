function init(){


    //task 2

    let images = document.getElementById("icons").getElementsByTagName("img");
    images[1].src = "icon2.png";
    images[3].src = "icon2.png";




    //task 3

    document.getElementById("inner").innerHTML = "<div><p>I done the task 3 !</p></div>";



    //task 4

    let image = document.createElement("img");
    image.src = "icon2.png";
    document.getElementById("new_element").appendChild(image);


    //Task 5

    let spans = document.getElementById("rainbow").getElementsByTagName("span");
    let colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
    for (var i = spans.length - 1; i >= 0; i--) {
        spans[i].style.color = colors[i];
    }



    //task 6

    var changeSrc = function (event) {
        let filename = event.target.src.replace(/^.*[\\\/]/, '');
        if (event.target.src) {
            event.target.src = "icon2.png";
        }
        if (filename === "icon1.png") {
            event.target.src = "icon2.png";
        }else if (filename === "icon2.png"){
            event.target.src = "icon1.png";
        }

    };
    document.getElementById("event").addEventListener("mouseover", changeSrc);

}
