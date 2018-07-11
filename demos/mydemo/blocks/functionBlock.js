Blockly.Blocks['new_procedures'] = {
    /**
     * Block for defining a procedure with no return value.
     * @this Blockly.Block
     */
    init: function() {
        var nameField = new Blockly.FieldTextInput('新指令',
            Blockly.Procedures.rename);
        nameField.setSpellcheck(false);
        this.appendDummyInput()
            .appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE)
            .appendField(nameField, 'NAME')
            .appendField('', 'PARAMS');
        // this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
        // if ((this.workspace.options.comments ||
        //     (this.workspace.options.parentWorkspace &&
        //         this.workspace.options.parentWorkspace.options.comments)) &&
        //     Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT) {
        //     this.setCommentText(Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT);
        // }
        this.setColour(Blockly.Msg.FUNCTION_HUE);
        this.setTooltip(Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL);
        this.arguments_ = [];
        this.argumentVarModels_ = [];
        this.setStatements_(true);
        this.statementConnection_ = null;
    },
    /**
     * Add or remove the statement block from this function definition.
     * @param {boolean} hasStatements True if a statement block is needed.
     * @this Blockly.Block
     */
    setStatements_: function(hasStatements) {
        if (this.hasStatements_ === hasStatements) {
            return;
        }
        if (hasStatements) {
            this.appendStatementInput('STACK')
                .appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_DO);
            if (this.getInput('RETURN')) {
                this.moveInputBefore('STACK', 'RETURN');
            }
        } else {
            this.removeInput('STACK', true);
        }
        this.hasStatements_ = hasStatements;
    },

    getProcedureDef: function() {
        return [this.getFieldValue('NAME'), this.arguments_, false];
    },
};
