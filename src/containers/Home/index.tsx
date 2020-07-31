import React from 'react';
import {Container} from "@material-ui/core";

import HomeForm from "../../components/Home/Form";

import styles from './h.module.sass';
import {observer} from "mobx-react";


const HomeContainer: React.FC = () => {

    return (
        <div className={styles.wrapper}>
            <Container maxWidth="sm">
                <div className={styles.content}>
                    <h1 className="text-center">Войти</h1>
                    <HomeForm/>
                </div>
            </Container>
        </div>
    );
};

export default observer(HomeContainer);