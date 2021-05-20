import React from 'react';
import { Container } from '@material-ui/core';
import { SafeEnvironmentContainer } from './SafeEnvironment.style';

const SafeEnvironment: React.FC = () => {
    return (
        <SafeEnvironmentContainer>
            <Container>
                Ambiente 100% Seguro <i className={'twf-lock'} />
            </Container>
        </SafeEnvironmentContainer>
    );
};

export default SafeEnvironment;
