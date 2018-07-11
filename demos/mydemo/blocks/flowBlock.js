Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {
        "type": "start_button",
        "message0": "当 %1 被点击",
        "args0": [
            {
                "type": "field_image",
                "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
                "width": 15,
                "height": 15,
                "alt": "*"
            },
        ],
        "nextStatement": null,
        "colour": "%{BKY_START_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },

    //等待1s
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
        "colour": "%{BKY_FLOW_HUE}",
        "helpUrl": "",
    },

    //重复执行10次
    {
        "type": "controls_repeat_ext",
        "message0": "%{BKY_CONTROLS_REPEAT_TITLE}",
        "args0": [{
          "type": "input_value",
          "name": "TIMES",
          "check": "Number"
        }],
        "message1": "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
        "args1": [{
          "type": "input_statement",
          "name": "DO"
        }],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_FLOW_HUE}",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    },

    //重复执行
    {
        "type": "flow_repeat_forever",
        "message0": "重复执行 %1",
        "args0": [
            {
                "type": "input_statement",
                "name": "DO"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_FLOW_HUE}",
        "helpUrl": "",
    },

    //如果那么
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
        "colour": "%{BKY_FLOW_HUE}",
        "helpUrl": "%{BKY_CONTROLS_IF_HELPURL}",
        // "mutator": "controls_if_mutator",
        "extensions": ["controls_if_tooltip"]
    },

   
    //如果那么否则
    {
        "type": "flow_controls_ifelse",
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
        "message2": "%{BKY_CONTROLS_IF_MSG_ELSE} %1",
        "args2": [
            {
                "type": "input_statement",
                "name": "ELSE"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_FLOW_HUE}",
        "tooltip": "%{BKYCONTROLS_IF_TOOLTIP_2}",
        "helpUrl": "%{BKY_CONTROLS_IF_HELPURL}",
        "extensions": ["controls_if_tooltip"]
    },

    //等待直到
    {
        "type": "flow_wait_until",
        "message0": "等待直到 %1",
        "args0": [
            {
                "type": "input_value",
                "name": "UNTIL",
                "check": "Boolean"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_FLOW_HUE}",
        "helpUrl": "",
    },

    //重复执行直到
    {
        "type": "flow_repeat_until",
        "message0": "重复执行直到 %1",
        "args0": [
            {
                "type": "input_value",
                "name": "BOOL",
                "check": "Boolean"
            }
        ],
        "message1": "%1",
        "args1": [
            {
                "type": "input_statement",
                "name": "DO",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_FLOW_HUE}",
        "helpUrl": "",
    },
    
    //中断循环
    {
        "type": "controls_flow_statements",
        "message0": "%1",
        "args0": [{
          "type": "field_dropdown",
          "name": "FLOW",
          "options": [
            ["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK}", "BREAK"],
            ["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE}", "CONTINUE"]
          ]
        }],
        "previousStatement": null,
        "colour": "%{BKY_FLOW_HUE}",
        "helpUrl": "%{BKY_CONTROLS_FLOW_STATEMENTS_HELPURL}",
        "extensions": [
          "controls_flow_tooltip",
          "controls_flow_in_loop_check"
        ]
    }
]);