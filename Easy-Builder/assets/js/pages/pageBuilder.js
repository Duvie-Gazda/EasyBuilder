class elementOnPanel{
    constructor (type,content, elementClass,id, appendTo){
        this.type = type;
        this.content = content;
        this.elementClass = elementClass;
        this.appendTo = appendTo;
        this.id = id;
    }
}
function appendElement(element){
    let num = 0;
    for(let data of element){
        let id = data.id;
        if ((id == '')||(id == 'undefind')){
            id = 'idElement'+num+'EasyBuilder';
        }
        num++;
        //add Elements to Extra panel

        let elementik = $(data.type).addClass(data.elementClass).attr('id',id);
        elementik.html(data.content).appendTo(data.appendTo == undefined? '#extra-panel-EasyBuilder':data.appendTo);
    }
}

function classToggler(elementName,classToggleArr, mainClassArr){
    let element = $(elementName);
    for(let classToggle of classToggleArr)
    {

        if(element.hasClass(classToggle)){
            element.removeClass();
            for(let data of mainClassArr){
                element.addClass(data);
            }
        }
        else{
            element.removeClass();
            for(let data of mainClassArr){
                element.addClass(data);
            }
            for(let data of classToggleArr){
                element.addClass(data);
            }
        }
    }
}

function addDataByClick(clickedElementName , element, parnetName, extraClasses, mainClass){
    // Extra Panel Initalization
    let parent = $(parnetName);
    // Clicked element initialization
        parent.empty();
        // if Extra panel is not Empty 

        if (parent.hasClass(clickedElementName+'clicked')){
            // if it not empty Empty it!
            parent.removeClass();
            parent.addClass(mainClass);
        }
        else{
            //remove connect class
            parent.removeClass();
            //add All classes
            parent.addClass(mainClass);
            for(let clas of extraClasses){
                parent.addClass(clas);
            }
            //add class clicked element
            parent.addClass(clickedElementName+'clicked');
            // add data
            appendElement(element);
        }
}


//ELements show on Extra Panel
$('#Elements-EasyBuilder').on('click', function(){
    let data = [];
    data.push(new elementOnPanel('<div>','','card','element-card-PB'))
    data.push(new elementOnPanel('<div>','data','card-body unselectable','','#element-card-PB'));
    data.push(new elementOnPanel('<div>','','card','element-card-PB'))

    data.push(new elementOnPanel('<div>','super Data','btn-block','','#element-card-PB'))
    addDataByClick('#Elements-EasyBuilder',data, '#extra-panel-EasyBuilder',['content-extra-panel-EasyBuilder'],'extra-panel-EasyBuilder');
})

//settings show on Extra Panel
$('#settings-EasyBuilder').on('click', function(){
    let data = [];
    data.push(new elementOnPanel('<DIV>','','row','row'))
    data.push(new elementOnPanel('<DIV>','Theme','col-lg-5 element-card-extra-panel','','#row'));
    data.push(new elementOnPanel('<div>','Theme','col-lg-5 element-card-extra-panel','','#row'));
    addDataByClick('#settings-EasyBuilder', data,  '#extra-panel-EasyBuilder',['content-extra-panel-EasyBuilder'],'extra-panel-EasyBuilder')
})

// to do show on extra panel
$('#task-EasyBuilder').on('click', function(){
    let data = [];
    let rowData = ' <div class="col-lg-12"> <div class="card"> <div class="card-body"> <div class="todo-list"> <ul class="list-unstyled"> <li> <a href="javascript: void(0);" class="custom-checkbox"> <input type="checkbox" class="custom-control-input" id="task1"> <label class="custom-control-label" for="task1"></label> Go to shop </a> </li> <li> <a href="javascript: void(0);" class="custom-checkbox"> <input type="checkbox" class="custom-control-input" id="task2"> <label class="custom-control-label" for="task2"></label> Finish java assignment </a> </li> <li> <a href="javascript: void(0);" class="custom-checkbox"> <input type="checkbox" class="custom-control-input" id="task3"> <label class="custom-control-label" for="task3"></label> Send e-mail to Dr. Collins </a> </li> <li> <a href="javascript: void(0);" class="custom-checkbox"> <input type="checkbox" class="custom-control-input" id="task4"> <label class="custom-control-label" for="task4"></label> Delete all folders in ../assets/plugins </a> </li> <li> <a href="javascript: void(0);"class="custom-checkbox done"> <input type="checkbox" class="custom-control-input" id="task5" checked> <label class="custom-control-label" for="task5"></label> Sell iPad Mini </a> </li> <li> <a href="javascript: void(0);" class="custom-checkbox done"> <input type="checkbox" class="custom-control-input" id="task6" checked> <label class="custom-control-label" for="task6"></label> Create new Amazon account </a> </li> <li> <a href="javascript: void(0);" class="custom-checkbox"> <input type="checkbox" class="custom-control-input" id="task7"> <label class="custom-control-label" for="task7"></label> Check new codes from section #7 student assignments </a> </li> </ul> </div> </div> </div> </div> <div class="col-lg-12"> <div class="card"> <div class="card-body"> <div class="todo-sidebar"> <div class="todo-new-task"> <button class="btn btn-primary btn-block" data-toggle="modal" data-target="#newTask">Create New Task</button> <div class="modal fade" id="newTask" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"> <div class="modal-dialog modal-dialog-centered" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="exampleModalLabel">New Task</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <i class="material-icons">close</i> </button> </div> <div class="modal-body"> <form> <div class="form-group"> <input type="text" class="form-control" id="new-task-name" placeholder="Task Name"> </div> </form> </div> <div class="modal-footer"> <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button> <button type="button" class="btn btn-primary">Add</button> </div> </div> </div> </div> </div> <div class="todo-menu"> <ul class="list-unstyled"> <li class="active"><a href="#"><i class="fas fa-bars"></i>All</a></li> <li><a href="#"><i class="fas fa-check"></i>Completed</a></li> <li><a href="#"><i class="fas fa-trash"></i>Deleted</a></li> </ul> </div> <div class="divider"></div> <div class="todo-search"> <form> <div class="input-group"> <input type="text" id="todo-search" class="form-control" placeholder="Search task"> </div> </form> </div> </div> </div> </div> </div>';
    data.push(new elementOnPanel('<div>','','','container-PB'));
    data.push(new elementOnPanel('<DIV>','','connect-wrapper','connect-wrapper','#container-PB'));
    data.push(new elementOnPanel('<DIV>',rowData,'row','connect-rowPB','#connect-wrapper'));
    addDataByClick('#task-EasyBuilder',data,  '#extra-panel-EasyBuilder',['content-extra-panel-EasyBuilder-task'],'extra-panel-EasyBuilder');

    "use strict";
    if($('#extra-panel-EasyBuilder').hasClass('#task-EasyBuilderclicked'))
    {
        var input = document.querySelector('#todo-search');
        var log;

        input.addEventListener('input', updateValue);
        
        function updateValue(e) {
            log = e.target.value;
        }
        
        
        input.addEventListener('input', updateList);
        
        function updateList(e) {
            $('.todo-list ul li a').each(function( index ) {
                if ($(this).text().toLowerCase().indexOf(log.toLowerCase()) >= 0) {
                    $(this).fadeIn(300);
                } else {
                    $(this).fadeOut(300);
                }
            });
        }
        
        $('.todo-list ul li a input[type="checkbox"]').change(function() {
            if($(this).prop('checked') > 0) {
                $(this).parent().addClass('done');
            } else {
                $(this).parent().removeClass('done');
            }
        });
    }
})

// preview show on extra panel
$('#devices-EasyBuilder').on('click', function(){
    let data = [];
    // data.push(new elementOnPanel('<div>','','row','devices-preview','#extra-panel-EasyBuilder'));
    // data.push(new elementOnPanel('<div>','','row','devices-preview','#extra-panel-EasyBuilder'));

    // //smartphone wertical 
    // data.push(new elementOnPanel('<div>','','preview-row','smartphone-preview','#extra-panel-EasyBuilder'));
    // data.push(new elementOnPanel('<div>','smartphone','previesw-card material-icons unselectable','smartphone-card','#smartphone-preview'));
    
    // // horizontal
    // data.push(new elementOnPanel('<div>','','preview-row','smartphone-preview','#extra-panel-EasyBuilder'));
    // data.push(new elementOnPanel('<div>','tablet','previesw-card material-icons unselectable','horizontal-card','#smartphone-preview'));
    
    data.push(new elementOnPanel('<DIV>','','row','row'))
    data.push(new elementOnPanel('<DIV>','smartphone','material-icons col-lg-5 element-card-extra-panel unselectable','smartphone-card','#row'));
    data.push(new elementOnPanel('<div>','tablet','material-icons col-lg-5 element-card-extra-panel unselectable','horizontal-card','#row'));
    //add elements
    addDataByClick('#devices-EasyBuilder',data,'#extra-panel-EasyBuilder',['content-extra-panel-EasyBuilder'],'extra-panel-EasyBuilder');

    if($('#extra-panel-EasyBuilder').hasClass('#devices-EasyBuilderclicked')){
        $('#smartphone-card').on('click', function(){
            classToggler('#page-demo',['page-demo-smartphone'],['page-demo']);
        })
        $('#horizontal-card').on('click', function(){
            classToggler('#page-demo',['page-demo-smartphone-horizontal'],['page-demo']);
        })
    }
})

//shop show on shop popup
$('#shop-EasyBuilder').on('click', function(){
    let data = [];
    data.push(new elementOnPanel('<DIV>','','row','row','#shop-popup'))
    data.push(new elementOnPanel('<DIV>','smartphone','material-icons col-lg-5 element-card-extra-panel unselectable','smartphone-card','#row'));
    data.push(new elementOnPanel('<div>','tablet','material-icons col-lg-5 element-card-extra-panel unselectable','horizontal-card','#row'));

    //add elements
    addDataByClick('#shop-EasyBuilder',data,'#shop-popup',['content-shop-popup'],'shop-popup');
})