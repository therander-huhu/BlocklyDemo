'use strict';
var currentBlock;
var renderer
var nedb
var db
if (ifInPcClient()) {
    renderer = nodeRequire('../../../renderer.js')
    nedb = nodeRequire('nedb')
    db = new nedb({
        filename:'/data/save.db',
        autoload: true
    })
}
if (!ifInPcClient()) {
    $(".serialport").css({ "display": "none" })
} else {
    $(".serialport").css({ "display": "block" })
    displaySplash()
}
const clickOrTouch = ifInPcClient() ? "click" : "touchend"
var DemoApp = {};
DemoApp.startScale = window.clientZoom*0.9;
DemoApp.startProgram = '<xml><block type="start_block"></block></xml>';
DemoApp.startProgramName = "initialProgram";
DemoApp.initApplication = function () {
    var demoWorkspace = Blockly.inject('blocklyDiv',
        {
            media: '../../media/',
            toolbox: document.getElementById('toolbox'),
            scrollbars: true,
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
    let dom = Blockly.Xml.textToDom(this.startProgram);
    this.currentProgram = "";

    Blockly.Xml.domToWorkspace(dom,
        this.workSpace);
};

DemoApp.addEventListener = function () {
    let self = this;

    function showDebugCode() {
      let has = hasStartBlock();
      if(!has) {
        showCommonTip("请拖入启动块，并保证启动块下有流程块");
        return
      }
      Blockly.Python.INFINITE_LOOP_TRAP = null;
      var code = Blockly.Python.workspaceToCode(DemoApp.workSpace);
      // console.log(code)
      if (window.os == "iOS") {
        window.webkit.messageHandlers.writeDebugStrToDevice.postMessage({code: code})
      } else if (window.os == "AndroidOS") {
        window.android.writeDebugStrToDevice(code);
      } else {
        //pc
        renderer.writeDebugStrOperation(code)
      }
    }

    function showCode () {
        let has = hasStartBlock();
        if(!has) {
            showCommonTip("请拖入启动块，并保证启动块下有流程块");
            return
        }
        Blockly.Python.INFINITE_LOOP_TRAP = null;
        var code = Blockly.Python.workspaceToCode(DemoApp.workSpace);
        // console.log(code)
        if (window.os == "iOS") {
            window.webkit.messageHandlers.writeToDevice.postMessage({code: code})
        } else if (window.os == "AndroidOS") {
            window.android.writeToDevice(code);
        } else {
            //pc
            renderer.writeOperation(code)
        }
    }
    var generateButton = document.getElementById("generateButton");
    generateButton.addEventListener("click", showCode);

    var debugButton = document.getElementById("debugButton");
    debugButton.addEventListener("click", showDebugCode);

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

      let programSaveButton = document.getElementById("saveButton");
      programSaveButton.addEventListener(clickOrTouch, function(){
        if (DemoApp.currentProgram || DemoApp.currentProgram == "") {
            var newProgramName = document.getElementById("newProgramName");
            newProgramName.value = DemoApp.currentProgram;
        }
        DemoApp.showDialog("programNameDialog")
      });

      let dialogBg = document.getElementById("dialogBg");
      dialogBg.addEventListener("click", function () {});

      let drawCancel = document.getElementById("drawCancel");
      drawCancel.addEventListener(clickOrTouch, function(){
        DemoApp.hideDialog('drawingBoard');
      });

      let addFunction = document.getElementById("addFunction");
      addFunction.addEventListener(clickOrTouch, function(){
        let text = document.getElementById("newFunctionName").value;
        if (text == "") return;
        DemoApp.hideDialog('FunctionNameDialog', text);
      });

      let modifyProgramName = document.getElementById("modifyProgramName");
      modifyProgramName.addEventListener(clickOrTouch, function(){
        let text = this.parentElement.getElementsByTagName("input")[0].value;
        if (text == "") return;
        DemoApp.hideDialog('modifyProgramNameDialog', text);
        DemoApp.showDialog("programDialog");
      });

      let commonTipOk = document.getElementById("commonTipOk");
      commonTipOk.addEventListener(clickOrTouch, function(){
        DemoApp.hideDialog('commonTip');
      });

      let programNameDialogClose = document.getElementById("programNameDialogClose");
      programNameDialogClose.addEventListener(clickOrTouch, function(){
        DemoApp.hideDialog('programNameDialog')
      });
};

DemoApp.initCustomBlocks = function(){
    // this.workSpace.createVariable("A", "");

    // this.workSpace.registerToolboxCategoryCallback("Functions",
    //     Blockly.Function.flyoutCategory);
};

DemoApp.showDialog = function (id, block, callback, target) {
    var dialog = document.getElementById("dialog");
    dialog.style.display = "table";
    dialog = document.getElementById(id);
    dialog.className = "dialog show";
    dialog.block = block;
    dialog.callback = callback;
    dialog.target = target;
}

DemoApp.hideDialog = function (id, data) {
    var dialog = document.getElementById("dialog");
    dialog.style.display = "none";
    
    dialog = document.getElementById(id);
    dialog.className = "dialog hide";
    if (dialog.callback && data) {
        dialog.callback.call(dialog.target, data);
    }
}

DemoApp.onBeepClick = function () {
    let beep = this.getAttribute("beep");
    let color = this.getAttribute("color");
    let dialog = document.getElementById("beepSelect");
    let block = dialog.block;
    block.setFieldValue(beep, "NAME")
    setTimeout(function () {
        DemoApp.hideDialog("beepSelect");
    }, 1)
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
    
                td.addEventListener(clickOrTouch, self.onBeepClick)
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
    
                td.addEventListener(clickOrTouch, self.onTeleControlClick)
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
        confirmBtn.addEventListener(clickOrTouch, this.onConfirm);

        let pen = document.getElementById("drawPen");
        pen.addEventListener(clickOrTouch, function(){
            DemoApp.drawBoard.changemode(1);
        });

        let eraser = document.getElementById("drawEraser");
        eraser.addEventListener(clickOrTouch, function(){
            DemoApp.drawBoard.changemode(0);
        });

        let drawTrashcan = document.getElementById("drawTrashcan");
        drawTrashcan.addEventListener(clickOrTouch, function(){
            DemoApp.drawBoard.clear();
        });
    },

    onPixelClick: function (event) {
        let target = event.target;
        let touchX
        let touchY
        if (ifInPcClient()) {
            touchX = event.clientX;
            touchY = event.clientY;
        } else {
            touchX = event.touches[0].clientX;
            touchY = event.touches[0].clientY;
        }
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
};

DemoApp.programList = {
    init: function () {
        var self = this;
        var programListButton = document.getElementById("listButton");
        programListButton.addEventListener(clickOrTouch, function(){
            self.showList(); 
        });

        var addProgram = document.getElementById("addProgram");
        addProgram.addEventListener(clickOrTouch, function(){
            var newProgramName = document.getElementById("newProgramName");
            var name = newProgramName.value;
            self.saveProgram(name);
        });

        var resetProgram = document.getElementById("resetProgram");
        resetProgram.addEventListener(clickOrTouch, function(){
            self.initStartBlocks();
        });

        var newProgram = document.getElementById("newProgram");
        newProgram.addEventListener(clickOrTouch, function(){
            self.newProgram();
        });
    },

    showList: function () {
        this.onGetKeyCallback = function (key, value) {
            this.initList(value);
            DemoApp.showDialog("programDialog");
        }
        
        this.getProgramNames();
    },

    initList: function (data) {
        var self = this;
        var programList = document.getElementById("programList");
        programList.innerHTML = "";
        for(var i=0; i<data.length; i++) {
            var li = document.createElement("li");
            li.setAttribute("programName", data[i]);
            programList.appendChild(li);
            var span = document.createElement("span");
            span.innerText = data[i];
            li.appendChild(span);
            var modifyButton = document.createElement("button");
            modifyButton.className = "modify_program";
            li.appendChild(modifyButton);
            var modifyIcon = document.createElement("img");
            modifyIcon.setAttribute("src", "../../media/res/pen.png");
            modifyIcon.setAttribute("width", 40);
            modifyButton.appendChild(modifyIcon);

            var deleteButton = document.createElement("button");
            deleteButton.className = "delete_program";
            li.appendChild(deleteButton);
            var deleteIcon = document.createElement("img");
            deleteIcon.setAttribute("src", "../../media/res/trashcan.png");
            deleteIcon.setAttribute("width", 40);
            deleteButton.appendChild(deleteIcon);

            li.addEventListener("touchstart", function () {
                    this.emitEvent = true;
                }
            );

            li.addEventListener("touchend", function () {
                    if (this.emitEvent) {
                        var name = this.getAttribute("programName");
                        self.onModifity(name);
                    }
                }     
            );

            li.addEventListener("touchmove", function () {
                    this.emitEvent = false;
                } 
            );

            if (ifInPcClient()) {
                li.addEventListener("mousedown", function () {
                    this.emitEvent = true;
                    this.isClickStart = true;
                })

                li.addEventListener("mousemove", function () {
                    if (this.isClickStart) {
                        this.emitEvent = false;
                    }
                })

                li.addEventListener("mouseup", function () {
                    if (this.emitEvent) {
                        var name = this.getAttribute("programName");
                        self.onModifity(name);
                    }
                })

                li.addEventListener("mouseleave", function () {
                    this.emitEvent = false;
                    this.isClickStart = false;
                })
            }

            modifyButton.addEventListener("touchstart", function () {
                this.emitEvent = true;
                }
            )
            modifyButton.addEventListener("touchmove", function () {
                    this.emitEvent = false;
                } 
            );

            modifyButton.addEventListener(clickOrTouch, function (event) {
                    if (this.emitEvent) {
                        var name = this.parentElement.getAttribute("programname");
                        document.getElementById("newModifyProgramName").value = name;
                        DemoApp.hideDialog("programDialog");
                        DemoApp.showDialog("modifyProgramNameDialog", null, function(text){
                            console.log(text);
                            let oldName = this.parentElement.getAttribute("programname");
                            let newName = text;
                            DemoApp.programList.onModifityName(oldName, newName);
                        }, this);
                        event.stopImmediatePropagation();
                    }
                }
            )

            if (ifInPcClient()) {
                modifyButton.addEventListener("mousedown", function () {
                    this.emitEvent = true;
                    this.isClickStart = true;
                })

                modifyButton.addEventListener("mousemove", function () {
                    if (this.isClickStart) {
                        this.emitEvent = false;
                    }
                })

                modifyButton.addEventListener("mouseup", function () {
                    if (this.emitEvent) {
                        var name = this.parentElement.getAttribute("programname");
                        document.getElementById("newModifyProgramName").value = name;
                        DemoApp.hideDialog("programDialog");
                        DemoApp.showDialog("modifyProgramNameDialog", null, function(text){
                            console.log(text);
                            let oldName = this.parentElement.getAttribute("programname");
                            let newName = text;
                            DemoApp.programList.onModifityName(oldName, newName);
                        }, this);
                        event.stopImmediatePropagation();
                    }
                })

                modifyButton.addEventListener("mouseleave", function () {
                    this.emitEvent = false;
                    this.isClickStart = false;
                })
            }

            deleteButton.addEventListener("touchstart", function () {
                    this.emitEvent = true;
                }
            )
            deleteButton.addEventListener("touchmove", function () {
                    this.emitEvent = false;
                } 
            );

            deleteButton.addEventListener(clickOrTouch, function () {
                    if (this.emitEvent) {
                        var name = this.parentElement.getAttribute("programName");
                        self.onDelete(name);
                        event.stopImmediatePropagation();
                    }  
                }
            )

            if (ifInPcClient()) {
                deleteButton.addEventListener("mousedown", function () {
                    this.emitEvent = true;
                    this.isClickStart = true;
                })

                deleteButton.addEventListener("mousemove", function () {
                    if (this.isClickStart) {
                        this.emitEvent = false;
                    }
                })

                deleteButton.addEventListener("mouseup", function () {
                    if (this.emitEvent) {
                        var name = this.parentElement.getAttribute("programName");
                        self.onDelete(name);
                        event.stopImmediatePropagation();
                    }  
                })

                deleteButton.addEventListener("mouseleave", function () {
                    this.emitEvent = false;
                    this.isClickStart = false;
                })
            }

        }  
    },

    onModifityName: function (oldName, newName) {
        this.onGetKeyCallback = function (key, value) {
            var matchIndex;
            var matchValue;
            for(var i=0; i<value.length; i++) {
                if (value[i] == oldName) {
                    matchIndex = i;
                    matchValue = value[i];
                    break;
                }
            }

            if (matchIndex >= 0) {
                value.splice(matchIndex, 1, newName);
                var namesStr = "";
                for(var i=0; i<value.length; i++) {
                    var nameStr = i == value.length - 1 ? value[i] : value[i] + ";";
                    namesStr += nameStr;
                }
                console.log("onModifityName: ", namesStr);
                this.saveKey("tqProgramNames", namesStr);
                this.onGetKeyCallback = function (key1, value1) {
                    console.log("onModifityName: ", key1, value1);
                    this.saveKey("tqProgram"+newName, value1);
                    this.deleteKey("tqProgram"+matchValue);
                    this.initList(value);
                    DemoApp.showDialog("programDialog");
                };
                this.getProgram(oldName);
                
            }
        }

        this.getProgramNames();
    },

    onModifity: function (name) {
        DemoApp.workSpace.clear();

        this.onGetKeyCallback = function (key, value) {
            var dom = Blockly.Xml.textToDom(value);
            Blockly.Xml.domToWorkspace(dom,
                DemoApp.workSpace);
            DemoApp.currentProgram = key.split("tqProgram")[1];
            DemoApp.hideDialog("programDialog");
        };
        
        this.getProgram(name);
    },

    onDelete: function (name) {
        this.onGetKeyCallback = function (key, value) {
            var matchIndex;
            var matchValue;
            for(var i=0; i<value.length; i++) {
                if (value[i] == name) {
                    matchIndex = i;
                    matchValue = value[i];
                    break;
                }
            }

            if (matchIndex >= 0) {
                value.splice(matchIndex, 1);
                var namesStr = "";
                for(var i=0; i<value.length; i++) {
                    var nameStr = i == value.length - 1 ? value[i] : value[i] + ";";
                    namesStr += nameStr;
                }
                this.saveKey("tqProgramNames", namesStr);
                this.deleteKey("tqProgram"+matchValue);
                this.initList(value);
            }
        }

        this.getProgramNames();
    },

    saveProgram: function (name) {
        if (name) {
            var program = Blockly.Xml.workspaceToDom(DemoApp.workSpace, true);
            var text = Blockly.Xml.domToText(program);
            // console.log("saveProgram" + Blockly.Xml.domToText(program));

            this.onGetKeyCallback = function (key, value) {
                value.push(name);
                var namesStr = "";
                for(var i=0; i<value.length; i++) {
                    var nameStr = i == value.length - 1 ? value[i] : value[i] + ";";
                    namesStr += nameStr;
                }
                this.saveKey("tqProgramNames", namesStr);

                this.saveKey("tqProgram" + name, text);
                DemoApp.hideDialog("programNameDialog");
            },

            this.getProgramNames();    
        }
    },

    newProgram: function () {
        DemoApp.workSpace.clear();
        DemoApp.currentProgram = "";
        DemoApp.hideDialog("programDialog");
    },

    getProgramNames: function () {
        this.getKey("tqProgramNames");
    },

    getProgram: function (key) {
        this.getKey(key);
    },

    getKey: function (key) {
        if (key !=  "tqProgramNames") {
            key = "tqProgram" + key;
        }
        if (window.os == "iOS") {
            window.webkit.messageHandlers.getStr.postMessage({key: key})
        } else if (window.os == "AndroidOS") {
            window.android.getStr(key);
        } else {
            getStr(key)
        }
        // var value;
        // if (key == "tqProgramNames") {
        //     value = "hello;1;2;3;4;5";
        // } else {
        //     value = '<xml id="startBlocks" style="display: none">'+
        //     '<block x="200" y="10" type="telecontroller"><field name="NAME">2</field></block></xml>'
        // }
        // this.onGetKey(key, value);
    },

    onGetKey: function (key, value) {
        if (key == "tqProgramNames") {
            if (value && value != "") {
                value = value.split(";");
            } else {
                value = [];
            }
        }
        if (this.onGetKeyCallback) {
            this.onGetKeyCallback.call(this, key, value);
        }
    },

    saveKey: function (key, value) {
        if (window.os == "iOS") {
            window.webkit.messageHandlers.saveStr.postMessage({key: key, value: value})
        } else if (window.os == "AndroidOS") {
            window.android.saveStr(key, value);
        } else {
            saveStr(key, value)
        }
    },

    deleteKey: function (key) {
        if (window.os == "iOS") {
            window.webkit.messageHandlers.deleteStr.postMessage({key: key})
        } else if (window.os == "AndroidOS") {
            window.android.deleteStr(key);
        } else {
            deleteStr(key)
        }
    }
}

DemoApp.drawBoard.init();
DemoApp.programList.init();

function ifInPcClient() {
    return window.os !== "iOS" && window.os !== "AndroidOS"
}

function getStr(key) {
    db.findOne({
        db_key: key
    }, (err, ret) => {
        if (!err) {
            DemoApp.programList.onGetKey(key, ret && ret.hasOwnProperty('db_value') ? ret.db_value : "")
        } else {
            DemoApp.programList.onGetKey(key, "")
        }
    })
}

function saveStr(mKey, mValue) {
    db.findOne({
        db_key: mKey
    }, (err, ret) =>{
        if (ret && ret.hasOwnProperty('db_value')) {
            db.update({
                db_key: mKey
            }, {
                $set: {db_value: mValue}
            }, {
                multi: true
            }, function (err, numReplaced) {
                if (!err) {
                    console.log(`numReplaced ${numReplaced}`)
                }
            })
        } else {
            db.insert({
                db_key: mKey,
                db_value: mValue
            }, (err, ret) => {
            })
        }
    })
}

function deleteStr(key) {
    db.remove({
        db_key: key
    }, {
        multi: true
    }, (err, ret) =>{})
}

function hasStartBlock() {
    let allBlocks = DemoApp.workSpace.getAllBlocks();
    // console.log(allBlocks)
    for(let i=0; i<allBlocks.length; i++) {
        if (allBlocks[i].getNextBlock() && allBlocks[i].type == "start_block") {
            return true;
        }
    }

    return false;
}

function showCommonTip (text) {
    DemoApp.showDialog("commonTip");
    let dialog = document.getElementById("commonTip");
    let p = dialog.getElementsByClassName("tipContent");
    p[0].innerText = text; 
}

function displaySplash () {
    $("#img_splash").css("display", "block")
    setTimeout(function () {
        $("#img_splash").css("display", "none")
    }, 2000)
}

DemoApp.alert = function (msg) {
    let systemDialog = document.getElementById("systemDialog");
    systemDialog.style.display = "table";
    let alert = document.getElementById("sysAlert");
    alert.className = "sysD show";
    alert.getElementsByTagName("p")[0].innerText = msg;
}

DemoApp.hideAlert = function (data) {
    let systemDialog = document.getElementById("systemDialog");
    systemDialog.style.display = "none";
    
    let alert = document.getElementById("sysAlert");
    alert.className = "sysD hide";
    if (alert.callback && data) {
        alert.callback.call(alert.target, data);
    }
}

DemoApp.prompt = function (msg, defaultValue, callback) {
    let systemDialog = document.getElementById("systemDialog");
    systemDialog.style.display = "table";
    let prompt = document.getElementById("sysPrompt");
    prompt.className = "sysD show";
    prompt.getElementsByTagName("p")[0].innerText = msg;
    prompt.getElementsByTagName("input")[0].value = defaultValue;
    prompt.callback = callback;
}

DemoApp.hidePrompt = function (hascallback) {
    let systemDialog = document.getElementById("systemDialog");
    systemDialog.style.display = "none";

    let prompt = document.getElementById("sysPrompt");
    prompt.className = "sysD hide";
    let value = prompt.getElementsByTagName("input")[0].value;
    if(prompt.callback && hascallback){
        prompt.callback(value);
    }
}

DemoApp.showLoadSuccess = function () {
    showCommonTip("程序上传成功")
}