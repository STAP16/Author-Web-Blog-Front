import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Icon, Input } from '../../../components'
import { SpecialPanel } from './SpecialPanel'
import { useRef } from 'react'
import { sanitizeContent } from '../utils'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { savePostAsync } from '../../../actions'
import { useServerRequest } from '../../../hooks'
import { PROP_TYPE } from '../../../bff/constants'

const PostFormContainer = ({ className, post, isNewPost }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const requestServer = useServerRequest()

	const { id, title, imageUrl, content, publishedAt } = post

	const imageRef = useRef(null)
	const titleRef = useRef(null)
	const contentRef = useRef(null)

	const onSave = () => {
		const newPostData = {
			id,
			title: titleRef.current.value,
			imageUrl: imageRef.current.value,
			content: sanitizeContent(contentRef.current.innerHTML)
		}

		dispatch(savePostAsync(requestServer, newPostData)).then(({ id }) => navigate(`/posts/${id}`))
	}

	return (
		<div className={className}>
			<Input
				ref={imageRef}
				defaultValue={imageUrl}
				placeholder="Изображение..."
			/>
			<Input
				ref={titleRef}
				defaultValue={title}
				placeholder="Заголовок..."
			/>
			<SpecialPanel
				id={id}
				isNewPost={isNewPost}
				publishedAt={publishedAt}
				editButton={
					<div
						className="save-data"
						onClick={onSave}
					>
						<Icon
							id="fa-floppy-o"
							size="21px"
						/>
					</div>
				}
			/>
			<div
				ref={contentRef}
				className="post-text"
				contentEditable={true}
				suppressContentEditableWarning={true}
			>
				{content}
			</div>
		</div>
	)
}

export const PostForm = styled(PostFormContainer)`
	& img {
		float: left;
		margin: 0 20px 20px 0;
	}

	& .published-at {
		display: flex;
	}

	& .buttons {
		display: flex;
		cursor: pointer;
	}

	& .post-text {
		font-size: 18px;
		white-space: pre-line;
		border: 1px solid #000000;
		min-height: 100px;
		padding: 10px;
	}
`

PostForm.propTypes = {
	post: PROP_TYPE.POST.isRequired,
	isNewPost: PropTypes.bool.isRequired
}
