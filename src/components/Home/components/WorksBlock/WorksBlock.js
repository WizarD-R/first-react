import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './WorksBlock.css';
import Context from '../../../../utils/context';
import { MODELS } from '../../../../utils/constants';

const setAttribute = entries => entries.set;

const WorksBlock = () => {
    const { model } = useContext(Context);

    const className = (id, currentValue) => id === currentValue ? 'works-block-btn active' : 'works-block-btn';

    const arrowAction = ({isRight}) => {
        const currentIndexModel = MODELS.indexOf(MODELS.find(el => el.id === model.get));
        if (isRight) {
            if (MODELS.length === (currentIndexModel + 1)) {
                model.set(MODELS[0].id);
                return;
            }
            model.set(MODELS[currentIndexModel + 1].id);
            return;
        }

        if (currentIndexModel === 0) {
            model.set(MODELS.at(-1).id);
            return;
        }
        model.set(MODELS[currentIndexModel - 1].id);
    };

    return (
        <>
            <div id="WorksBlock" className="works-block-container">
                <div className="works-block-title">
                    Выберите пошив
                </div>
                <div className="works-block-stage-1">
                    <div className="works-block-arrow" onClick={() => arrowAction({isRight: false})} />
                    {MODELS.map(({name, id}) => (
                            <button
                                key={id}
                                className={className(id, model.get)}
                                onClick={() => setAttribute(model)(id)}
                            >
                                {name}
                            </button>
                    ))}
                    <div className="works-block-arrow works-block-arrow-revert" onClick={() => arrowAction({isRight: true})}/>
                </div>
                <Link to="/catalog" className="works-block-link-order">Сделать заказ</Link>
            </div>
        </>
    );
};

export default WorksBlock;
