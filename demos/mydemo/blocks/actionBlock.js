Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    // 电机转速
    {
        "type": "d_c_generator_roll_with_speed",
        "message0": "%1 设置电机 %2 ，转速为 %3",
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
                    ["1", "1"],
                    ["2", "2"],
                    ["3", "3"],
                    ["4", "4"],
                    ["5", "5"],
                    ["6", "6"],
                    ["7", "7"],
                    ["8", "8"],
                ]
            },
            {
                "type": "field_dropdown",
                "name": "SPEED",
                "options": [
                    ["255", "255"],
                    ["100", "100"],
                    ["50", "50"],
                    ["0", "0"],
                    ["-50", "-50"],
                    ["-100", "-100"],
                    ["-255", "-255"],
                ]
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_ACTION_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },

    //板载LED
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
                    ["%{BKY_ACTION_LIGHT_SELECT_ALL}", "3"],
                    ["%{BKY_ACTION_LIGHT_SELECT_LEFT}", "0"],
                    ["%{BKY_ACTION_LIGHT_SELECT_RIGHT}", "1"]
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

    //　播放音调
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
                    ["%{BKY_ACTION_SOUND_BEAT_ONE_EIGHTH}", "0.125"],
                    ["%{BKY_ACTION_SOUND_BEAT_ONE_FOURTH}", "0.25"],
                    ["%{BKY_ACTION_SOUND_BEAT_A_HALF}", "0.5"],
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

    //表情面板显示数字
    {
        "type": "screen_show_number",
        "message0": "%1 表情面板 %2 显示数字 %3",
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
                    ["1", "1"],
                    ["2", "2"],
                    ["3", "3"],
                    ["4", "4"],
                    ["5", "5"],
                    ["6", "6"],
                    ["7", "7"],
                    ["8", "8"],
                ]
            },
            {
                "type": "input_value",
                "name": "NUMBER",
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_ACTION_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },

     //表情面板显示时间
     {
        "type": "screen_show_time",
        "message0": "%1 表情面板 %2 显示时间 %3 时 %4 %5 分",
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
                    ["1", "1"],
                    ["2", "2"],
                    ["3", "3"],
                    ["4", "4"],
                    ["5", "5"],
                    ["6", "6"],
                    ["7", "7"],
                    ["8", "8"],
                ]
            },
            {
                "type": "input_value",
                "name": "HOUR",
            },
            {
                "type": "field_dropdown",
                "name": "FLAG",
                "options": [
                    [":", ":"],
                    ["", ""],
                ]
            },
            {
                "type": "input_value",
                "name": "MINUTE",
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_ACTION_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },

    //表情面板绘画
    {
        "type": "screen_show_picture",
        "message0": "%1 表情面板 %2 绘画 %3",
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
                    ["1", "1"],
                    ["2", "2"],
                    ["3", "3"],
                    ["4", "4"],
                    ["5", "5"],
                    ["6", "6"],
                    ["7", "7"],
                    ["8", "8"],
                ]
            },
            {
                "type": "input_value",
                "name": "NUMBER",
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_ACTION_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },

    //超声波传感器距离
    {
        "type": "ultrasonic",
        "message0": "%1 超声波传感器 %2 距离",
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
                    ["1", "1"],
                    ["2", "2"],
                    ["3", "3"],
                    ["4", "4"],
                    ["5", "5"],
                    ["6", "6"],
                    ["7", "7"],
                    ["8", "8"],
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

    //音量传感器
    {
        "type": "volume",
        "message0": "%1 音量传感器 %2 ",
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
                    ["1", "1"],
                    ["2", "2"],
                    ["3", "3"],
                    ["4", "4"],
                    ["5", "5"],
                    ["6", "6"],
                    ["7", "7"],
                    ["8", "8"],
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

    //巡线传感器
    {
        "type": "line_patrol",
        "message0": "%1 巡线传感器 %2 %3 是 %4",
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
                    ["1", "1"],
                    ["2", "2"],
                    ["3", "3"],
                    ["4", "4"],
                    ["5", "5"],
                    ["6", "6"],
                    ["7", "7"],
                    ["8", "8"],
                ]
            },
            {
                "type": "field_dropdown",
                "name": "DIRECTION",
                "options": [
                    ["%{BKY_ACTION_DIRECTION_LEFT}", "1"],
                    ["%{BKY_ACTION_DIRECTION_RIGHT}", "2"],

                ]
            },
            {
                "type": "field_dropdown",
                "name": "COLOR",
                "options": [
                    ["%{BKY_ACTION_COLOR_BLACK}", "1"],
                    ["%{BKY_ACTION_COLOR_WHITE}", "2"],

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

     //红外遥控器按下
     {
        "type": "telecontroller",
        "message0": "%1 红外遥控器按下 %2 ",
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
                    ["A", "A"],
                    ["B", "B"],
                    ["C", "C"],
                    ["D", "D"],
                    ["E", "E"],
                    ["上", "6"],
                    ["下", "7"],
                    ["左", "8"],
                    ["右", "8"],
                    ["0", "0"],
                    ["1", "1"],
                    ["2", "2"],
                    ["3", "3"],
                    ["4", "4"],
                    ["5", "5"],
                    ["6", "6"],
                    ["7", "7"],
                    ["8", "8"],
                    ["9", "9"],
                    ["设置", "10"],
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