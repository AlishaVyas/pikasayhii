var con = document.querySelector("#card")
var love = document.querySelector("#card span")
let count = 0;
con.addEventListener("dblclick",function(){
    love.style.transform = "translate(-50%, -100%) scale(1)"
    love.style.opacity = "0.8"
    setTimeout(function(){
        love.style.transform = "translate(-50%, -100%) scale(0)"
        love.style.opacity = "0"
    }, 500);
});

con.addEventListener('dblclick', function(){
    count++;
    console.log(count)
    document.getElementById('counter').textContent = `${count}❤️`;
});
