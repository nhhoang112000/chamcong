import { DataGrid, GridRowsProp, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { useState, useCallback } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Cart() {
    const [pageSize, setPageSize] = useState(5);

    const rows = [
        { id: 1, color: 'black', modelName: 'Jon', price: 35 },
        { id: 2, color: 'red', modelName: 'Cersei', price: 42 },
        { id: 3, color: 'yellow', modelName: 'Jaime', price: 45 },
        { id: 4, color: 'white', modelName: 'Arya', price: 16 },
        { id: 5, color: 'green', modelName: 'Daenerys', price: null },
        { id: 6, color: 'blue', modelName: null, price: 150 },
        { id: 7, color: 'orange', modelName: 'Ferrara', price: 44 },
        { id: 8, color: 'grey', modelName: 'Rossini', price: 36 },
        { id: 9, color: 'silver', modelName: 'Harvey', price: 65 },
    ];
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 120,
        },
        { field: 'modelName', headerName: 'Model name', width: 250 },
        { field: 'color', headerName: 'Color', width: 250 },
        {
            field: 'price',
            headerName: 'Price',
            type: 'number',
            width: 250,
        },
        {
            field: 'address',
            headerName: 'Address',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) => `${params.row.modelName || ''} ${params.row.color || ''}`,
        },
        {
            field: 'time',
            headerName: 'Time',
            type: 'datetime',
            width: 300,
            valueGetter: () => `${Date().toLocaleString()}`,
        },
        {
            field: 'edit',
            type: 'actions',
            getActions: (params) => [<GridActionsCellItem icon={<EditIcon />} label="Edit" />],
        },
        {
            field: 'delete',
            type: 'actions',
            getActions: (params) => [<GridActionsCellItem icon={<DeleteIcon />} label="Delete" />],
        },

    ];

    // const deleteUser = useCallback(
    //     (id) => () => {
    //         alert(id);
    //         // setTimeout(() => {
    //         //     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    //         // });
    //     },
    //     [],
    // );

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
                <DataGrid
                    rows={rows}
                    columns={columns}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    checkboxSelection
                    pagination
                    pageSize={pageSize}
                    rowsPerPageOptions={[2, 3, 5, 10]}
                    sx={{
                        '&  .MuiDataGrid-main': {
                            fontSize: '14px',
                            fontFamily: '"ProximaNova", sans-serif',
                        },
                        '&  .MuiTablePagination-selectLabel': {
                            fontSize: '13px',
                            fontFamily: '"ProximaNova", sans-serif',
                        },
                        '& .MuiSelect-select': {
                            paddingTop: '13px',
                            fontSize: '13px',
                            fontFamily: '"ProximaNova", sans-serif',
                        },
                        '&  .MuiTablePagination-displayedRows': {
                            fontSize: '13px',
                            fontFamily: '"ProximaNova", sans-serif',
                        },
                    }}
                />
            </div>
        </div>
    );
}

export default Cart;
