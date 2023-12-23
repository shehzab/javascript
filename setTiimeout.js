<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Ramanan kanda paathaalam </h1>
    <button id="Stop">Stop</button>
</body>
<script>
    const sayName = function(){
        console.log("ramnan");
    }
    // document.querySelector('h1').innerHTML = "ramanan paathaalam kandeee"

    const changetext = function(){
        document.querySelector('h1').innerHTML = "ramanan paathaalm kandeee"
    }
    const changeme= setTimeout(changetext,5000)
document.querySelector('#Stop').addEventListener('click',function(){
       clearTimeout(changeme) 
        console.log("stopped")
    })





</script>
</html>
