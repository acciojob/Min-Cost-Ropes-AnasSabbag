function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort();
	let a=0,b=0;
	while(arr.length>1){
		b=arr[0];
		arr.shift();
		b+=arr[0];
		arr.shift();
		a= a +b;
		arr.push(b);
		arr.sort();
	}
	return a;
}

module.exports=mincost;
