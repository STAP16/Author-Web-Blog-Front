import styled from 'styled-components'
import { useEffect } from 'react'
import { H2, Icon } from '../../../components'

const PostContnetContainer = ({ className, post }) => {
	const { title, imageUrl, content, publishedAt } = post

	return (
		<div className={className}>
			<img
				src={imageUrl ? imageUrl : 'skeletonImage'}
				alt={title}
			/>
			<H2>{title}</H2>
			<div className="special-panel">
				<div className="published-at">
					<Icon
						id="fa-calendar-o"
						margin="0 8px 0 0"
						size="18px"
					/>
					{publishedAt}
				</div>
				<div className="buttons">
					<Icon
						id="fa-pencil-square-o"
						margin="0 12px 0 0"
						size="21px"
					/>
					<Icon
						id="fa-trash-o"
						size="21px"
					/>
				</div>
			</div>
			<div className="post-text">{content}</div>
		</div>
	)
}

export const PostContent = styled(PostContnetContainer)`
	& img {
		float: left;
		margin: 0 20px 20px 0;
	}

	& .special-panel {
		margin: -20px 0 20px;
		font-size: 18px;
		display: flex;
		justify-content: space-between;
	}

	& .published-at {
		display: flex;
	}

	& i {
		position: relative;
		top: 5px;
	}

	& .buttons {
		display: flex;
		cursor: pointer;
	}

	& .post-text {
		font-size: 18px;
	}
`
