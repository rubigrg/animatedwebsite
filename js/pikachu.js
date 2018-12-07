var pikachu;
        var x = 0;
        var direction = 1;
        
        window.onload = function(){
            pikachu = document.getElementById("pikachu");
            animationLoop();
        }
        
        function animationLoop()
        {
            update();
            render();
            requestAnimationFrame(animationLoop);        
        }
        
        function update()
        {
            if(direction == 1)
            {
                if( x < window.innerWidth - 100)
                {
                  x+=5;
                }
                    
                 else
                 {
                      direction = -1;  
                 }

            }
            else
            {
                if( x > 0)
                {
                  x-=5;  
                } 
                else 
                {
                    direction = 1;
                }
            }
        }
            
function render(){
    pikachu.style.left = x + "px";
    pikachu.style.transform = "scaleX(" + direction + ")";
}