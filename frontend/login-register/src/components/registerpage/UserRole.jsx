import { useState } from 'react';
import '../../styles/Register.css';
import { TextField, MenuItem } from '@mui/material';
  
function UserRole() {
    const [userRole, setUserRole] = useState('XYZ');

    const roles = [
        {
          value: 'XYZ',
          label: 'XYZ',
        },
        {
          value: 'Centra',
          label: 'Centra',
        },
        {
          value: 'Harbor',
          label: 'Harbor',
        },
      ];

      const centra = [
        {
          value: 'one',
          label: '1',
        },
        {
          value: 'two',
          label: '2',
        },
        {
          value: 'three',
          label: '3',
        },
        {
            value: 'four',
            label: '4',
          },
          {
            value: 'five',
            label: '5',
          },
          {
            value: 'six',
            label: '6',
          },
          {
            value: 'seven',
            label: '7',
          },
          {
            value: 'eight',
            label: '8',
          },
          {
            value: 'nine',
            label: '9',
          },
          {
            value: 'ten',
            label: '10',
          },
          {
            value: 'eleven',
            label: '11',
          },
          {
            value: 'twelve',
            label: '12',
          },
          {
            value: 'thirteen',
            label: '13',
          },
          {
            value: 'fourteen',
            label: '14',
          },
          {
            value: 'fifteen',
            label: '15',
          },
          {
            value: 'sixteen',
            label: '16',
          },
          {
            value: 'seventeen',
            label: '17',
          },
          {
            value: 'eighteen',
            label: '18',
          },
          {
            value: 'nineteen',
            label: '19',
          },
          {
            value: 'twenty',
            label: '20',
          },
          {
            value: 'twenty-one',
            label: '21',
          },
          {
            value: 'twenty-two',
            label: '22',
          },
          {
            value: 'twenty-three',
            label: '23',
          },
          {
            value: 'twenty-four',
            label: '24',
          },
          {
            value: 'twenty-five',
            label: '25',
          },
          {
            value: 'twenty-six',
            label: '26',
          },
          {
            value: 'twenty-seven',
            label: '27',
          },
          {
            value: 'twenty-eight',
            label: '28',
          },
          {
            value: 'twenty-nine',
            label: '29',
          },
          {
            value: 'thirty',
            label: '30',
          },
          {
            value: 'thirty-one',
            label: '31',
          },
          {
            value: 'thirty-two',
            label: '32',
          },
          {
            value: 'thirty-three',
            label: '33',
          },
          {
            value: 'thirty-four',
            label: '34',
          },
          {
            value: 'thirty-five',
            label: '35',
          },
          {
            value: 'thirty-six',
            label: '36',
          },
      ];

      const handleRoleChange = (event) => {
        setUserRole(event.target.value);
    };

    return (
        <div className='userRole'>
          {/* User Roles Drop Down */}
          <TextField
            id="outlined-select-role-user"
            select
            label="User Role"
            value={userRole}
            // defaultValue="XYZ"
            onChange={handleRoleChange}
            sx={{ bgcolor: '#EFEFEF', borderRadius: 10, width: 310, height: 54, color: '#6A6A6A' }}
            InputLabelProps={{
                style: { color: '#6A6A6A', top: "-0.5vh", "&.MuiInputLabelShrink": { top: 0 } } // Default text color
            }}
          >
            {roles.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>


          {/* Centra Number's Drop Down */}
          <TextField
            id="outlined-select-role-centra"
            select
            label="Centra Building"
            defaultValue="one"
            disabled={userRole !== 'Centra'}
            sx={{ bgcolor: '#EFEFEF', borderRadius: 10, width: 310, color: '#6A6A6A' }}
            InputLabelProps={{
                style: { color: '#6A6A6A', top: "-0.5vh", "&.MuiInputLabelShrink": { top: 0 } }
            }}
            // you need to play with it a little bit, 
            // but the key in my example for the label to fit and work good is that the top (before shrink) 
            // in InputLabelProps is (nearly) half the height in the InputProps, and the font size is the other half.

            SelectProps={{
                MenuProps: {
                    slotProps: {
                        paper: {
                            sx: {
                                maxHeight: 150, // Set the max height of the dropdown menu
                            },
                        },
                    },
                },
            }}
          >
            {centra.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          </div>
    )
}

export default UserRole