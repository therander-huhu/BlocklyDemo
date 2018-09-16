// 电机转速
Blockly.Python['d_c_generator_roll_with_speed'] = function(block) {
    var speed = block.getFieldValue('SPEED');
    var generator = block.getFieldValue('GENERATOR');
    var code;

    code = 'generatorRollWithSpeed(' + generator + ',' + speed + ')';
    code = code + '\n';
    return code;
};

//板载LED
Blockly.Python['turn_on_on_board_light'] = function(block) {
    var select = block.getFieldValue('SELECT');
    var colorR = block.getFieldValue('COLOR_RED');
    var colorG = block.getFieldValue('COLOR_GREEN');
    var colorB = block.getFieldValue('COLOR_BLUE');
    var code;


    code = 'setLed(' + select + ',' + colorR + ',' + colorG + ',' + colorB + ')';
    code = code + '\n';
    return code;
};

//　播放音调
Blockly.Python['play_sound_by_beat'] = function(block) {
    var name = block.getFieldValue('NAME');
    var beat = block.getFieldValue('BEAT');
    var code;
    let beep;

        if (name == "C2") {
            beep = "65";
        }
        if (name == "D2") {
            beep = "73";
        }
        if (name == "E2") {
            beep = "82";
        }
        if (name == "F2") {
            beep = "87";
        }
        if (name == "G2") {
            beep = "97";
        }
        if (name == "A2") {
            beep = "110";
        }
        if (name == "B2") {
            beep = "123";
        }

        if (name == "C3") {
            beep = "130";
        }
        if (name == "D3") {
            beep = "146";
        }
        if (name == "E3") {
            beep = "164";
        }
        if (name == "F3") {
            beep = "174";
        }
        if (name == "G3") {
            beep = "195";
        }
        if (name == "A3") {
            beep = "220";
        }
        if (name == "B3") {
            beep = "246";
        }

        if (name == "C4") {
            beep = "261";
        }
        if (name == "D4") {
            beep = "293";
        }
        if (name == "E4") {
            beep = "329";
        }
        if (name == "F4") {
            beep = "349";
        }
        if (name == "G4") {
            beep = "391";
        }
        if (name == "A4") {
            beep = "440";
        }
        if (name == "B4") {
            beep = "493";
        }

        if (name == "C5") {
            beep = "523";
        }

        code = 'setBeep(' + beep + ',' + beat + ')';
    code = code + '\n';
    return code;
};

//表情面板显示数字
Blockly.Python['screen_show_number'] = function(block) {
    var number = Blockly.Python.valueToCode(block, 'NUMBER',
        Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
    var name = block.getFieldValue('NAME');
    var code;
    code = 'showNumber('+ name + ',' + number +')'
    code = code + '\n';
    return code;
};

//表情面板显示时间
Blockly.Python['screen_show_number'] = function(block) {
    var name = block.getFieldValue('NAME');
    var hour = Blockly.Python.valueToCode(block, 'HOUR',
        Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
    var flag = block.getFieldValue('FLAG');
    var minute = Blockly.Python.valueToCode(block, 'MINUTE',
        Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
        
    var code;
    code = 'showTime('+ name + ',' + hour+ ',' + flag+ ',' + minute +')'
    code = code + '\n';
    return code;
};

//表情面板绘画
Blockly.Python['screen_show_picture'] = function(block) {
    var name = block.getFieldValue('NAME');
    var number = Blockly.Python.valueToCode(block, 'NUMBER',
        Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
    
    var code;
    code = 'showPicture('+ name + ',' + number +')'
    code = code + '\n';
    return code;
};

//超声波传感器距离
Blockly.Python['ultrasonic'] = function(block) {
    var name = block.getFieldValue('NAME');
    var code;
    code = 'getUltrasonic('+ name + ')'
    code = code + '\n';
    return code;
};

//音量传感器
Blockly.Python['volume'] = function(block) {
    var name = block.getFieldValue('NAME');
    var code;
    code = 'getVolume('+ name + ')'
    code = code + '\n';
    return code;
};

//巡线传感器
Blockly.Python['line_patrol'] = function(block) {
    var name = block.getFieldValue('NAME');
    var direction = block.getFieldValue('DIRECTION');
    var color = block.getFieldValue('COLOR');
    var code;
    code = 'getLinePatrol('+ name + ',' + direction + ','+ color + ')'
    code = code + '\n';
    return code;
};

//红外遥控器
Blockly.Python['telecontroller'] = function(block) {
    var name = block.getFieldValue('NAME');
    
    var code;
    code = 'telecontroller('+ name + ')'
    code = code + '\n';
    return code;
};