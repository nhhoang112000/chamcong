import classNames from 'classnames/bind';
import styles from './Model.module.scss';

const cx = classNames.bind(styles);

function ModelItem({ modelItemImg, modelName, modelPrice }) {
    return (
        <div>
            <img src={modelItemImg} alt="" />
            <label>{modelName}</label>
            <div>
                <label>{modelPrice}</label>
                <button>Add to cart</button>
            </div>
        </div>
    );
}

export default ModelItem;
