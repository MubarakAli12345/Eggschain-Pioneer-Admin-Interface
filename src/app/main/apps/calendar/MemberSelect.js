import FuseChipSelect from '@fuse/components/FuseChipSelect/FuseChipSelect';
import React, { useState } from 'react';

const suggestions = ['Sea', 'Sky', 'Forest', 'Aerial', 'Art'].map(item => ({
	value: item,
	label: item
}));

function MemberSelect(props) {
    // let suggestions = props.
    console.log("Member Select");
    console.log("Tags", props.tags);
    console.log("Suggestions", props.suggestions);
	const [tags, setTags] = useState(props.tags.map(item => ({
        value: item && item.value ? item.value : item ,
        label: item && item.label ? item.label : item
    })))
    console.log("Tags state",tags);
    let suggestions = props.suggestions && props.suggestions.map(item => ({
        value: item.fullName,
        label: item.fullName
    }));
	function handleChipChange(value) {
		setTags(value);
	}

	return (
			<FuseChipSelect
				className="w-full my-16"
				value={props.tags && props.tags.map(item => ({
                    value: item && item.value ? item.value : item ,
                    label: item && item.label ? item.label : item
                }))}
				onChange={props.handleMembersChange}
				placeholder="Input email addresses or select existing contacts"
				textFieldProps={{
					label: 'Members',
					InputLabelProps: {
						shrink: true
					},
					variant: 'outlined'
				}}
				options={props.suggestions && props.suggestions.map(item => ({
                    value: item.email,
                    label: item.fullName
                }))}
				isMulti
			/>
	);
}

export default MemberSelect;