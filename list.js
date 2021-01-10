var addList=document.getElementById('addItem');
var listItem=document.getElementById('list');
var count=0;
var arr=[];

//Add list Items to the list 

addList.addEventListener('click',function(e){
    if(!document.getElementById('add-task').value)
    {
        return;
    }
        var item=document.getElementById('add-task').value;
        var elem=document.createElement("li");
        elem.innerHTML=item+"<span class='align'><button class='btn'>X</button></span>";
        listItem.appendChild(elem);
        document.getElementById('add-task').value="";
        count++;
        elem.addEventListener('click',del);
    
    if(count===0)
    {
        return;
    }
    document.getElementById('tasks').innerHTML=count;
});

//To Delete the Item from the list

function del()
{
    var complete=this.parentNode.removeChild(this);
    count--;
    var str=complete.innerText;
    arr.push(str.substring(0,str.length-1));
    
    document.getElementById('tasks').innerHTML=count;
    if(count==0)
    {
        document.getElementById('tasks').innerHTML='No';
    }
}

//To see all the completed tasks

var target=document.getElementById('completed');
target.addEventListener('click',function(){
    
    var completelist=document.getElementById('listcomplete');
    var final=document.getElementById('finale');
    final.style.display='block';

    for(var i=0;i<arr.length;i++)
    {
       var ele=document.createElement('li');
       ele.innerText=arr[i];
       completelist.appendChild(ele);
    }
});

//To clear the whole screen or all the tasks from the screen

var clear=document.getElementById('clr');
clear.addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById("listcomplete").innerHTML = "";

    var final=document.getElementById('finale');
    final.style.display='none';
});
