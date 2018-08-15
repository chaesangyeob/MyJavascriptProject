<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
 .box {
  height: 100px;
  width: 100px;
  background-color: black;
  position: relative;
  top: 5px;
  left: 5px;
  cursor: pointer;
}

.held {
  border: solid 10px black;
  background-color: black;
}

.holder {
  height: 110px;
  width: 110px;
  margin: 10px;
  border: solid 5px black;
  background-color: white;
  display: inline-block;
}

.hovered {
  border: dotted 5px black;
}

.invisible {
  display: none;
}

#container {
  margin: auto;
  top: 100px;
  width: 400px;
  position: relative;
}
    </style>
</head>
<body>
        <div id="container">
          <div class="holder">
            <div class="box" draggable="true"></div>
          </div>
          <div class="holder"></div>
       </div>
    <script>
       //drag를 통해서 지정 element를 이동하는 코드입니다.

        const box = document.querySelector('.box');
        const containers = document.querySelectorAll('.holder');
        

        containers.forEach((container)=> {
            console.log(container)
            container.addEventListener('dragover', (e)=> {
                e.preventDefault();
                e.stopPropagation();
                console.log('dragover')
            })
            container.addEventListener('dragenter', (e)=> {
                e.preventDefault();
                e.stopPropagation();
                console.log('dragenter')
            })
            container.addEventListener('drop',function(e) {
                e.preventDefault();
                e.stopPropagation();
                this.appendChild(box)
            })
        })



  
        
    </script>
</body>
</html>
