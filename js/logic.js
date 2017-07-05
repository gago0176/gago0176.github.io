var box = document.getElementById('box-calculation');
var box2 = document.getElementById('box-result');
function add(x) {
	box.value += x;
	if(x== 'c'){
		box.value='';
		box2.value='';
	}
}
function answer(){
	x=box.value;
	x=eval(x);
	box2.value=x;
}
function pow(a){
	x=box.value;
	x=Math.pow(x,a);
	box2.value=x;
}
function sqrt(){
	x=box.value;
	x=Math.sqrt(x);
	box2.value=x;
}
function gt(){
	var n=1;
	x=box.value;
	for(var i=1;i<=x;i++){
		n*=i;
	}
	box2.value=n;
}