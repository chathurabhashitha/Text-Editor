function bold()   {
    document.execCommand('bold', true , null) 
 }
 function underline()   {
    document.execCommand('underline', true , null) 
 } 
 function italic()   {
    document.execCommand('italic', true , null) 
 }
 $('.left').on('click',function(){
    
    document.getElementById('editor').style.textAlign = 'left '
 })