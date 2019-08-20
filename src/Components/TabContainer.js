import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '@material-ui/core';

export default function TabContainer(props) {
    return (
        <Container fixed>
                {props.children}
        </Container>
    );
}

TabContainer.propTypes  = {
    children: PropTypes.node.isRequired,
    
};

