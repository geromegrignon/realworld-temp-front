import React, {useState} from "react";
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const onSubmit = (e: any) => {
        e.preventDefault();
        setSubmitting(true);
        axios.post(`https://realworld-temp-api.herokuapp.com/api/users`, {user: {username, email, password}})
            .then(data => {
                setSubmitting(false);
                console.log(data);
            })
            .catch(error => {
            });
    }
    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">

                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign up</h1>
                        <p className="text-xs-center">
                            <a href="">Have an account?</a>
                        </p>

                        <ul className="error-messages">
                            <li>That email is already taken</li>
                        </ul>

                        <form onSubmit={onSubmit}>
                            <fieldset className="form-group">
                                <input className="form-control form-control-lg" type="text" placeholder="Your Name"
                                       name="username" value={username}
                                       onChange={(evt) => setUsername(evt.target.value)} disabled={submitting}/>
                            </fieldset>
                            <fieldset className="form-group">
                                <input className="form-control form-control-lg" type="text" placeholder="Email"
                                       name="email" value={email} onChange={(evt) => setEmail(evt.target.value)}
                                       disabled={submitting}/>
                            </fieldset>
                            <fieldset className="form-group">
                                <input className="form-control form-control-lg" type="password" placeholder="Password"
                                       name="password" value={password}
                                       onChange={(evt) => setPassword(evt.target.value)} disabled={submitting}/>
                            </fieldset>
                            <button className="btn btn-lg btn-primary pull-xs-right" type="submit" value="submit"
                                    disabled={submitting}>
                                Sign up
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Register;
