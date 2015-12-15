/**
 * Created by Thanusha on 12/14/2015.
 */

h1.style.backgroundColor = "#FDFF47";
function dismiss() {
    window.open('index.html')
}

function callDemo(){
    var tool1 = document.createElement('div');
    tool1.className = 'small-tool';
    tool1.innerHTML = 'This is the first demo\
        <button onclick="callDemo1()">NEXT</button>';
    document.getElementById("para1").appendChild(tool1);

}

function callDemo1(){
    var tool1 = document.createElement('div');
    tool1.className = 'small-tool';
    tool1.innerHTML = 'This is the second demo\
        <button onclick="dismiss(this.form)">DISMISS</button>';
    document.getElementById("para1").appendChild(tool1);

}