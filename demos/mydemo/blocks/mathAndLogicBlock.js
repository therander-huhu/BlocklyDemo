Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    // +
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
        "colour": "%{BKY_MATH_LOGIC_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },
    //-
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
        "colour": "%{BKY_MATH_LOGIC_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },
    //*
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
        "colour": "%{BKY_MATH_LOGIC_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },
    // /
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
        "colour": "%{BKY_MATH_LOGIC_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },
    // Block for random integer between [X] and [Y].
    {
        "type": "math_random_int",
        "message0": "%{BKY_MATH_RANDOM_INT_TITLE}",
        "args0": [
        {
            "type": "input_value",
            "name": "FROM",
            "check": "Number"
        },
        {
            "type": "input_value",
            "name": "TO",
            "check": "Number"
        }
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": "%{BKY_MATH_LOGIC_HUE}",
        "tooltip": "%{BKY_MATH_RANDOM_INT_TOOLTIP}",
        "helpUrl": "%{BKY_MATH_RANDOM_INT_HELPURL}"
    },
    // >
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
        "colour": "%{BKY_MATH_LOGIC_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },

    // <
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
        "colour": "%{BKY_MATH_LOGIC_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },
    // ==
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
        "colour": "%{BKY_MATH_LOGIC_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },
    // and
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
        "colour": "%{BKY_MATH_LOGIC_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },
    // or
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
        "colour": "%{BKY_MATH_LOGIC_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },

    // not
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
        "colour": "%{BKY_MATH_LOGIC_HUE}",
        "tooltip": "%{BKY_LOGIC_NEGATE_TOOLTIP}",
        "helpUrl": "%{BKY_LOGIC_NEGATE_HELPURL}"
    },

    // 取余.
    {
        "type": "math_modulo",
        "message0": "%{BKY_MATH_MODULO_TITLE}",
        "args0": [
        {
            "type": "input_value",
            "name": "DIVIDEND",
            "check": "Number"
        },
        {
            "type": "input_value",
            "name": "DIVISOR",
            "check": "Number"
        }
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": "%{BKY_MATH_LOGIC_HUE}",
        "tooltip": "%{BKY_MATH_MODULO_TOOLTIP}",
        "helpUrl": "%{BKY_MATH_MODULO_HELPURL}"
    },

    // Block for rounding functions.
    {
        "type": "math_round",
        "message0": "%1 %2",
        "args0": [
        {
            "type": "field_dropdown",
            "name": "OP",
            "options": [
            ["%{BKY_MATH_ROUND_OPERATOR_ROUND}", "ROUND"],
            ["%{BKY_MATH_ROUND_OPERATOR_ROUNDUP}", "ROUNDUP"],
            ["%{BKY_MATH_ROUND_OPERATOR_ROUNDDOWN}", "ROUNDDOWN"]
            ]
        },
        {
            "type": "input_value",
            "name": "NUM",
            "check": "Number"
        }
        ],
        "output": "Number",
        "colour": "%{BKY_MATH_LOGIC_HUE}",
        "helpUrl": "%{BKY_MATH_ROUND_HELPURL}",
        "tooltip": "%{BKY_MATH_ROUND_TOOLTIP}"
    },

    //数字运算
    {
        "type": "math_trig",
        "message0": "%1 %2",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "OP",
            "options": [
              ["%{BKY_MATH_TRIG_SIN}", "SIN"],
              ["%{BKY_MATH_TRIG_COS}", "COS"],
              ["%{BKY_MATH_TRIG_TAN}", "TAN"],
              ["%{BKY_MATH_SINGLE_OP_ABSOLUTE}", "ABS"],
              ["%{BKY_MATH_SINGLE_OP_ROOT}", "ROOT"],
              ["%{BKY_MATH_TRIG_ASIN}", "ASIN"],
              ["%{BKY_MATH_TRIG_ACOS}", "ACOS"],
              ["%{BKY_MATH_TRIG_ATAN}", "ATAN"]
            ]
          },
          {
            "type": "input_value",
            "name": "NUM",
            "check": "Number"
          }
        ],
        "output": "Number",
        "colour": "%{BKY_MATH_LOGIC_HUE}",
        "helpUrl": "%{BKY_MATH_TRIG_HELPURL}",
        "extensions": ["math_op_tooltip"]
      },

]);