import React from 'react'
import {Link} from 'react-router-dom';
import HeaderTop from '../elements/HeaderTop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFlag } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <HeaderTop className="bg-dark">
            <div className="container">
                <Link className="d-flex w-100 justify-content-between align-items-center" to="/">
                    <FontAwesomeIcon className="text-white" icon={ faFlag } />
                    <h3 className="text-white">Meet the world</h3>
                </Link>
            </div>
        </HeaderTop>
    )
}

export default Header
