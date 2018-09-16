Blockly.Python['start_button'] = function(block) {
    let code = "ll";
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['controls_wait'] = function(block) {
    var code ;

    var time = Blockly.Python.valueToCode(block, 'TIME',
            Blockly.Python.ORDER_MULTIPLICATIVE) || 0;
    code = 'sleep(' + time + ')';
    code = code + '\n';
    return code;
};

Blockly.Python['controls_wait_until'] = function(block) {
    var code = 'waitUntil';

    code = code + '\n';
    return code;
};

//controls_repeat_ext

Blockly.Python['controls_repeat_forever'] = function(block) {
    var code = 'repeatForever';

    code = code + '\n';
    return code;
};

Blockly.Python['controls_repeat_until'] = function(block) {
    // Do while/until loop.
    var argument0 = Blockly.Python.valueToCode(block, 'BOOL', Blockly.Python.ORDER_LOGICAL_NOT) || 'False';
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) ||
        Blockly.Python.PASS;

    argument0 = 'not ' + argument0;

    return 'while ' + argument0 + ':\n' + branch;
};

Blockly.Python['controls_if'] = function(block) {
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




Blockly.Python['controls_ifelse'] = Blockly.Python['controls_if'];
