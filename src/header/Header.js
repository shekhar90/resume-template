import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div class="header-row-wrapper ss-l-font">
            <div class="name-wrapper">
                <a>up</a>
            </div>
            <div class="header-container">
                <nav>
                    <ul>
                        <li class="nav-li nav-tab">
                            <a class="">Template</a>
                        </li>
                        <li class="nav-li active-tab">
                            <a class="">Editor</a>
                        </li>
                        <li class="nav-li nav-tab">
                            <a class="">Add & Remove Sections</a>
                        </li>
                        <li class="nav-li nav-tab">
                            <a class="">Preview & Customize</a>
                        </li>
                        <li class="nav-li nav-tab">
                            <a class="">Online Resume</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        );
    }
}
export default Header;