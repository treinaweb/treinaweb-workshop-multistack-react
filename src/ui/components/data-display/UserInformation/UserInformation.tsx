import React from 'react';
import {
    UserInformationContainer,
    UserName,
    UserDescription,
    AvatarStyled,
    RatingStyled,
} from './UserInformation.style';

export interface UserInformationProps {
    picture: string;
    name: string;
    rating: number;
    description?: string;
}

const UserInformation: React.FC<UserInformationProps> = (props) => {
    return (
        <UserInformationContainer>
            <AvatarStyled src={props.picture}>{props.name[0]}</AvatarStyled>
            <RatingStyled value={props.rating} readOnly />
            <UserName>{props.name}</UserName>
            <UserDescription>{props.description}</UserDescription>
        </UserInformationContainer>
    );
};

export default UserInformation;
