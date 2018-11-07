// @flow

import React from "react";
import PropTypes from "prop-types";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styles from "./RepositoriesList.css";


type Props = {
    repositoriesNames: Array<Object>,
};

const RepositoriesList = (props: Props) => {
    let key = 0;
    return(
        <div className={styles.repos}>
            <List>
                {props.repositoriesNames.map(repo => {
                    return <ListItem button key={ key++ }>
                        <ListItemText inset primary={repo.name} />
                    </ListItem>
                })}
            </List>
        </div>
    );
};

RepositoriesList.propTypes = {
  repositoriesNames: PropTypes.array.isRequired,
};

export default RepositoriesList;