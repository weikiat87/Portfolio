import React from 'react'
import PropTypes from 'prop-types'
import { Container, Box } from '@material-ui/core';

export default function TabContainer(props) {
    return (
        <Container fixed maxWidth="lg">
                {props.children}
        </Container>
    );
}

TabContainer.propTypes  = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object
};

