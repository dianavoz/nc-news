import { InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import { useState } from 'react';

const SelectForm = ({ setSearchParams, topic }) => {
  const [sort, setSort] = useState('');
  const [order, setOrder] = useState('');

  return (
    <div className='card-select'>
      {topic && (
        <p className='select-topic-p'>
          <span className='select-topic-span'>{topic}</span>
        </p>
      )}
      <FormControl variant='standard' sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id='sort-label'>
          <span className='card-sort'>sort</span>
        </InputLabel>

        <Select
          labelId='sort-label'
          id='sort-id'
          value={sort}
          onChange={(e) => {
            const targetValue = { sort_by: e.target.value, order: 'desc' };
            setSearchParams(targetValue);
            setSort(e.target.value);
          }}
          autoWidth
          label='sort'
        >
          <MenuItem value='created_at'>date</MenuItem>
          <MenuItem value='votes'>votes</MenuItem>
          <MenuItem value='comment_count'>comments</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant='standard' sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id='order-label'>
          <span className='card-order'>order</span>
        </InputLabel>

        <Select
          labelId='order-label'
          id='order-id'
          value={order}
          onChange={(e) => {
            const targetValue = {
              sort_by: 'created_at',
              order: e.target.value,
            };
            setSearchParams(targetValue);
            setOrder(e.target.value);
          }}
          autoWidth
          label='order'
        >
          <MenuItem value='desc'>desc</MenuItem>
          <MenuItem value='asc'>asc</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectForm;
