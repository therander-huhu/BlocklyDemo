Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {
        "type": "move_with_speed",
        "message0": "%1 %2 ，速度 %3",
        "args0": [
            {
                "type": "field_image",
                "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
                "width": 15,
                "height": 15,
                "alt": "*"
            },
            {
                "type": "field_dropdown",
                "name": "ACTION",
                "options": [
                    ["%{BKY_ACTION_MOVE_FORWARD}", "FORWARD"],
                    ["%{BKY_ACTION_MOVE_BACK}", "BACK"],
                ]
            },
            {
                "type": "input_value",
                "name": "SPEED"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "move_with_speed_time",
        "message0": "%1 %2 ，速度 %3 , 持续 %4 秒",
        "args0": [
            {
                "type": "field_image",
                "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
                "width": 15,
                "height": 15,
                "alt": "*"
            },
            {
                "type": "field_dropdown",
                "name": "ACTION",
                "options": [
                    ["%{BKY_ACTION_MOVE_FORWARD}", "FORWARD"],
                    ["%{BKY_ACTION_MOVE_BACK}", "BACK"],
                ]
            },
            {
                "type": "input_value",
                "name": "SPEED"
            },
            {
                "type": "input_value",
                "name": "TIME"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "move_with_wheel_speed",
        "message0": "%1 左轮速度 %2 ，右轮速度 %3",
        "args0": [
            {
                "type": "field_image",
                "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
                "width": 15,
                "height": 15,
                "alt": "*"
            },
            {
                "type": "input_value",
                "name": "LEFT_SPEED"
            },
            {
                "type": "input_value",
                "name": "RIGHT_SPEED"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "stop_move",
        "message0": "%1 停止运动",
        "args0": [
            {
                "type": "field_image",
                "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
                "width": 15,
                "height": 15,
                "alt": "*"
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "d_c_generator_roll_with_speed",
        "message0": "%1 直流电机 %2 ，以速度 %3 旋转",
        "args0": [
            {
                "type": "field_image",
                "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
                "width": 15,
                "height": 15,
                "alt": "*"
            },
            {
                "type": "field_dropdown",
                "name": "GENERATOR",
                "options": [
                    ["%{BKY_ACTION_NAME_M1}", "M1"],
                    ["%{BKY_ACTION_NAME_M2}", "M2"],
                ]
            },
            {
                "type": "input_value",
                "name": "SPEED"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "fan_roll_with_direction",
        "message0": "%1 直流电机 %2 ，%3 转动",
        "args0": [
            {
                "type": "field_image",
                "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
                "width": 15,
                "height": 15,
                "alt": "*"
            },
            {
                "type": "field_dropdown",
                "name": "PORT",
                "options": [
                    ["%{BKY_ACTION_NAME_PORT4}", "PORT4"],
                    ["%{BKY_ACTION_NAME_PORT3}", "PORT3"],
                ]
            },
            {
                "type": "field_dropdown",
                "name": "DIRECTION",
                "options": [
                    ["%{BKY_ACTION_DIRECTION_CLOCKWISE}", "CW"],
                    ["%{BKY_ACTION_DIRECTION_ANTICLOCKWISE}", "ANTI-CW"],
                ]
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "engine_rotate",
        "message0": "%1 舵机 %2 %3 角度 %4 度",
        "args0": [
            {
                "type": "field_image",
                "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
                "width": 15,
                "height": 15,
                "alt": "*"
            },
            {
                "type": "field_dropdown",
                "name": "PORT",
                "options": [
                    ["%{BKY_ACTION_NAME_PORT1}", "PORT1"],
                    ["%{BKY_ACTION_NAME_PORT2}", "PORT2"],
                ]
            },
            {
                "type": "field_dropdown",
                "name": "SLOT",
                "options": [
                    ["%{BKY_ACTION_NAME_SLOT1}", "SLOT1"],
                    ["%{BKY_ACTION_NAME_SLOT2}", "SLOT2"],
                ]
            },
            {
                "type": "input_value",
                "name": "ROTATION"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
]);