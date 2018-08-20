Blockly.Python['sense_distance'] = function(block) {
    var port = block.getFieldValue('PORT');
    var code;
    code = 'getDistance(' + port + ')';
    code = code + '\n';
    // code = "1";
    return [code, Blockly.Python.ORDER_MULTIPLICATIVE];
};

Blockly.Python['has_sense_target'] = function(block) {
    var port = block.getFieldValue('PORT');
    var code;
    code = 'hasSenseTarget(' + port + ')';
    code = code + '\n';
    // code = "1";
    return [code, Blockly.Python.ORDER_MULTIPLICATIVE];
};

Blockly.Python['has_sense_light'] = function(block) {
    var port = block.getFieldValue('PORT');
    var code;
    code = 'hasSenseLight(' + port + ')';
    code = code + '\n';
    // code = "1";
    return [code, Blockly.Python.ORDER_MULTIPLICATIVE];
};

Blockly.Python['has_sense_sound'] = function(block) {
    var port = block.getFieldValue('PORT');
    var code;
    code = 'hasSenseSound(' + port + ')';
    code = code + '\n';
    // code = "1";
    return [code, Blockly.Python.ORDER_MULTIPLICATIVE];
};