///////动作
Blockly.Python['move_with_speed'] = function(block) {
    // Check if a number is even, odd, prime, whole, positive, or negative
    var speed = Blockly.Python.valueToCode(block, 'SPEED',
        Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
    var dropdown_property = block.getFieldValue('ACTION');
    var code;
    switch (dropdown_property) {
        case 'FORWARD':
            code = 'move_forward(' + speed + ')';
            break;
        case 'BACK':
            code = 'move_back(' + speed + ')';
            break;
    }
    code = code + '\n';
    return code;
};
Blockly.Python['move_with_speed_time'] = function(block) {
    // Check if a number is even, odd, prime, whole, positive, or negative
    var speed = Blockly.Python.valueToCode(block, 'SPEED',
        Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
    var dropdown_property = block.getFieldValue('ACTION');
    var code;
    switch (dropdown_property) {
        case 'FORWARD':
            code = 'move_forward(' + speed + ')';
            break;
        case 'BACK':
            code = 'move_back(' + speed + ')';
            break;
    }
    code = code + '\n';
    return code;
};
Blockly.Python['move_with_wheel_speed'] = function(block) {
    // Check if a number is even, odd, prime, whole, positive, or negative
    var l_speed = Blockly.Python.valueToCode(block, 'LEFT_SPEED',
        Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
    var r_speed = Blockly.Python.valueToCode(block, 'RIGHT_SPEED', Blockly.Python.ORDER_MULTIPLICATIVE) || 0;
    var code;
    code = 'moveWithWheelSpeed(' + l_speed + ',' + r_speed + ')';
    code = code + '\n';
    return code;
};
Blockly.Python['stop_move'] = function(block) {
    var code;
    code = 'stopMove()';
    code = code + '\n';
    return code;
};
Blockly.Python['d_c_generator_roll_with_speed'] = function(block) {
    var speed = Blockly.Python.valueToCode(block, 'SPEED',
        Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
    var dropdown_property = block.getFieldValue('GENERATOR');
    var code;
    switch (dropdown_property) {
        case 'M1':
            code = 'generatorRollWithSpeed(' + 'M1' + ',' + speed + ')';
            break;
        case 'M2':
            code = 'generatorRollWithSpeed(' + 'M2' + ',' + speed + ')';
            break;
    }
    code = code + '\n';
    return code;
};
Blockly.Python['fan_roll_with_direction'] = function(block) {
    var port_property = block.getFieldValue('PORT');
    var direction_property = block.getFieldValue('DIRECTION');
    var code;
    code = 'fanRollWithDirection(' + port_property + ',' + direction_property + ')';
    code = code + '\n';
    return code;
};
Blockly.Python['engine_rotate'] = function(block) {
    var port = block.getFieldValue('PORT');
    var slot = block.getFieldValue('SLOT');
    var rotation = Blockly.Python.valueToCode(block, 'ROTATION', Blockly.Python.ORDER_MULTIPLICATIVE) || 0;
    var code;
    code = 'engineRotate(' + port + ',' + slot + ',' + rotation + ')';
    code = code + '\n';
    return code;
};

Blockly.Python['fan_roll_with_speed_direction'] = function(block) {
    var port_property = block.getFieldValue('PORT');
    var speed = Blockly.Python.valueToCode(block, "SPEED", Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
    var direction_property = block.getFieldValue('DIRECTION');
    var code;
    code = 'fanRollWithSpeedDirection(' + port_property + ',' + speed + ','+ direction_property + ')';
    code = code + '\n';
    return code;
};
Blockly.Python['fan_stop_roll'] = function(block) {
    var port_property = block.getFieldValue('PORT');
    var code;
    code = 'fanStopRoll(' + port_property + ')';
    code = code + '\n';
    return code;
};
Blockly.Python['fan_roll_with_speed_direction_time'] = function(block) {
    var port_property = block.getFieldValue('PORT');
    var speed = Blockly.Python.valueToCode(block, "SPEED", Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
    var direction_property = block.getFieldValue('DIRECTION');
    var time = Blockly.Python.valueToCode(block, "TIME", Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
    var code;
    code = 'fanRollWithSpeedDirection(' + port_property + ',' + speed + ','+ direction_property + ','+ time + ')';
    code = code + '\n';
    return code;
};

Blockly.Python['play_music'] = function(block) {
    var name = block.getFieldValue('NAME');
    var code;
    code = 'playMusic(' + name + ')';
    code = code + '\n';
    return code;
};

Blockly.Python['turn_on_light'] = function(block) {
    var port = block.getFieldValue('PORT');
    var color = block.getFieldValue('COLOR');
    var code;
    code = 'turnOnLight(' + port + ',' + color + ')';
    code = code + '\n';
    return code;
};

Blockly.Python['turn_on_light_time'] = function(block) {
    var port = block.getFieldValue('PORT');
    var color = block.getFieldValue('COLOR');
    var time = Blockly.Python.valueToCode(block, "TIME", Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
    var code;
    code = 'turnOnLight(' + port + ',' + color + ',' + time +')';
    code = code + '\n';
    return code;
};

Blockly.Python['turn_off_light'] = function(block) {
    var port = block.getFieldValue('PORT');
    var code;
    code = 'turnOffLight(' + port + ')';
    code = code + '\n';
    return code;
};

////////////////////////

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