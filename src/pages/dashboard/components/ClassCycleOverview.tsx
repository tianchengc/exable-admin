import { FunctionComponent } from 'react'

import { NumberTitleData, ClassCycle } from '../../../model'

export const ClassCycleOverview: FunctionComponent<{
    data: ClassCycle,
    customStyle: string,
}> = (props) => {
	const data = props.data;
	return(
		<>
			<div className={`ml-[24px] flex justify-between ${props.customStyle}`}>
				<span className="text-[24px] font-normal text-white">{data.title}</span>
				<select className="dropdown mr-[47px] w-[280px] rounded-[17px] px-[16px] text-[14px] text-secondary-color outline-none">
					{data.options.map((option:string, i:number) => 
						<option key={i} value="">{option}</option>
					)}
				</select>
			</div>
			<hr className="text-white w-[85%] mt-[25px] mx-auto"></hr>
			<div className="flex gap-[20px] ml-[24px] mr-[16px] text-background-color">
				{data.numberTitleData.map((numberTitle:NumberTitleData, i:number) => 
					<div key={i} className="flex flex-col items-center">
						<span className="text-[48px] font-bold">{numberTitle.count}</span>
						<div className="">{numberTitle.title}</div>
					</div>
				)}
			</div>
		</>
	)
}