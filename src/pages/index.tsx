import React from 'react';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import {
    Button,
    CircularProgress,
    Container,
    Typography,
} from '@material-ui/core';
import {
    FormElementsContainer,
    ProfissionaisContainer,
    ProfissionaisPaper,
} from '@styles/pages/index.styled';
import useIndex from 'data/hooks/pages/useIndex.page';

export default function Home() {
    const {
        cep,
        setCep,
        cepValido,
        buscarProfissionais,
        erro,
        diaristas,
        buscaFeita,
        carregando,
        diaristasRestantes,
    } = useIndex();

    return (
        <div>
            <SafeEnvironment />
            <PageTitle
                title={'Conheça os profissionais'}
                subtitle={
                    'Preencha seu endereço e veja todos os profissionais da sua localidade'
                }
            />

            <Container sx={{ mb: 10 }}>
                <FormElementsContainer>
                    <TextFieldMask
                        label={'Digite seu CEP'}
                        mask={'99.999-999'}
                        variant={'outlined'}
                        value={cep}
                        onChange={(event) => setCep(event.target.value)}
                        fullWidth
                    />

                    {erro && <Typography color={'error'}>{erro}</Typography>}

                    <Button
                        variant={'contained'}
                        color={'secondary'}
                        sx={{ width: '220px' }}
                        disabled={!cepValido || carregando}
                        onClick={() => buscarProfissionais(cep)}
                    >
                        {carregando ? <CircularProgress size={20} /> : 'Buscar'}
                    </Button>
                </FormElementsContainer>

                {buscaFeita &&
                    (diaristas.length > 0 ? (
                        <ProfissionaisPaper>
                            <ProfissionaisContainer>
                                {diaristas.map((item, index) => (
                                    <UserInformation
                                        key={index}
                                        name={item.nome_completo}
                                        rating={item.reputacao}
                                        description={item.cidade}
                                        picture={item.foto_usuario}
                                    />
                                ))}
                            </ProfissionaisContainer>

                            <Container sx={{ textAlign: 'center' }}>
                                {diaristasRestantes > 0 && (
                                    <Typography sx={{ mt: 5 }}>
                                        ...e mais {diaristasRestantes}{' '}
                                        {diaristasRestantes > 1
                                            ? 'profissionais atendem'
                                            : 'profissional atende'}{' '}
                                        ao seu endereço.
                                    </Typography>
                                )}

                                <Button
                                    variant={'contained'}
                                    color={'secondary'}
                                    sx={{ mt: 5 }}
                                >
                                    Contratar um profissional
                                </Button>
                            </Container>
                        </ProfissionaisPaper>
                    ) : (
                        <Typography align={'center'} color={'textPrimary'}>
                            Ainda não temos nenhuma diarista disponível em sua
                            região
                        </Typography>
                    ))}
            </Container>
        </div>
    );
}
