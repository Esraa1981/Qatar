//auto slide show function
var img_array=["banner2.jpg","banner3.jpg" ,"banner4.jpg" ,"banner4.jpg","banner5.jpg","banner1.jpg"];
var index=0;
function slide()
{

    document["banner"].src = img_array[index];
    index++;
    if(index>=img_array.length)
    {
    index=0;
    }
}
setInterval("slide()",2000);

//slideshow function