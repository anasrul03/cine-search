import { useAuthValue } from "./AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";
import "./Styles/Profile.scss";

function Profile() {
    const {currentUser} = useAuthValue();

    return (
        <div className="center">
            <div className="profile">
                <h2>Profile</h2>
                <p>
                    <strong>Email verified: </strong>
                    {'${currentUser?.emailVerified}'}
                </p>
                <span onClick={() => signOut(auth)}>Sign Out</span>
            </div>
        </div>
    );
};

export default Profile;
