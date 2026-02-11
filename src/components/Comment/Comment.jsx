import styled from 'styled-components'
import { Icon } from '../icon/icon'

const CommentContainer = ({ className, author, content, publishedAt }) => {
	return (
		<div className={className}>
			<div className="information-panel">
				<div className="author">
					<Icon
						id="fa-user-circle-o"
						size="21px"
						margin="0 10px 0 0"
					/>

					{author}
				</div>
				<div className="published-at">
					<Icon
						id="fa-calendar-o"
						size="21px"
						margin="0 10px 0 0"
					/>
					{publishedAt}
				</div>
			</div>
			<div className="comment-text">{content}</div>
		</div>
	)
}

export const Comment = styled(CommentContainer)`
	& .information-panel {
		display: flex;
		justify-content: space-between;
	}

	& .author {
		diisplay: flex;
	}

	& .published-at {
		diisplay: flex;
	}
`
