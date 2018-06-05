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
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
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
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
Blockly.Python['move_with_wheel_speed'] = function(block) {
    // Check if a number is even, odd, prime, whole, positive, or negative
    var l_speed = Blockly.Python.valueToCode(block, 'LEFT_SPEED',
        Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
    var r_speed = Blockly.Python.valueToCode(block, 'RIGHT_SPEED', Blockly.Python.ORDER_MULTIPLICATIVE) || 0;
    var code;
    code = 'moveWithWheelSpeed(' + l_speed + ',' + r_speed + ')';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
Blockly.Python['stop_move'] = function(block) {
    var code;
    code = 'stopMove()';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
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
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
Blockly.Python['fan_roll_with_direction'] = function(block) {
    var port_property = block.getFieldValue('PORT');
    var direction_property = block.getFieldValue('DIRECTION');
    var code;
    code = 'fanRollWithDirection(' + port_property + ',' + direction_property + ')';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
Blockly.Python['engine_rotate'] = function(block) {
    var port = block.getFieldValue('PORT');
    var slot = block.getFieldValue('SLOT');
    var rotation = Blockly.Python.valueToCode(block, 'ROTATION', Blockly.Python.ORDER_MULTIPLICATIVE) || 0;
    var code;
    code = 'engineRotate(' + port + ',' + slot + ',' + rotation + ')';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};