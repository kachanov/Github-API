// @flow

import React from "react";


type Props = {
    repositoriesNames: Array<string>,
};
type State = {};

class RepositoriesComponent extends React.Component<Props, State> {
    render() {
        return(
            <div>
                <ul>
                    {this.props.repositoriesNames.map(repo => {
                        return <li>{repo}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default RepositoriesComponent;