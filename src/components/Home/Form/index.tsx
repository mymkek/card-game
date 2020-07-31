import React, {useMemo, useState} from 'react';
import {Button, ButtonGroup, TextField} from "@material-ui/core";
import styles from "../../../containers/Home/h.module.sass";
import {useStores} from "../../../stores";


enum signinTypes {
    create = 'create',
    join = 'join',
}


const HomeForm: React.FC = () => {
    const {
        userStore: {
            nick,
            setNick
        }
    } = useStores();

    const [signinType, setSigninType] = useState(signinTypes.create);

    const uid = useMemo(() => +new Date(), []);

    const isCreate = signinType === signinTypes.create;
    const isJoin = signinType === signinTypes.join;



    return (<>
        <TextField required label="Никнейм" value={nick} onChange={e => setNick(e.target.value)}/>
  
        <div className={styles.tabs_content}>
            <ButtonGroup aria-label="outlined primary button group"
                         className={styles.tabs_btn_block}>
                <Button
                    onClick={() => setSigninType(signinTypes.create)}
                    color={isCreate ? "secondary" : "default"}
                >
                    Создать
                </Button>
                <Button
                    onClick={() => setSigninType(signinTypes.join)}
                    color={isJoin ? "secondary" : "default"}
                >
                    Подключиться
                </Button>
            </ButtonGroup>
        </div>

        {isCreate &&
            <div>
                { uid }
                <Button variant="contained">Создать игру</Button>
            </div>
        }

        {isJoin &&
        <div>
            <TextField required label="Идентификатор"/>
            <Button variant="contained">Войти</Button>
        </div>
        }
    </>);
};

export default HomeForm;