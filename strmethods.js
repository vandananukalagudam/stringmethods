var str="hellow";
console.log(str);
console.log(str.length);
console.log(str.toUpperCase());
console.log(str[3]);
console.log(str.charAt(3));
console.log(str.replace("e","y"));
console.log(str.replace("hel","hol"));
console.log(str.indexOf("l"));
console.log(str.lastIndexOf("l"));
console.log(str.split(""));
var str="hello world";
console.log(str.split(" "));
var str="hi hello";
console.log(str.search("e"));
var str=" hii";
console.log(str.trim());
var str="hellohii";
var nstr="";
console.log(str.concat("hello"));
console.log(str+"hello");
console.log(str.substr(4,3));
for(var i=0;i<str.length;i++){
    nstr+=str[i];
    
}console.log(nstr);
for(var i=str.length-1;i>=0;i--){
    nstr+=str[i];
    
    console.log(nstr);
}

