import { InputLabel, FormControl, Select, MenuItem } from '@mui/material';

const SelectForm = ({ setSearchParams, topic }) => {
  return (
    <div className='card-select'>
      {topic && (
        <p className='select-topic-p'>
          <span className='select-topic-span'>{topic}</span>
        </p>
      )}
      <FormControl variant='standard' sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id='select-autowidth-label'>
          <span className='card-sort'>sort</span>
        </InputLabel>

        <Select
          labelId='select-autowidth-label'
          id='select-autowidth'
          onChange={(e) => {
            const targetValue = { sort_by: e.target.value, order: 'desc' };
            setSearchParams(targetValue);
          }}
          autoWidth
          label='sort'
        >
          <MenuItem value=''>
            <em>none</em>
          </MenuItem>

          <MenuItem value='created_at'>date</MenuItem>
          <MenuItem value='votes'>votes</MenuItem>
          <MenuItem value='comment_count'>comments</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant='standard' sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id='select-standard-label'>
          <span className='card-order'>order</span>
        </InputLabel>

        <Select
          labelId='select-autowidth-label'
          id='select-autowidth'
          onChange={(e) => {
            const targetValue = {
              sort_by: 'created_at',
              order: e.target.value,
            };
            setSearchParams(targetValue);
          }}
          autoWidth
          label='order'
        >
          <MenuItem value=''>
            <em>none</em>
          </MenuItem>
          <MenuItem value='desc'>desc</MenuItem>
          <MenuItem value='asc'>asc</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectForm;
