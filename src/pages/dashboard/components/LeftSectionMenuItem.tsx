import { FunctionComponent } from 'react'

import { LeftSectionMenuItemData } from '../../../model'

export const LeftSectionMenuItemElement: FunctionComponent<{
    imageSource?: string,
    title?: string,
}> = (props) => {
	return(
		<div className="bg-primary py-[8px] px-[24px] flex gap-[16px] items-center rounded-l-[20px]">
			<img src={props.imageSource} />
			<span>{props.title}</span>
		</div>
	)
}