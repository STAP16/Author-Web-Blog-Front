export const getDate = () => {
	return new Date().toISOString().substring(0, 16).replace('T', ' ').replace('Z', '')
}
