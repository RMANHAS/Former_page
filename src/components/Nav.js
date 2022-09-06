import React from 'react'

const Nav = () => {
    return (
        <div className="color">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">Content</a>
                </li></ul>
        </div>
    )
}

export default Nav;
