import { FunctionComponent } from 'react'

import schedule from './../../assets/schedule.svg';
import participants from './../../assets/participants.svg';
import tag from './../../assets/tag.svg';

import { LeftSectionMenuItemData, ClassCycle } from '../../model'

import { ProfilePicture } from './components/ProfilePicture';
import { LeftSectionMenuItemElement } from './components/LeftSectionMenuItem';
import { ClassCycleOverview } from './components/ClassCycleOverview';

export const Dashboard: FunctionComponent<{}> = () => {
	const leftSectionMenuData:Array<LeftSectionMenuItemData> = [
		{
			imageSource: schedule,
			title: 'Schedule',
		},
		{
			imageSource: participants,
			title: 'Participants',
		},
		{
			imageSource: tag,
			title: 'Resources',
		},
		{
			imageSource: tag,
			title: 'Reports',
		},
		{
			imageSource: tag,
			title: 'Exercise library',
		},
	]
	const byClassData:ClassCycle = {
		title: 'By Class',
		options: ['Class'],
		selected: 'Class',
		numberTitleData: [
			{
				count: 2,
				title: 'Total registrants'
			},
			{
				count: 5,
				title: 'Net new participants'
			},
			{
				count: 22,
				title: 'Average attendance'
			},
			{
				count: 1,
				title: '# of people on waitlist'
			},
		]
	};
	const byCycleData:ClassCycle = {
		title: 'By Cycle',
		options: ['Cycles'],
		selected: 'Cycles',
		numberTitleData: [
			{
				count: 200,
				title: 'Total registrants'
			},
			{
				count: 85,
				title: 'Net new participants'
			},
			{
				count: 22,
				title: 'Average attendance'
			},
			{
				count: 15,
				title: '# of people on waitlist'
			},
		]
	};
	return(
		<div className="font-normal overflow-scroll w-full">
			<div className="flex">
				{/* Left Section */}
				{/*<div className="min-w-[260px] bg-gradient-to-b from-primary to-primaryLight text-[18px] text-white">
					<div className="mx-auto w-fit flex flex-col items-center py-[64px]">
						<ProfilePicture picSize={64} />
						<span className="mt-[16px]">Hello, User!</span>
						<span className="text-[14px] mt-[11px]">Monday, Sept 27th 2022</span>
					</div>
					<div className="flex flex-col gap-[14px] ml-[30px]">
						{leftSectionMenuData.map((item:LeftSectionMenuItemData, i:number) => 
							<LeftSectionMenuItemElement key={i} imageSource={item.imageSource} title={item.title} />
						)}
					</div>
				</div>*/}
				{/* Left Section Ends */}
				<div className="w-full bg-background-color">
					{/* Overview */}
					<div className="my-[64px] ml-[48px]">
						<h2 className="text-primary-color text-[30px] font-bold">Overview</h2>
						<div className="mt-[30px] bg-secondary-color max-w-[664px] pt-[24px] pb-[27px] rounded-[8px]">
							<ClassCycleOverview customStyle="" data={byClassData}/>
							<ClassCycleOverview customStyle="mt-[70px]" data={byCycleData}/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}