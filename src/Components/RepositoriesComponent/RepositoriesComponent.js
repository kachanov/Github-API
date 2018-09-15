// @flow

import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import styles from "./RepositoriesComponent.css";


type Props = {
    repositoriesNames: Array<string>,
};

type State = {};

class RepositoriesComponent extends React.Component<Props, State> {
    render() {
        return(
            <div className={styles.repos}>
                <List>
                    {this.props.repositoriesNames.map(repo => {
                        return <ListItem button>
                            <ListItemText inset primary={repo} />
                        </ListItem>
                    })}
                </List>
            </div>
        );
    }
}

export default RepositoriesComponent;