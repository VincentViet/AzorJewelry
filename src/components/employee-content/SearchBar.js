import React from 'react'
import
{
    Input,
    Icon
} from 'antd'

export function SearchBar(props) {
    return (
        <Input
            suffix={<Icon type="search" />}
            placeholder={props.placeHolder}
        />
    )
}