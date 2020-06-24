$(document).ready(function(){
    $('#rollsClick').click(function(){
        $('#rollsClick').show().animate({opacity:'1'}, 2000)
    })

    $('#juiceClick').click(function(){
        $('#juiceClick').show().animate({opacity:'1'}, 2000)
    })

    $('#ffClick').click(function(){
        $('#ffClick').show().animate({opacity:'1'}, 2000)
    })
})


function rollsSec(){
    const juice = document.getElementById("JuiceSection")
    const rolls = document.getElementById("RollsSection")
    const ff = document.getElementById("FFSection")
    juice.classList.add("invisible")
    ff.classList.add("invisible")
    rolls.classList.remove("invisible")
    $('#rollsClick').animate({opacity:'1'}, 20000)
}

function juiceSec(){
    const juice = document.getElementById("JuiceSection")
    const rolls = document.getElementById("RollsSection")
    const ff = document.getElementById("FFSection")
    juice.classList.remove("invisible")
    ff.classList.add("invisible")
    rolls.classList.add("invisible")
}

function ffSec(){
    const juice = document.getElementById("JuiceSection")
    const rolls = document.getElementById("RollsSection")
    const ff = document.getElementById("FFSection")
    juice.classList.add("invisible")
    ff.classList.remove("invisible")
    rolls.classList.add("invisible")
}