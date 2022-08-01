import React, {useContext} from 'react';
import {Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Card.css';
import Context from '../../../../utils/context';

const checkPrice = (props, context) => {
    if (props.model === 'dress') context.gender.set('female');
    context.model.set(props.model);
    context.type.set(props.type);
    props.isBuy.set(`${props.model}-${props.type}`);
};

const Card = (props) => {
    const context = useContext(Context);
    const navigate = useNavigate();

    const urlImg = require(`../../../../assets/img/${props.model}/${props.model}_${props.index + 1}.png`)
    const styles = {
        width: '350px',
        height: '500px',

        backgroundImage: `url(${urlImg})`,
        backgroundSize: 'cover',
    };

    return (
        <>
            <div className="card-container">
                <div style={styles} />
                {props.isBuy.get !== `${props.model}-${props.type}` ? (
                    <Button
                        variant="text"
                        onClick={() => checkPrice(props, context)}
                    >
                        Узнать цену
                    </Button>
                ) : (
                    <Button
                        variant="text"
                        onClick={() => navigate('/create-order')}
                    >
                        Заказать за {props.price}
                    </Button>
                )}
            </div>
        </>
    );
};

export default Card;
