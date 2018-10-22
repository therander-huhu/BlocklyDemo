'use strict';
var currentBlock;
var DemoApp = {};
DemoApp.startScale = window.clientZoom*0.9;
DemoApp.initApplication = function () {
    var demoWorkspace = Blockly.inject('blocklyDiv',
        {
            media: '../../media/',
            toolbox: document.getElementById('toolbox'),
            scrollbars: false,
            zoom: {
                controls: false,
                wheel: false,
                startScale: DemoApp.startScale,
                maxScale: 3,
                minScale: 0.3,
                scaleSpeed: 1.2,
            },
            trashcan: false,
//                css: false
        });
    return demoWorkspace;
};

DemoApp.initData = function () {
    Blockly.HSV_SATURATION = 0.45;
    Blockly.HSV_VALUE = 0.8;
};

DemoApp.initStartBlocks = function () {
    // Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'),
    //     this.workSpace);

    let dom = Blockly.Xml.textToDom('<xml id="startBlocks" style="display: none">'+
    '<block x="200" y="10" type="telecontroller"></block></xml>');
    Blockly.Xml.domToWorkspace(dom,
        this.workSpace);
};

DemoApp.addEventListener = function () {
    let self = this;
    function showCode () {
        Blockly.Python.INFINITE_LOOP_TRAP = null;
        var code = Blockly.Python.workspaceToCode(DemoApp.workSpace);
        // console.log(code)
        window.android.writeToDevice(code);
    }
    var generateButton = document.getElementById("generateButton");
    generateButton.addEventListener("click", showCode);

    let zoomEqual = document.getElementById("zoomEqual");
    Blockly.bindEventWithChecks_(zoomEqual, 'mousedown', null, function(e) {
        self.workSpace.markFocused();
        self.workSpace.setScale(self.startScale);
        Blockly.Touch.clearTouchIdentifier();  // Don't block future drags.
        e.stopPropagation();  // Don't start a workspace scroll.
        e.preventDefault();  // Stop double-clicking from selecting text.
      });
      let zoomMinus = document.getElementById("zoomPlus");
      Blockly.bindEventWithChecks_(zoomMinus, 'mousedown', null, function(e) {
        self.workSpace.markFocused();
        self.workSpace.zoomCenter(1);
        Blockly.Touch.clearTouchIdentifier();  // Don't block future drags.
        e.stopPropagation();  // Don't start a workspace scroll.
        e.preventDefault();  // Stop double-clicking from selecting text.
      });
      let zoomPlus = document.getElementById("zoomMinus");
      Blockly.bindEventWithChecks_(zoomPlus, 'mousedown', null, function(e) {
        self.workSpace.markFocused();
        self.workSpace.zoomCenter(-1);
        Blockly.Touch.clearTouchIdentifier();  // Don't block future drags.
        e.stopPropagation();  // Don't start a workspace scroll.
        e.preventDefault();  // Stop double-clicking from selecting text.
      });

      let programListButton = document.getElementById("listButton");
      programListButton.addEventListener("touchend", function(){
        DemoApp.showDialog("programDialog")
      });

      let programSaveButton = document.getElementById("saveButton");
      programSaveButton.addEventListener("touchend", function(){
        DemoApp.showDialog("programNameDialog")
      });

      let dialogBg = document.getElementById("dialogBg");
      dialogBg.addEventListener("click", function () {});

      let drawCancel = document.getElementById("drawCancel");
      drawCancel.addEventListener("touchend", function(){
        DemoApp.hideDialog('drawingBoard');
      });
};

DemoApp.initCustomBlocks = function(){
    // this.workSpace.createVariable("A", "");

    // this.workSpace.registerToolboxCategoryCallback("Functions",
    //     Blockly.Function.flyoutCategory);
};

DemoApp.showDialog = function (id, block) {
    var dialog = document.getElementById("dialog");
    dialog.style.display = "table";
    dialog = document.getElementById(id);
    dialog.className = "dialog show";
    dialog.block = block;
}

DemoApp.hideDialog = function (id) {
    var dialog = document.getElementById("dialog");
    dialog.style.display = "none";
    
    dialog = document.getElementById(id);
    dialog.className = "dialog hide";
}

DemoApp.onBeepClick = function () {
    let beep = this.getAttribute("beep");
    let color = this.getAttribute("color");
    let dialog = document.getElementById("beepSelect");
    let block = dialog.block;
    block.setFieldValue(beep, "NAME")
    DemoApp.hideDialog("beepSelect");
}

DemoApp.onTeleControlClick = function () {
    let key = this.getAttribute("key");
    let dialog = document.getElementById("teleControlSelect");
    let block = dialog.block;
    block.setFieldValue(key, "NAME")
    DemoApp.hideDialog("teleControlSelect");
}

DemoApp.initDialog = function () {
    let cell = document.getElementById("cell");

    let self = this;
    function initBeepSelect() {
        let div = document.createElement("div");
        div.id = "beepSelect";
        div.className = "dialog hide";
        cell.appendChild(div);
    
        let tb = document.createElement("ul");
        div.appendChild(tb);
    
        let model = [3, 7];
        let colors = [["#f36c60", "#ba68c8","#80d8ff","#64ffda","#5af158","#fbc02d","#bcaaa4"],
        ["#e84e40","#ab47bc","#40c4ff","#1decb8","#14e715","#f9a825","#a0877e"],
        ["#e51c23","#9c27b0","#0090ea","#00bfa5","#12c700","#f57f17","#8c6d62"]];
        let beeps = [["C1", "D1", "E1", "F1", "G1", "A1", "B1"],
        ["C2", "D2", "E2", "F2", "G2", "A2", "B2"],
        ["C3", "D3", "E3", "F3", "G3", "A3", "B3"]]
        for(let i=0; i<model[0]; i++) {
            let tr = document.createElement("li");
            for(let j=0; j<model[1]; j++) {
                let td = document.createElement("a");
                tr.appendChild(td);
                td.style = "background: " + colors[i][j];
                td.setAttribute("beep", beeps[i][j]);
                td.setAttribute("color", colors[i][j]);
                td.innerHTML = beeps[i][j];
    
                td.addEventListener("touchend", self.onBeepClick)
            }
    
            tb.appendChild(tr);
        }
    };

    initBeepSelect();

    function initTeleControlSelect() {
        let div = document.createElement("div");
        div.id = "teleControlSelect";
        div.className = "dialog hide";
        cell.appendChild(div);
        let tb = document.createElement("ul");
        div.appendChild(tb);

        let model = [7, 3];
        let colors = {
            "letter": "#89A1A5",
            "direction": "#2A89A5",
            "setting": "#A1A589",
            "number": "#E1EAE9"
        }
        let config = [
            [{key: "A", type: "letter"},
            {key: "B", type: "letter"},
            {key: "C", type: "letter"}],
            [{key: "D", type: "letter"},
            {key: "上", type: "direction"},
            {key: "E", type: "letter"}],
            [{key: "左", type: "direction"},
            {key: "设置", type: "setting"},
            {key: "右", type: "direction"}],
            [{key: "0", type: "number"},
            {key: "下", type: "direction"},
            {key: "F", type: "letter"}],
            [{key: "1", type: "number"},
            {key: "2", type: "number"},
            {key: "3", type: "number"}],
            [{key: "4", type: "number"},
            {key: "5", type: "number"},
            {key: "6", type: "number"}],
            [{key: "7", type: "number"},
            {key: "8", type: "number"},
            {key: "9", type: "number"}]
        ];
        for(let i=0; i<model[0]; i++) {
            let tr = document.createElement("li");
            for(let j=0; j<model[1]; j++) {
                let td = document.createElement("a");
                tr.appendChild(td);
                let key = config[i][j].key;
                let content = key;
                if (content == "上") {
                    content = '<img src="../../media/res/arrow_up.png">';
                } else if (content == "下") {
                    content = '<img src="../../media/res/arrow_down.png">';
                } else if (content == "左") {
                    content = '<img src="../../media/res/arrow_left.png">';
                } else if (content == "右") {
                    content = '<img src="../../media/res/arrow_right.png">';
                } else if (content == "设置") {
                    content = '<img src="../../media/res/setting.png">';
                } 
                let type = config[i][j].type;
                let color = colors[type];
                
                td.style = "background: " + color;
                td.setAttribute("key", key);
                td.innerHTML = content;
    
                td.addEventListener("touchend", self.onTeleControlClick)
            }
    
            tb.appendChild(tr);
        }
    }

    initTeleControlSelect();

    function initDrawBoard () {
       
    }

    initDrawBoard();
};

DemoApp.exportXml = function () {
    let xml = Blockly.Xml.workspaceToDom(this.workSpace);
    return xml;
},

DemoApp.init = function () {
    this.initData();
    this.workSpace = this.initApplication();
    this.initStartBlocks();
    this.initDialog();
    this.addEventListener();
    this.initCustomBlocks();
};

DemoApp.init();

DemoApp.drawBoard = {
    mode: 1,//1:编辑 0:橡皮擦
    init: function (){
        let drawContent = document.getElementById("drawContent");
        for(let i=0; i<8; i++) {
            let tr = document.createElement("li");
            for(let j=0; j<16; j++) {
                let td = document.createElement("a");
                td.setAttribute("index", i*16 + j);
                tr.appendChild(td);
            }
            drawContent.appendChild(tr);
        }

        drawContent.addEventListener("touchstart", this.onPixelClick);
        drawContent.addEventListener("touchmove", this.onPixelClick);
        let confirmBtn = document.getElementById("drawConfirm");
        confirmBtn.addEventListener("touchend", this.onConfirm);

        let pen = document.getElementById("drawPen");
        pen.addEventListener("touchend", function(){
            DemoApp.drawBoard.changemode(1);
        });

        let eraser = document.getElementById("drawEraser");
        eraser.addEventListener("touchend", function(){
            DemoApp.drawBoard.changemode(0);
        });

        let drawTrashcan = document.getElementById("drawTrashcan");
        drawTrashcan.addEventListener("touchend", function(){
            DemoApp.drawBoard.clear();
        });
    },

    onPixelClick: function (event) {
        let target = event.target;
        let touchX = event.touches[0].clientX;
        let touchY = event.touches[0].clientY;
        let drawContent = document.getElementById("drawContent");
        let tds = drawContent.getElementsByTagName("a");

        for(let i=0; i<tds.length; i++) {
            let $td = $(tds[i]);
            if (touchX <= tds[i].clientWidth + $td.offset().left && touchX >= $td.offset().left
            && touchY <= tds[i].clientHeight + $td.offset().top && touchY >= $td.offset().top) {
                if (DemoApp.drawBoard.mode == 1 && tds[i].getAttribute("select") != 1) {
                    tds[i].setAttribute("select", 1);
                    tds[i].style.background = Blockly.FieldDraw.drawColor; 
                } else if (DemoApp.drawBoard.mode == 0 && tds[i].getAttribute("select") != 0) {
                    tds[i].setAttribute("select", 0);
                    tds[i].style.background = "#cbcbcb"; 
                }
            }
        }

    },

    setData: function (data) {
        let drawContent = document.getElementById("drawContent");
        let trs = drawContent.getElementsByTagName("li");
        for(let i=0; i<trs.length; i++) {
            let tr = trs[i];
            let tds = tr.getElementsByTagName("a");
            for(let j=0; j<tds.length; j++) {
                let td = tds[j];
                if (data[i][j] == 1) {
                    td.style.background = Blockly.FieldDraw.drawColor;  
                } else {
                    td.style.background = "#cbcbcb";
                }
                td.setAttribute("index", i*16 + j);
                td.setAttribute("select", data[i][j]);
            }
        }
    },

    clear: function () {
        let drawContent = document.getElementById("drawContent");
        let trs = drawContent.getElementsByTagName("li");
        for(let i=0; i<trs.length; i++) {
            let tr = trs[i];
            let tds = tr.getElementsByTagName("a");
            for(let j=0; j<tds.length; j++) {
                let td = tds[j];
                td.style.background = "#cbcbcb";
                td.setAttribute("select", 0);
            }
        }
    },

    changemode: function (mode) {
        DemoApp.drawBoard.mode = mode;
    },

    onConfirm: function () {
        let data = [];
        
        let drawContent = document.getElementById("drawContent");
        let trs = drawContent.getElementsByTagName("li");
        for(let i=0; i<trs.length; i++) {
            let tr = trs[i];
            let tds = tr.getElementsByTagName("a");
            let data_ = [];
            for(let j=0; j<tds.length; j++) {
                let td = tds[j];
                data_.push(td.getAttribute("select"));
            }
            data.push(data_);
        }

        let dialog = document.getElementById("drawingBoard");
        let block = dialog.block;
        block.setFieldValue(data, "EMOJI")
        DemoApp.hideDialog("drawingBoard");
    },
}

DemoApp.drawBoard.init();