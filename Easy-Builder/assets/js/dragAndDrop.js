function dradElement(elementIDName){
  let oject = document.getElementById(elementIDName);
  oject.ondblclick = function(event) {
    $('#html-editor-container').css({'cursor':'all-scroll'});
    let currentDroppable = null;

    let shiftX = event.clientX - oject.getBoundingClientRect().left;
    let shiftY = event.clientY - oject.getBoundingClientRect().top;

    oject.style.position = 'absolute';
    oject.style.zIndex = 1000;
    document.body.append(oject);
    moveAt(event.pageX, event.pageY);
    function moveAt(pageX, pageY) {
      oject.style.left = pageX - shiftX +15 + 'px';
      oject.style.top = pageY - shiftY-15 + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);

      oject.hidden = true;
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      oject.hidden = false;

      if (!elemBelow) return;

      let droppableBelow = elemBelow.closest('.droppable-panel-elements');
      if (currentDroppable != droppableBelow) {
        if (currentDroppable) { 
          leaveDroppable(currentDroppable);
        }
        currentDroppable = droppableBelow;
        if (currentDroppable) {
          enterDroppable(currentDroppable);
        }
      }
    }

    document.addEventListener('mousemove', onMouseMove);

    oject.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      oject.onmouseup = null;
    };
  };
  oject.ondragstart = function() {
    return false;
  };
  oject.onclick = function() {
    $('#html-editor-container').css({'cursor':'default'});
    return false;
  };
}

function enterDroppable(elem) {
  elem.style.background = 'pink';
}

function leaveDroppable(elem) {
  elem.style.background = '';
}
