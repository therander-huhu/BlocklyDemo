Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    // Block for colour picker.
    {
        "type": "start_tip",
        "message0": "PressButton",
        "nextStatement": null,
        "colour": 60,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "math_arithmetic_add",
        "message0": "%1 + %2",
        "args0": [
            {
                "type": "input_value",
                "name": "A",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "B",
                "check": "Number"
            }
        ],
        "output": "Number",
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "math_arithmetic_minus",
        "message0": "%1 - %2",
        "args0": [
            {
                "type": "input_value",
                "name": "A",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "B",
                "check": "Number"
            }
        ],
        "output": "Number",
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "math_arithmetic_multiply",
        "message0": "%1 × %2",
        "args0": [
            {
                "type": "input_value",
                "name": "A",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "B",
                "check": "Number"
            }
        ],
        "output": "Number",
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "math_arithmetic_divide",
        "message0": "%1 ÷ %2",
        "args0": [
            {
                "type": "input_value",
                "name": "A",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "B",
                "check": "Number"
            }
        ],
        "output": "Number",
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "logic_compare_gt",
        "message0": "%1 > %2",
        "args0": [
            {
                "type": "input_value",
                "name": "A",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "B",
                "check": "Number"
            }
        ],
        "output": "Boolean",
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "logic_compare_lt",
        "message0": "%1 < %2",
        "args0": [
            {
                "type": "input_value",
                "name": "A",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "B",
                "check": "Number"
            }
        ],
        "output": "Boolean",
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },

    {
        "type": "logic_compare_eq",
        "message0": "%1 = %2",
        "args0": [
            {
                "type": "input_value",
                "name": "A",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "B",
                "check": "Number"
            }
        ],
        "output": "Boolean",
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "logic_operation_and",
        "message0": "%1 且 %2",
        "args0": [
            {
                "type": "input_value",
                "name": "A",
                "check": "Boolean"
            },
            {
                "type": "input_value",
                "name": "B",
                "check": "Boolean"
            }
        ],
        "output": "Boolean",
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "logic_operation_or",
        "message0": "%1 或 %2",
        "args0": [
            {
                "type": "input_value",
                "name": "A",
                "check": "Boolean"
            },
            {
                "type": "input_value",
                "name": "B",
                "check": "Boolean"
            }
        ],
        "output": "Boolean",
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
]);