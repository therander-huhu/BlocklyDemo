
Blockly.Python['start_tip'] = function(block) {
    let code = "ll";
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['math_arithmetic_add'] = function(block) {
    var argument0 = Blockly.Python.valueToCode(block, 'A',  Blockly.Python.ORDER_ADDITIVE);
    var argument1 = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ADDITIVE);
    var code = argument0 + "+" +argument1;
    return [code, Blockly.Python.ORDER_ADDITIVE];
};

Blockly.Python['math_arithmetic_minus'] = function(block) {
    var argument0 = Blockly.Python.valueToCode(block, 'A',  Blockly.Python.ORDER_ADDITIVE);
    var argument1 = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ADDITIVE);
    var code = argument0 + "-" +argument1;
    return [code, Blockly.Python.ORDER_ADDITIVE];
};

Blockly.Python['math_arithmetic_multiply'] = function(block) {
    var argument0 = Blockly.Python.valueToCode(block, 'A',  Blockly.Python.ORDER_MULTIPLICATIVE);
    var argument1 = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_MULTIPLICATIVE);
    var code = argument0 + "*" +argument1;
    return [code, Blockly.Python.ORDER_MULTIPLICATIVE];
};

Blockly.Python['math_arithmetic_divide'] = function(block) {
    var argument0 = Blockly.Python.valueToCode(block, 'A',  Blockly.Python.ORDER_MULTIPLICATIVE);
    var argument1 = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_MULTIPLICATIVE);
    var code = argument0 + "/" +argument1;
    return [code, Blockly.Python.ORDER_MULTIPLICATIVE];
};

Blockly.Python['logic_compare_gt'] = function(block) {
    var order = Blockly.Python.ORDER_RELATIONAL;
    var argument0 = Blockly.Python.valueToCode(block, 'A', order);
    var argument1 = Blockly.Python.valueToCode(block, 'B', order);
    var code = argument0 + ">" +argument1;
    return [code, order];
};

Blockly.Python['logic_compare_lt'] = function(block) {
    var order = Blockly.Python.ORDER_RELATIONAL;
    var argument0 = Blockly.Python.valueToCode(block, 'A', order);
    var argument1 = Blockly.Python.valueToCode(block, 'B', order);
    var code = argument0 + "<" +argument1;
    return [code, order];
};

Blockly.Python['logic_compare_eq'] = function(block) {
    var order = Blockly.Python.ORDER_RELATIONAL;
    var argument0 = Blockly.Python.valueToCode(block, 'A', order);
    var argument1 = Blockly.Python.valueToCode(block, 'B', order);
    var code = argument0 + "==" +argument1;
    return [code, order];
};

Blockly.Python['logic_operation_and'] = function(block) {
    var order = Blockly.Python.ORDER_LOGICAL_AND;
    var argument0 = Blockly.Python.valueToCode(block, 'A', order);
    var argument1 = Blockly.Python.valueToCode(block, 'B', order);
    var code = argument0 + "and" +argument1;
    return [code, order];
};

Blockly.Python['logic_operation_or'] = function(block) {
    var order = Blockly.Python.ORDER_LOGICAL_OR;
    var argument0 = Blockly.Python.valueToCode(block, 'A', order);
    var argument1 = Blockly.Python.valueToCode(block, 'B', order);
    var code = argument0 + "or" +argument1;
    return [code, order];
};
