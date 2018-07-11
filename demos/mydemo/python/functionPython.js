Blockly.Python['new_procedures'] = function(block) {
    // Define a procedure with a return value.
    // First, add a 'global' statement for every variable that is not shadowed by
    // a local parameter.
    var globals = [];
    var varName;
    var workspace = block.workspace;
    var variables = Blockly.Variables.allUsedVarModels(workspace) || [];
    for (var i = 0, variable; variable = variables[i]; i++) {
        varName = variable.name;
        if (block.arguments_.indexOf(varName) == -1) {
            globals.push(Blockly.Python.variableDB_.getName(varName,
                Blockly.Variables.NAME_TYPE));
        }
    }
    // Add developer variables.
    var devVarList = Blockly.Variables.allDeveloperVariables(workspace);
    for (var i = 0; i < devVarList.length; i++) {
        globals.push(Blockly.Python.variableDB_.getName(devVarList[i],
            Blockly.Names.DEVELOPER_VARIABLE_TYPE));
    }

    globals = globals.length ?
        Blockly.Python.INDENT + 'global ' + globals.join(', ') + '\n' : '';
    var funcName = Blockly.Python.variableDB_.getName(
        block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
    var branch = Blockly.Python.statementToCode(block, 'STACK');
    if (Blockly.Python.STATEMENT_PREFIX) {
        var id = block.id.replace(/\$/g, '$$$$');  // Issue 251.
        branch = Blockly.Python.prefixLines(
            Blockly.Python.STATEMENT_PREFIX.replace(
                /%1/g, '\'' + id + '\''), Blockly.Python.INDENT) + branch;
    }
    if (Blockly.Python.INFINITE_LOOP_TRAP) {
        branch = Blockly.Python.INFINITE_LOOP_TRAP.replace(/%1/g,
            '"' + block.id + '"') + branch;
    }
    var returnValue = Blockly.Python.valueToCode(block, 'RETURN',
        Blockly.Python.ORDER_NONE) || '';
    if (returnValue) {
        returnValue = Blockly.Python.INDENT + 'return ' + returnValue + '\n';
    } else if (!branch) {
        branch = Blockly.Python.PASS;
    }
    var args = [];
    for (var i = 0; i < block.arguments_.length; i++) {
        args[i] = Blockly.Python.variableDB_.getName(block.arguments_[i],
            Blockly.Variables.NAME_TYPE);
    }
    var code = 'def ' + funcName + '(' + args.join(', ') + '):\n' +
        globals + branch + returnValue;
    code = Blockly.Python.scrub_(block, code);
    // Add % so as not to collide with helper functions in definitions list.
    Blockly.Python.definitions_['%' + funcName] = code;
    return null;
};
