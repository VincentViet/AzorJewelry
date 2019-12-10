import React from 'react';

import { Typography } from 'antd';
import './Link.css';

const { Text } = Typography;

export function Link(props) {
    return (
        <Text
            className="Link"
            type="secondary"
            style={{
                fontSize: props.size,
                width: "100%",
                margin: 5
            }}
        >
            {props.icon} {props.text}
        </Text>
    )
}