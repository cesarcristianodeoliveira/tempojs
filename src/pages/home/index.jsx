import { useApiContext } from '../../contexts/ApiContext'

import { Today, Tomorrow, ThenDays } from '../../components'

const Home = () => {

    const { loading } = useApiContext()

    return (!loading && (
        <>
            <Today />
            <Tomorrow />                  
            <ThenDays />
        </>
    ))
}

export default Home