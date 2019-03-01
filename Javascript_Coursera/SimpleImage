var x = 3;
var y = 4;
var z = x + 2*y;
print(x,y,z);

function square(x) {
	var ans = x*x;
	return ans;
}
var a = square(4);
print(a);

var img = new SimpleImage("chapel.png");
print(img);
print(img.getWidth())
print(img.getHeight())
print(img.getPixel(0,0))
print(img.getRed(0,0))
print(img.getGreen(0,0))
print(img.getBlue(0,0))

var img = new SimpleImage(img2);
print(img);
for(var pixel of img.values()){
    var j = pixel.getRed();
    pixel.setRed(pixel.getGreen());
    pixel.setRed(j);
}
print(img);    
