Blockly.defineBlocksWithJsonArray([
    {
        "type": "sense_distance",
        "message0": "%1 距离传感器 %2 障碍物距离",
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
        "output": "Number",
        "inputsInline": true,
        "colour": "%{BKY_SENSE_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },

    {
        "type": "has_sense_target",
        "message0": "%1 距离传感器 %2 监测到障碍物",
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
        "output": "Boolean",
        "inputsInline": true,
        "colour": "%{BKY_SENSE_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },

    {
        "type": "has_sense_light",
        "message0": "%1 距离传感器 %2 监测到光照",
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
        "output": "Boolean",
        "inputsInline": true,
        "colour": "%{BKY_SENSE_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },

    {
        "type": "has_sense_sound",
        "message0": "%1 距离传感器 %2 监测到声音",
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
        "output": "Boolean",
        "inputsInline": true,
        "colour": "%{BKY_SENSE_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },
]);