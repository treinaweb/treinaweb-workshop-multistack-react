import React from 'react';
import {
    FooterContainer,
    FooterTitle,
    SocialButton,
    AppList,
    FooterGrid,
    SocialContainer,
} from './Footer.style';
import { List, ListItem, Typography, Box } from '@material-ui/core';

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterGrid>
                <div>
                    <FooterTitle>Menu</FooterTitle>
                    <List>
                        <ListItem disableGutters>
                            <Typography
                                component={'a'}
                                href={'/'}
                                color={'inherit'}
                            >
                                Encontrar uma diarista
                            </Typography>
                        </ListItem>
                        <ListItem disableGutters>
                            <Typography
                                component={'a'}
                                href={'/'}
                                color={'inherit'}
                            >
                                Seja uma diarista
                            </Typography>
                        </ListItem>
                        <ListItem disableGutters>
                            <Typography
                                component={'a'}
                                href={'/'}
                                color={'inherit'}
                            >
                                Por que usar o E-Diaristas?
                            </Typography>
                        </ListItem>
                        <ListItem disableGutters>
                            <Typography
                                component={'a'}
                                href={'/'}
                                color={'inherit'}
                            >
                                Principais Dúvidas
                            </Typography>
                        </ListItem>
                    </List>
                </div>

                <Box sx={{ maxWidth: '400px' }}>
                    <FooterTitle>Quem somos</FooterTitle>
                    <Typography variant={'body2'} sx={{ mt: 2 }}>
                        E-Diaristas te ajuda a encontrar um profissional
                        perfeito para realizar a limpeza da sua casa. Garantimos
                        a melhor profissional com total segurança e praticidade!
                        São milhares de clientes satisfeitos por todo o país.
                    </Typography>
                </Box>

                <SocialContainer>
                    <Box sx={{ maxWidth: '400px', flex: 1 }}>
                        <FooterTitle>Baixe nossos aplicativos</FooterTitle>
                        <AppList>
                            <li>
                                <a
                                    href={'/'}
                                    target={'_blank'}
                                    rel={'noopener noreferrer'}
                                >
                                    <img
                                        src={'/img/logos/app-store.png'}
                                        alt={'AppStore'}
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={'/'}
                                    target={'_blank'}
                                    rel={'noopener noreferrer'}
                                >
                                    <img
                                        src={'/img/logos/google-play.png'}
                                        alt={'Google Play'}
                                    />
                                </a>
                            </li>
                        </AppList>
                    </Box>

                    <div>
                        <FooterTitle>Redes Sociais</FooterTitle>
                        <AppList>
                            <li>
                                <SocialButton href={'/'}>
                                    <i className={'twf-facebook-f'} />
                                </SocialButton>
                            </li>
                            <li>
                                <SocialButton href={'/'}>
                                    <i className={'twf-instagram'} />
                                </SocialButton>
                            </li>
                            <li>
                                <SocialButton href={'/'}>
                                    <i className={'twf-youtube'} />
                                </SocialButton>
                            </li>
                        </AppList>
                    </div>
                </SocialContainer>
            </FooterGrid>
        </FooterContainer>
    );
};

export default Footer;
