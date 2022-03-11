import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SelectDropdown() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item></Item>
        </Grid>
        <Grid item xs={6}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

// import React from 'react';
// import { Box, FormControl, InputLabel, NativeSelect } from '@mui/material';

// export default function SelectDropdown() {
//   return (
//     <Box className='hero' sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>
//         <InputLabel variant='outlined' htmlFor='uncontrolled-native'>
//           Rating
//         </InputLabel>
//         <NativeSelect
//           defaultValue={1}
//           inputProps={{
//             name: 'Rating',
//             id: 'uncontrolled-native',
//           }}
//         >
//           <option value={1}>1</option>
//           <option value={2}>2</option>
//           <option value={3}>3</option>
//           <option value={4}>4</option>
//           <option value={5}>5</option>
//           <option value={6}>6</option>
//           <option value={7}>7</option>
//           <option value={8}>8</option>
//           <option value={9}>9</option>
//           <option value={10}>10</option>
//         </NativeSelect>
//       </FormControl>
//     </Box>
//   );
// }
