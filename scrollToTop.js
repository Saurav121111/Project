window.onscroll = function() {
        scrollFunction();
        
    }
    
    function scrollFunction()
        {
            if( document.body.scrollTop > 500)
                {
                    document.getElementById("myBtn").style.display = "block";
                } else {
                    document.getElementById("myBtn").style.display = "none";
                }
        }
        function topF()
{
    
    document.body.scrollTop = 0;
}