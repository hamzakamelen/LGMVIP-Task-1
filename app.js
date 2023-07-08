var list = document.getElementById('list')
function generateElement() {
    var li = document.createElement('li')
    var text = document.getElementById('todo')
    var txtNode = document.createTextNode(text.value)
    li.setAttribute("class","textlist")
    list.appendChild(li)
    li.appendChild(txtNode)
    text.value = ""
    // Delete button
    var delbtn = document.createElement('button')
    var Btntxt = document.createTextNode("Delete")
    delbtn.appendChild(Btntxt)
    delbtn.setAttribute("class","btn")
    li.appendChild(delbtn)
    delbtn.setAttribute('onclick', 'del(this)')
    // Edit button
    var editbtn = document.createElement('button')
    var Btnetxt = document.createTextNode("Edit")
    editbtn.appendChild(Btnetxt)
    editbtn.setAttribute("class","btne")
    li.appendChild(editbtn)
    editbtn.setAttribute('onclick', 'edit(this)')
}
// function for Delete button
function del(element) {
    element.parentNode.remove()
}
// function for Edit button
function DeleteAll() {
    list.parentNode.remove()
}
function edit(ele) {
    var NewEle = prompt("Enter Edit Value")
    ele.parentNode.firstChild.nodeValue = NewEle
}