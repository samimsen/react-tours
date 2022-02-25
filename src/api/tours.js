import axios from "axios"

const url = "https://course-api.com/react-tours-project"

const getTours = async () => {
    try {
        const { data } = await axios.get(url)
        return data
    } catch (error) {
        console.log(error)
    }

}

export default getTours