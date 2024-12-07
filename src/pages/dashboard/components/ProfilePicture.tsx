import { FunctionComponent } from 'react'

import { LeftSectionMenuItemData } from '../../../model'

export const ProfilePicture: FunctionComponent<{
    picSize: number
}> = (props) => {
	const picSize: number = props.picSize;
	const style = {
		width: picSize + 'px',
		height: picSize + 'px',
	}
	return(
		<div className={`w-[${picSize}px] h-[${picSize}px]` + " rounded-[50%] bg-secondary shadow-lg"} style={style}></div>
	)
}