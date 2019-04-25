import React from "react";
import {Mutation} from "react-apollo";
import {SIGNIN_USER} from "../../queries";
import Error from "../Error";


const initState = {
    username: "",
    password: "",
};

class Signin extends React.Component {
    state = {...initState};

    clearState = () => {
        this.setState({...initState});

    };

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    };

    handleSubmit = (e, signinUser) => {
        e.preventDefault();
        signinUser().then(data => {
            console.log(data);
            this.clearState();
        });

    };

    validateForm = () => {
        const {username, password} = this.state;

        const isInvalid = !username || !password;

        return isInvalid;
    };

    render() {
        const {username, password} = this.state;
        return (
            <div className="App">
                <h1 className="App"> Signin </h1>

                <Mutation mutation={SIGNIN_USER} variables={{username, password}}>
                    {(signinUser, {data, loading, error}) => {
                        return (
                            <form className="form" onSubmit={e => this.handleSubmit(e, signinUser)}>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    value={username}
                                    onChange={this.handleChange}
                                />

                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={this.handleChange}
                                />

                                <button type="submit"
                                        disabled={loading || this.validateForm()}
                                        className="button-primary">

                                    Submit
                                </button>
                                {error && <Error error={error}/>}
                            </form>
                        )
                    }}

                </Mutation>
            </div>
        );
    }
}

export default Signin;
