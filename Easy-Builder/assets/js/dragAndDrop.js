let oject = document.getElementById('panel');
function addArea(){
  $('<DIV>').addClass('elements-area').html('dd').appendTo('body');
  $('<DIV>').addClass('row').attr('id','area-top').appendTo('.page-demo');
  $('<DIV>').addClass('.droppable-panel-elements').addClass('col-lg-12').appendTo('#area-top');
}
oject.onmousedown = function(event) {
  let currentDroppable = null;

  let shiftX = event.clientX - oject.getBoundingClientRect().left;
  let shiftY = event.clientY - oject.getBoundingClientRect().top;

  oject.style.position = 'absolute';
  oject.style.zIndex = 1000;
  document.body.append(oject);
  addArea();
  moveAt(event.pageX, event.pageY);
  function moveAt(pageX, pageY) {
    oject.style.left = pageX - shiftX + 'px';
    oject.style.top = pageY - shiftY + 'px';
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

function enterDroppable(elem) {
  elem.style.background = 'pink';
}

function leaveDroppable(elem) {
  elem.style.background = '';
}

oject.ondragstart = function() {
  return false;
};