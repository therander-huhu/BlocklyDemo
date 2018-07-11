goog.provide('Blockly.Function');
console.log(Blockly.Function);

Blockly.Function.flyoutCategory = function(workspace) {
    var xmlList = [];
    if (Blockly.Blocks['new_procedures']) {
        // <block type="procedures_defnoreturn" gap="16">
        //     <field name="NAME">do something</field>
        // </block>
        var block = goog.dom.createDom('block');
        block.setAttribute('type', 'new_procedures');
        block.setAttribute('gap', 16);
        var nameField = goog.dom.createDom('field', null,
            "新指令");
        nameField.setAttribute('name', 'NAME');
        block.appendChild(nameField);
        xmlList.push(block);
    }

    if (xmlList.length) {
        // Add slightly larger gap between system blocks and user calls.
        xmlList[xmlList.length - 1].setAttribute('gap', 24);
    }

    function populateProcedures(procedureList, templateName) {
        for (var i = 0; i < procedureList.length; i++) {
            var name = procedureList[i][0];
            var args = procedureList[i][1];
            // <block type="procedures_callnoreturn" gap="16">
            //   <mutation name="do something">
            //     <arg name="x"></arg>
            //   </mutation>
            // </block>
            var block = goog.dom.createDom('block');
            block.setAttribute('type', templateName);
            block.setAttribute('gap', 16);
            var mutation = goog.dom.createDom('mutation');
            mutation.setAttribute('name', name);
            block.appendChild(mutation);
            for (var j = 0; j < args.length; j++) {
                var arg = goog.dom.createDom('arg');
                arg.setAttribute('name', args[j]);
                mutation.appendChild(arg);
            }
            xmlList.push(block);
        }
    }

    var tuple = Blockly.Procedures.allProcedures(workspace);
    populateProcedures(tuple[0], 'procedures_callnoreturn');
    populateProcedures(tuple[1], 'procedures_callreturn');
    return xmlList;
};