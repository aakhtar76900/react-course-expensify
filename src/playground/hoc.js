import React from 'react';
import ReactDOM from 'react-dom';

console.log('hello from hoc');

const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            <p>This is the info  {props.infoText}</p>
        </div>
    );

}

const componentWithWarning = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                <p>This is a private info. Please dont share!</p>
                <WrappedComponent {...props} />
            </div>
        )

    }
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                {!props.isAdmin && <p>Please Login to view the info</p>}
                {props.isAdmin && <WrappedComponent {...props} />}
            </div>
        );

    };
}

const InfoWithWarning = componentWithWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAdmin={false} infoText='text' />, document.getElementById('app'));