//==========auto slide show function======================
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

//==============slideshow function=============================


var slideindex=1;

//function for going next or back
function plusDivs(n) {
	showdivs(slideindex+=n);
}


function showdivs(n)
{
	var i=0;
	var x=document.getElementsByClassName("picture");
	//if n was greater than the array of picture length , roll back to the first slide
	if (n > x.length){slideindex=1}
	//n was less than 1 means we are at the first slide but we want to from the first back to the last 	
	if (n <1) {slideindex=x.length}
		// normally go next 
		while(i<x.length){
			x[i].style.display="none";
			i++;
		}
		x[slideindex-1].style.display="block"
}