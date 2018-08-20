Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    // Block for colour picker.
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
        "colour": "%{BKY_MATH_HUE}",
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
        "colour": "%{BKY_MATH_HUE}",
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
        "colour": "%{BKY_MATH_HUE}",
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
        "colour": "%{BKY_MATH_HUE}",
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
        "colour": "%{BKY_MATH_HUE}",
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
        "colour": "%{BKY_MATH_HUE}",
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
        "colour": "%{BKY_MATH_HUE}",
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
        "colour": "%{BKY_MATH_HUE}",
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
        "colour": "%{BKY_MATH_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },

      // Block for negation.
  {
    "type": "logic_negate",
    "message0": "%{BKY_LOGIC_NEGATE_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "BOOL",
        "check": "Boolean"
      }
    ],
    "output": "Boolean",
    "colour": "%{BKY_MATH_HUE}",
    "tooltip": "%{BKY_LOGIC_NEGATE_TOOLTIP}",
    "helpUrl": "%{BKY_LOGIC_NEGATE_HELPURL}"
  },
]);