import React, { Component } from 'react'
import Baggrundchat from '../img/baggrundchat.png'
import Face from '../img/face.jpg'
import Face2 from '../img/face2.jpg'
import Face4 from '../img/face4.jpg'



export default class Chatsite extends Component {
render() {
return (
<div>
    <img className="bagchat" src={Baggrundchat} alt="" />

    <div id="frame">

        <div id="sidepanel">

            <div id="profile">
                <div className="wrap">
                    <img id="profile-img" src={Face} className="status-online" alt="" />
                    <p className="name">Sommer</p>

                    <div id="status-muligheder">
                        <ul>
                            <li className="status-online">
                                <p>Online</p>
                            </li>

                            <li className="status-offline">
                                <p>Offline</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div id="search">
                <input type="text" placeholder="Søg bruger..." />
            </div>

            <div className="brugerliste">
                <div className="bruger">
                    <ul>
                        <li>
                            <div className="wrap">
                                <img src={Face2} className="status-offline" alt="" />
                                <p className="name">Batman</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="bruger">
                    <ul>
                        <li>
                            <div className="wrap">
                                <img src={Face2} className="status-offline" alt="" />
                                <p className="name">Batman</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="bruger">
                    <ul>
                        <li>
                            <div className="wrap">
                                <img src={Face2} className="status-offline" alt="" />
                                <p className="name">Batman</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="bruger">
                    <ul>
                        <li>
                            <div className="wrap">
                                <img src={Face2} className="status-offline" alt="" />
                                <p className="name">Batman</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="bruger">
                    <ul>
                        <li>
                            <div className="wrap">
                                <img src={Face2} className="status-offline" alt="" />
                                <p className="name">Batman</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="bruger">
                    <ul>
                        <li>
                            <div className="wrap">
                                <img src={Face2} className="status-offline" alt="" />
                                <p className="name">Batman</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="bruger">
                    <ul>
                        <li>
                            <div className="wrap">
                                <img src={Face2} className="status-offline" alt="" />
                                <p className="name">Batman</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="bruger">
                    <ul>
                        <li>
                            <div className="wrap">
                                <img src={Face2} className="status-offline" alt="" />
                                <p className="name">Batman</p>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>



            <div id="bottom-bar">

                <button>Se din profil</button>
                <button>Indstillinger</button>
            </div>

        </div>


        <div className="content">

            <div className="content-profile">
                <img src={Face4} alt="" />
                <p>Two face</p>
            </div>

            <div className="messages">
                <ul>
                    <li className="sent">
                        <img src={Face4} alt="" />
                        <p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        </p>
                    </li>

                    <li className="replies">
                        <img src={Face} alt="" />
                        <p>bla bla bla bla bla bla bla bla bla bla bla </p>
                    </li>

                    <li className="replies">
                        <img src={Face} alt="" />
                        <p>bla bla bla bla bla bla bla bla bla bla bla </p>
                    </li>

                    <li className="sent">
                        <img src={Face4} alt="" />
                        <p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        </p>
                    </li>

                    <li className="replies">
                        <img src={Face} alt="" />
                        <p>bla bla bla bla bla bla bla bla bla bla bla </p>
                    </li>

                    <li className="sent">
                        <img src={Face4} alt="" />
                        <p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        </p>
                    </li>

                    <li className="sent">
                        <img src={Face4} alt="" />
                        <p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        </p>
                    </li>
                </ul>
            </div>
            <div className="message-input">
                <div className="wrap">
                    <input type="text" placeholder="Skriv din besked..." />
                    <button className="submit">Send</button>
                </div>
            </div>
        </div>
    </div>

</div>
)
}
}
