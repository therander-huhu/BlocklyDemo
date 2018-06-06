Blockly.Python['flow_controls_if'] = function(block) {
    // If/elseif/else condition.
    var n = 0;
    var code = '', branchCode, conditionCode;
    do {
        conditionCode = Blockly.Python.valueToCode(block, 'IF' + n,
            Blockly.Python.ORDER_NONE) || 'False';
        branchCode = Blockly.Python.statementToCode(block, 'DO' + n) ||
            Blockly.Python.PASS;
        code += (n == 0 ? 'if ' : 'elif ' ) + conditionCode + ':\n' + branchCode;

        ++n;
    } while (block.getInput('IF' + n));

    if (block.getInput('ELSE')) {
        branchCode = Blockly.Python.statementToCode(block, 'ELSE') ||
            Blockly.Python.PASS;
        code += 'else:\n' + branchCode;
    }
    return code;
};
Blockly.Python['flow_wait'] = function(block) {
    var code ;

    var time = Blockly.Python.valueToCode(block, 'TIME',
            Blockly.Python.ORDER_MULTIPLICATIVE) || 0;
    code = 'sleep(' + time + ')';
    code = code + '\n';
    return code;
};