import styled from 'styled-components'
import { Icon, Input } from '../../../components'
import { SpecialPanel } from './SpecialPanel'
import { useRef } from 'react'
import { sanitizeContent } from '../utils'

const PostFormContainer = ({ className, post }) => {
	const { title, imageUrl, content, publishedAt } = post

	const imageRef = useRef(null)
	const titleRef = useRef(null)
	const contentRef = useRef(null)

	const onSave = () => {
		const newPostData = {
			title: titleRef.current.value,
			imageUrl: imageRef.current.value,
			content: sanitizeContent(contentRef.current.innerHTML)
		}

		console.log('On Save newPostData:\n', newPostData)
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
				publishedAt={publishedAt}
				editButton={
					<div
						className="save-data"
						onClick={onSave}
					>
						<Icon
							id="fa-floppy-o"
							margin="0 12px 0 0"
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
	}
`
