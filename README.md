# catchMe

## Hosted Link :- https://rohitdhawale07.github.io/catchMe/

This is the simple project of creating a web page where a button will move when we hover on it.
HTML code for catch me project, we created one div and button inside it.
## HTML Code
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catch Me</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div id="div">
    <button id="button">
        Catch Me!!
    </button>
</div>

    <script src="./index.js"></script>
</body>
</html>
```
We added simple styling to html .
### CSS code
```

#button{
    width: 100px;
    height: 100px;
    background-color: aqua;
    align-items: center;
    display: flex;
    justify-content: center;
    border: 2px solid black;
    cursor: pointer;
    position: absolute;
}
#div{
    width: 1500px;
    height: 100vh;
}
```
JAVASCRIPT code ,we added event listener to button tag added "mouseover" type event i.e when we hover on the button tag it will perform its predefined function.
For js part we use Math.random() function and Math.floor() function. 
Math.random() will create a random value and Math.floor() will round figure it.
## JAVASCRIPT code
```
const button = document.getElementById("button")
button.addEventListener("mouseover", () => {
const top = Math.floor(Math.random() * 500);   
const left = Math.floor(Math.random() * 800);   
button.style.right = left + "px";
button.style.top = left + "px";

});
```

