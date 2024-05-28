var i=0;
var images=[];


images[0]='image1.jpg';
images[1]='image2.jpg';
images[2]='image3.jpg';
images[3]='image5.jpg';
images[4]='image4.jpg';

function changeImage()
{
    document.getElementById('imageChange').style.animation='shake 0.5s'
    document.getElementById('imageChange').src=images[i];
    if(i<images.length-1){
        i++;
        if(i==images.length-1){
            i=0;
        }
    }
    else{
        i=0;
    }
}
window.onload=document.getElementById('imageChange').src='image3.jpg';