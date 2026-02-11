import styled from 'styled-components'
import { useEffect } from 'react'
import { H2 } from '../../../components'

const PostContnetContainer = ({ className, post }) => {
	const { id, title, imageUrl, content, publishedAt } = post

	return (
		<div className={className}>
			<img
				src={imageUrl}
				alt={title}
			/>
			<H2>{title}</H2>
			<div className={'special-panel'}>{publishedAt}</div>
			<div>{content}</div>
		</div>
	)
}

export const PostContent = styled(PostContnetContainer)``
