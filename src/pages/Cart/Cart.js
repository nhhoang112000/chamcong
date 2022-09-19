import { DataGrid, GridRowsProp, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { useState, useCallback } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Cart() {
    const [pageSize, setPageSize] = useState(5);

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 70,
        },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
        {
            field: 'actions',
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
