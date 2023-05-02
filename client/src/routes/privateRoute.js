import {Redirect, Route} from "react-router-dom";
import Cookies from 'js-cookie';

const isAuthenticated = () => {
    const userCookie = Cookies.get('_user_session');

    if (userCookie) {
        const {email} = JSON.parse(userCookie);

        return !!email;
    }

    return false;
}

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;