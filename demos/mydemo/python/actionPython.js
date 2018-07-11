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
Blockly.Python['play_sound_by_beat'] = function(block) {
    var name = block.getFieldValue('NAME');
    var beat = block.getFieldValue('BEAT');
    var code;
    code = 'playSoundByBeat(' + name + ',' + beat + ')';
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