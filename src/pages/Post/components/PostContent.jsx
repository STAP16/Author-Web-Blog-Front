import styled from 'styled-components'
import { H2, Icon } from '../../../components'
import { SpecialPanel } from './SpecialPanel'
import { useNavigate } from 'react-router'

const PostContnetContainer = ({ className, post }) => {
	const { title, imageUrl, content, publishedAt } = post
	const navigate = useNavigate(null)

	const handleNavigate = () => navigate('edit')

	return (
		<div className={className}>
			<img
				src={imageUrl ? imageUrl : 'skeletonImage'}
				alt={title}
			/>
			<H2>{title}</H2>
			<SpecialPanel
				publishedAt={publishedAt}
				editButton={
					<div
						className="edit-post"
						onClick={handleNavigate}
					>
						<Icon
							id="fa-pencil-square-o"
							margin="0 12px 0 0"
							size="21px"
						/>
					</div>
				}
			/>
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
		white-space: pre-line;
	}
`
