import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContentSelector() {
    const content = ["Group", "Add Friend", "Announcements", "Support", "Chat"];
  return (
    <Stack direction="row" mx={3} my={1} spacing={2} padding={1}>
        {content.map((item) => (
            <Button variant="outlined">{item}</Button>
        ))}
    </Stack>
  );
}