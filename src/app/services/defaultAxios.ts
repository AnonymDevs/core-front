import axios from 'axios'

const instance = axios.create()

const defaultAxios = {
	instance,
}

export default defaultAxios
