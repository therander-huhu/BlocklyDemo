Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {
        "type": "flow_controls_if",
        "message0": "%{BKY_CONTROLS_IF_MSG_IF} %1",
        "args0": [
            {
                "type": "input_value",
                "name": "IF0",
                "check": "Boolean"
            }
        ],
        "message1": "%{BKY_CONTROLS_IF_MSG_THEN} %1",
        "args1": [
            {
                "type": "input_statement",
                "name": "DO0"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_LOGIC_HUE}",
        "helpUrl": "%{BKY_CONTROLS_IF_HELPURL}",
        // "mutator": "controls_if_mutator",
        "extensions": ["controls_if_tooltip"]
    },
    {
        "type": "flow_wait",
        "message0": "等待 %1 秒",
        "args0": [
            {
                "type": "input_value",
                "name": "TIME",
                "check": "Number"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "",
        "helpUrl": "",
    },
]);