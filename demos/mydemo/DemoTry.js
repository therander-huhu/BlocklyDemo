// function showCode() {
//     Blockly.Python.INFINITE_LOOP_TRAP = null;
//     var code = Blockly.Python.workspaceToCode(demoWorkspace);
//     alert(code);
// }
//
// function runCode() {
//     window.LoopTrap = 1000;
//     Blockly.Python.INFINITE_LOOP_TRAP =
//         'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
//     var code = Blockly.Python.workspaceToCode(demoWorkspace);
//     Blockly.Python.INFINITE_LOOP_TRAP = null;
//     console.log(code)
// };
var DemoApp = {};

DemoApp.initApplication = function () {
    var demoWorkspace = Blockly.inject('blocklyDiv',
        {
            media: '../../media/',
            toolbox: document.getElementById('toolbox'),
            scrollbars: false,
            zoom: {
                controls: false,
                wheel: false,
                startScale: 1.5,
                maxScale: 3,
                minScale: 0.3,
                scaleSpeed: 1.2
            },
//                css: false
        });
    return demoWorkspace;
};

DemoApp.initData = function () {
    Blockly.HSV_SATURATION = 0.45;
    Blockly.HSV_VALUE = 0.8;
};

DemoApp.initStartBlocks = function () {
    Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'),
        this.workSpace);
};

DemoApp.addEventListener = function () {
    function showCode () {
        Blockly.Python.INFINITE_LOOP_TRAP = null;
        var code = Blockly.Python.workspaceToCode(DemoApp.workSpace);
        console.log(code);
        window.android.writeToDevice(code);
    }
    var generateButton = document.getElementById("generateButton");
    generateButton.addEventListener("click", showCode);
};

DemoApp.initCustomBlocks = function(){
    this.workSpace.createVariable("A", "");

    this.workSpace.registerToolboxCategoryCallback("Functions",
        Blockly.Function.flyoutCategory);
};

DemoApp.init = function () {
    console.log(this);
    this.initData();
    this.workSpace = this.initApplication();
    this.initStartBlocks();
    this.addEventListener();
    this.initCustomBlocks();
};


// DemoApplication.initApplication = function () {
//     var demoWorkspace = Blockly.inject('blocklyDiv',
//         {
//             media: '../../media/',
//             toolbox: document.getElementById('toolbox'),
//             scrollbars: false,
//             zoom: {
//                 controls: false,
//                 wheel: false,
//                 startScale: 1.5,
//                 maxScale: 3,
//                 minScale: 0.3,
//                 scaleSpeed: 1.2
//             },
// //                css: false
//         });
//     Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'),
//         demoWorkspace);
//     console.log(demoWorkspace.Toolbox);
//
//     var generateButton = document.getElementById("generateButton");
//     generateButton.addEventListener("click", showCode);
//
//     function showCode () {
//         Blockly.Python.INFINITE_LOOP_TRAP = null;
//         var code = Blockly.Python.workspaceToCode(demoWorkspace);
//         alert(code);
//     }
//
//     demoWorkspace.createVariable("A", "");
// };
//
// DemoApplication.initApplication();
DemoApp.init();

