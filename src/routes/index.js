import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Nav } from '../components';

import { Home } from '../pages'

import { ApiContext } from '../contexts/ApiContext'
import { UserContext } from '../contexts/UserContext'
import { ThemeContext } from '../contexts/ThemeContext'
import { SearchContext } from '../contexts/SearchContext'
import { SlideContext } from '../contexts/SlideContext'

const Rotas = () => {
    return (
        <ApiContext>
            <UserContext>
                <ThemeContext>
                    <SearchContext>
                        <SlideContext>
                            <BrowserRouter>
                                <Nav />
                                <Routes>
                                    <Route path='/' element={<Home />} />
                                </Routes>
                            </BrowserRouter>
                        </SlideContext>
                    </SearchContext>
                </ThemeContext>
            </UserContext>
        </ApiContext>
    )
}

export default Rotas