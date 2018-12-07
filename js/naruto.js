var naruto;
        var x = 0;
        var direction = 1;
        
        window.onload = function(){
            naruto = document.getElementById("naruto");
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
        
        
        
        function render()
        {
            naruto.style.left = x + "px";
            naruto.style.transform = "scaleX(" + direction + ")";
        }