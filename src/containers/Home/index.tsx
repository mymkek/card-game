import React from 'react';
import styles from './h.module.sass';
import {Button, TextField, Container, ButtonGroup} from '@material-ui/core';

const HomeContainer: React.FC = () => {

    return (
        <div className={styles.wrapper}>
            <Container maxWidth="sm">
                <div className={styles.content}>
                    <h1 className="text-center">Войти</h1>
                    <TextField required label="Никнейм"/>
                    <div className={styles.tabs_content}>
                        <ButtonGroup aria-label="outlined primary button group"
                                     className={styles.tabs_btn_block}>
                            <Button>Создать</Button>
                            <Button>подключиться</Button>
                        </ButtonGroup>
                    </div>
                    {/*<TextField required label="Идентификатор"/>*/}
                </div>
            </Container>
        </div>
    );
};

export default HomeContainer;