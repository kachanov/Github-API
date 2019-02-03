// @flow
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
    border-radius: 300px;
    box-shadow: 5px 5px 10px -5px #666;
    margin: 50px;
    width: 400px;
    background-color: #ffffff;
`;

type Props = {
    avatarURL: string,
};

function Avatar({ avatarURL}: Props) {
    return <div>
      <Image src={avatarURL} alt="avatar" />
    </div>
}

Avatar.propTypes = {
    avatarURL: PropTypes.string.isRequired,
};

export default Avatar;