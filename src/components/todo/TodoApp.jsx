import './TodoApp.css'
export default function TodoApp() {
    return (
        <div className="TodoApplication">
            My Todo Management Application
            <LoginComponent />
            {/* <WelcomeComponent /> */}
        </div>
    )

    function LoginComponent() {
        return (
            <div className="Login">
                <div className="LoginForm">
                    <div>
                        <label>User Name</label>
                        <input type="text" name="username" value="kd" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" />
                    </div>
                    <div>
                        <button type="button" name="login">Login</button>
                    </div>
                </div>
            </div>
        )
    }

    function WelcomeComponent() {
        return (
            <div className="Welcome">
                Welcome Component
            </div>
        )
    }
}