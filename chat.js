function sendMessage(){
  const msg=document.getElementById('msg').value;
  const div=document.createElement('div');
  div.innerText=msg;
  document.getElementById('messages').appendChild(div);
  document.getElementById('msg').value='';
}