import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

const rows: GridRowsProp = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Column 1', width: 350 },
    { field: 'col2', headerName: 'Column 2', width: 550 },
];

function Cart() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('filter')}>
                <div>
                    <label>Search by name</label>
                    <input className={cx('filter-input')} type={'text'} />
                </div>
                <div className={cx('btn-cart')}>
                    <button className={cx('btn')}>Pay</button>
                    <button className={cx('btn')}>Delete</button>
                </div>
            </div>
            <div className={cx('table')}>
                <DataGrid rows={rows} columns={columns} />
            </div>
        </div>
    );
}

export default Cart;
