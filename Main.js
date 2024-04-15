
const btnopen=document.getElementById('iconopen')
const btnclose= document.getElementById('closeButton')
const munulink=document.getElementById('menulink')
btnopen.addEventListener('click',function(){
    munulink.style.display='block'
    btnopen.style.display='none'
    btnclose.style.display='block'
})
btnclose.addEventListener('click',function(){
    munulink.style.display='none'
    btnopen.style.display='block'
    btnclose.style.display='none'
 })