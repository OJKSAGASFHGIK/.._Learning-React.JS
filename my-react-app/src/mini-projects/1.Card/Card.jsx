import './css.css';
import './../../assets/baseCSS.css';
import profilePic from './profile.gif';

function Card() {
    return(
        <>
        <div className="line">1.Card</div>
        <div className="center">
            <div className="card">
                <img src={profilePic} alt="profile picture" />
                <h2 className="title">Greque</h2>
                <p>I'm a dev</p>
            </div>
        </div>
        
        </>
    );
}

export default Card