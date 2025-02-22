import { Logout } from "../components/logout";

const ProtectedPage = () => {
    return (
        <div>
            <h1>Protected Page</h1>
            <Logout />
        </div>
    )
}

export default ProtectedPage;   