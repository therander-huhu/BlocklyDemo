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
        "colour": "%{BKY_ACTION_HUE}",
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
        "colour": "%{BKY_ACTION_HUE}",
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
        "colour": "%{BKY_ACTION_HUE}",
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
        "colour": "%{BKY_ACTION_HUE}",
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
        "colour": "%{BKY_ACTION_HUE}",
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
        "colour": "%{BKY_ACTION_HUE}",
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
        "colour": "%{BKY_ACTION_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },

    {
        "type": "fan_roll_with_speed_direction",
        "message0": "%1 直流电机 %2 ，以速度 %3 ，%4 转动",
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
                    ["%{BKY_ACTION_NAME_PORT3}", "PORT3"],
                    ["%{BKY_ACTION_NAME_PORT4}", "PORT4"],
                    ["%{BKY_ACTION_NAME_PORT5}", "PORT5"],
                    ["%{BKY_ACTION_NAME_PORT6}", "PORT6"],
                ]
            },
            {
                "type": "input_value",
                "name": "SPEED"
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
        "colour": "%{BKY_ACTION_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "fan_stop_roll",
        "message0": "%1 直流电机 %2 停止转动",
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
                    ["%{BKY_ACTION_NAME_PORT3}", "PORT3"],
                    ["%{BKY_ACTION_NAME_PORT4}", "PORT4"],
                    ["%{BKY_ACTION_NAME_PORT5}", "PORT5"],
                    ["%{BKY_ACTION_NAME_PORT6}", "PORT6"],
                ]
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_ACTION_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "fan_roll_with_speed_direction_time",
        "message0": "%1 直流电机 %2 ，以速度 %3 ，%4 转动 %5 秒",
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
                    ["%{BKY_ACTION_NAME_PORT3}", "PORT3"],
                    ["%{BKY_ACTION_NAME_PORT4}", "PORT4"],
                    ["%{BKY_ACTION_NAME_PORT5}", "PORT5"],
                    ["%{BKY_ACTION_NAME_PORT6}", "PORT6"],
                ]
            },
            {
                "type": "input_value",
                "name": "SPEED"
            },
            {
                "type": "field_dropdown",
                "name": "DIRECTION",
                "options": [
                    ["%{BKY_ACTION_DIRECTION_CLOCKWISE}", "CW"],
                    ["%{BKY_ACTION_DIRECTION_ANTICLOCKWISE}", "ANTI-CW"],
                ]
            },
            {
                "type": "input_value",
                "name": "TIME"
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_ACTION_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "play_music",
        "message0": "%1 播放音乐 %2",
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
                "name": "NAME",
                "options": [
                    ["%{BKY_ACTION_MUSIC_NAME_1}", "1"],
                    ["%{BKY_ACTION_MUSIC_NAME_2}", "2"],
                    ["%{BKY_ACTION_MUSIC_NAME_3}", "3"],
                    ["%{BKY_ACTION_MUSIC_NAME_4}", "4"],
                    ["%{BKY_ACTION_MUSIC_NAME_5}", "5"],
                    ["%{BKY_ACTION_MUSIC_NAME_6}", "6"],
                    ["%{BKY_ACTION_MUSIC_NAME_7}", "7"],
                    ["%{BKY_ACTION_MUSIC_NAME_7}", "8"],
                    ["%{BKY_ACTION_MUSIC_NAME_7}", "9"],
                    ["%{BKY_ACTION_MUSIC_NAME_7}", "10"],
                ]
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_ACTION_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },

    {
        "type": "turn_on_light",
        "message0": "%1 RGB灯 %2 亮起 ，灯光颜色 %3",
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
                    ["%{BKY_ACTION_NAME_PORT1}", "1"],
                    ["%{BKY_ACTION_NAME_PORT2}", "2"],
                    ["%{BKY_ACTION_NAME_PORT3}", "3"],
                    ["%{BKY_ACTION_NAME_PORT4}", "4"],
                    ["%{BKY_ACTION_NAME_PORT5}", "5"],
                    ["%{BKY_ACTION_NAME_PORT6}", "6"],
                ]
            },
            {
                "type": "field_dropdown",
                "name": "COLOR",
                "options": [
                    ["%{BKY_ACTION_LIGHT_COLOR_RED}", "1"],
                    ["%{BKY_ACTION_LIGHT_COLOR_ORANGE}", "2"],
                    ["%{BKY_ACTION_LIGHT_COLOR_YELLOW}", "3"],
                    ["%{BKY_ACTION_LIGHT_COLOR_GREEN}", "4"],
                    ["%{BKY_ACTION_LIGHT_COLOR_CYAN}", "5"],
                    ["%{BKY_ACTION_LIGHT_COLOR_BLUE}", "6"],
                    ["%{BKY_ACTION_LIGHT_COLOR_PURPLE}", "7"],
                ]
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_ACTION_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "turn_on_light_time",
        "message0": "%1 RGB灯 %2 亮起 ，灯光颜色 %3 ， 持续 %4 秒",
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
                    ["%{BKY_ACTION_NAME_PORT1}", "1"],
                    ["%{BKY_ACTION_NAME_PORT2}", "2"],
                    ["%{BKY_ACTION_NAME_PORT3}", "3"],
                    ["%{BKY_ACTION_NAME_PORT4}", "4"],
                    ["%{BKY_ACTION_NAME_PORT5}", "5"],
                    ["%{BKY_ACTION_NAME_PORT6}", "6"],
                ]
            },
            {
                "type": "field_dropdown",
                "name": "COLOR",
                "options": [
                    ["%{BKY_ACTION_LIGHT_COLOR_RED}", "1"],
                    ["%{BKY_ACTION_LIGHT_COLOR_ORANGE}", "2"],
                    ["%{BKY_ACTION_LIGHT_COLOR_YELLOW}", "3"],
                    ["%{BKY_ACTION_LIGHT_COLOR_GREEN}", "4"],
                    ["%{BKY_ACTION_LIGHT_COLOR_CYAN}", "5"],
                    ["%{BKY_ACTION_LIGHT_COLOR_BLUE}", "6"],
                    ["%{BKY_ACTION_LIGHT_COLOR_PURPLE}", "7"],
                ]
            },
            {
                "type": "input_value",
                "name": "TIME"
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_ACTION_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "turn_off_light",
        "message0": "%1 RGB灯 %2 熄灭",
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
                    ["%{BKY_ACTION_NAME_PORT1}", "1"],
                    ["%{BKY_ACTION_NAME_PORT2}", "2"],
                    ["%{BKY_ACTION_NAME_PORT3}", "3"],
                    ["%{BKY_ACTION_NAME_PORT4}", "4"],
                    ["%{BKY_ACTION_NAME_PORT5}", "5"],
                    ["%{BKY_ACTION_NAME_PORT6}", "6"],
                ]
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_ACTION_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },

    /////////////////////////

    {
        "type": "turn_on_on_board_light",
        "message0": "%1 设置板载LED %2 红色 %3 绿色 %4 蓝色 %5",
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
                "name": "SELECT",
                "options": [
                    ["%{BKY_ACTION_LIGHT_SELECT_ALL}", "1"],
                    ["%{BKY_ACTION_LIGHT_SELECT_ALL}", "2"],
                    ["%{BKY_ACTION_LIGHT_SELECT_ALL}", "3"]
                ]
            },
            {
                "type": "field_dropdown",
                "name": "COLOR_RED",
                "options": [
                    ["0", "0"],
                    ["20", "20"],
                    ["60", "60"],
                    ["150", "150"],
                    ["255", "255"]
                ]
            },
            {
                "type": "field_dropdown",
                "name": "COLOR_GREEN",
                "options": [
                    ["0", "0"],
                    ["20", "20"],
                    ["60", "60"],
                    ["150", "150"],
                    ["255", "255"]
                ]
            },
            {
                "type": "field_dropdown",
                "name": "COLOR_BLUE",
                "options": [
                    ["0", "0"],
                    ["20", "20"],
                    ["60", "60"],
                    ["150", "150"],
                    ["255", "255"]
                ]
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_ACTION_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },

    {
        "type": "play_sound_by_beat",
        "message0": "%1 播放音调为 %2 ，节拍为 %3",
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
                "name": "NAME",
                "options": [
                    ["%{BKY_ACTION_SOUND_NAME_C1}", "C1"],
                    ["%{BKY_ACTION_SOUND_NAME_D1}", "D1"],
                    ["%{BKY_ACTION_SOUND_NAME_E1}", "E1"],
                    ["%{BKY_ACTION_SOUND_NAME_F1}", "F1"],
                    ["%{BKY_ACTION_SOUND_NAME_G1}", "G1"],
                    ["%{BKY_ACTION_SOUND_NAME_A1}", "A1"],
                    ["%{BKY_ACTION_SOUND_NAME_B1}", "B1"],
                    ["%{BKY_ACTION_SOUND_NAME_C2}", "C2"],
                    ["%{BKY_ACTION_SOUND_NAME_D2}", "D2"],
                    ["%{BKY_ACTION_SOUND_NAME_E2}", "E2"],
                    ["%{BKY_ACTION_SOUND_NAME_F2}", "F2"],
                    ["%{BKY_ACTION_SOUND_NAME_G2}", "G2"],
                    ["%{BKY_ACTION_SOUND_NAME_A2}", "A2"],
                    ["%{BKY_ACTION_SOUND_NAME_B2}", "B2"],
                    ["%{BKY_ACTION_SOUND_NAME_C3}", "C3"],
                    ["%{BKY_ACTION_SOUND_NAME_D3}", "D3"],
                    ["%{BKY_ACTION_SOUND_NAME_E3}", "E3"],
                    ["%{BKY_ACTION_SOUND_NAME_F3}", "F3"],
                    ["%{BKY_ACTION_SOUND_NAME_G3}", "G3"],
                    ["%{BKY_ACTION_SOUND_NAME_A3}", "A3"],
                    ["%{BKY_ACTION_SOUND_NAME_B3}", "B3"],
                    ["%{BKY_ACTION_SOUND_NAME_C4}", "C4"],
                    ["%{BKY_ACTION_SOUND_NAME_D4}", "D4"],
                    ["%{BKY_ACTION_SOUND_NAME_E4}", "E4"],
                    ["%{BKY_ACTION_SOUND_NAME_F4}", "F4"],
                    ["%{BKY_ACTION_SOUND_NAME_G4}", "G4"],
                    ["%{BKY_ACTION_SOUND_NAME_A4}", "A4"],
                    ["%{BKY_ACTION_SOUND_NAME_B4}", "B4"],
                    ["%{BKY_ACTION_SOUND_NAME_C5}", "C5"],
                ]
            },
            {
                "type": "field_dropdown",
                "name": "BEAT",
                "options": [
                    ["%{BKY_ACTION_SOUND_BEAT_ONE_EIGHTH}", "1/8"],
                    ["%{BKY_ACTION_SOUND_BEAT_ONE_FOURTH}", "4/1"],
                    ["%{BKY_ACTION_SOUND_BEAT_A_HALF}", "1/2"],
                    ["%{BKY_ACTION_SOUND_BEAT_ONE}", "1"],
                    ["%{BKY_ACTION_SOUND_BEAT_DOUBLE}", "2"],
                ]
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_ACTION_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },
]);