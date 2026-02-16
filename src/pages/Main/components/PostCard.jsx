import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Icon } from '../../../components'
import { NavLink } from 'react-router'

const PostCardContainer = ({ className, id, title, publishedAt, commentsCount, imageUrl }) => {
	return (
		<div className={className}>
			<NavLink to={`/posts/${id}`}>
				<img
					src={imageUrl ? imageUrl : 'skeletonImage'}
					alt={title}
				/>
				<div className="post-card-footer">
					<h4>{title}</h4>
					<div className="post-card-info">
						<div className="published-at">
							<Icon
								id="fa-calendar-o"
								margin="0 8px 0 0"
								size="18px"
							/>
							{publishedAt}
						</div>
						<div className="comments-count">
							<Icon
								id="fa-comment-o"
								margin="0 8px 0 0"
								size="18px"
							/>

							{commentsCount}
						</div>
					</div>
				</div>
			</NavLink>
		</div>
	)
}
export const PostCard = styled(PostCardContainer)`
	width: 280px;
	display: flex;
	flex-direction: column;
	margin: 20px;
	border: 1px solid black;

	& .post-card-info {
		display: flex;
		justify-content: space-between;
		margin: 20px 10px;
		margin-bottom: 5px;
	}

	& .post-card-footer {
		border-top: 1px solid black;
	}

	h4 {
		margin: 10px;
	}

	& img {
		display: block;
		width: 100%;
	}

	& .comments-count {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	& .published-at {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`

PostCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	commentsCount: PropTypes.number.isRequired,
	imageUrl: PropTypes.string.isRequired
}
