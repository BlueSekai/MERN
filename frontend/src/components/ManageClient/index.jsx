import React, { useEffect, useState } from 'react';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';

function ManageClients() {
    
    const [items, setItems] = useState([]);
    const [text, setText] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [userdata, setuserdata] = useState([]);
    useEffect(async () => {
        const response = await axios.get('http://localhost:5000/api/users');
        console.log(response);
    }, []);
    const addItem = () => {
        if (text.trim() !== '') {
            if (editMode) {
                // Update existing item
                // const updatedItems = [...items];
                // updatedItems[editIndex] = text;
                // setItems(updatedItems);
                // setEditMode(false);
                // setEditIndex(null);
            } else {
                // Add new item
                setItems([...items, text]);
            }
            setText('');
        }
    };

    const editItem = (index) => {
        // setText(items[index]);
        // setEditMode(true);
        // setEditIndex(index);
    };

    const deleteItem = (index) => {
        // const updatedItems = [...items];
        // updatedItems.splice(index, 1);
        // setItems(updatedItems);
    };

    return (
        <Container style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '5px' }}>
            <Typography variant="h3" gutterBottom>
                Task Menu
            </Typography>
            <div style={{ marginBottom: '20px', width: '100%' }}>
                <TextField
                    label="Task"
                    variant="outlined"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    fullWidth
                    style={{ marginRight: '10px' }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={addItem}
                    startIcon={<AddIcon />}
                >
                    {editMode ? 'Update' : 'Add'}
                </Button>
            </div>
            <div style={{ width: '100%' }}>
                <List style={{ width: '100%' }}>
                    {items.map((item, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={item} />
                            <ListItemSecondaryAction>
                                <IconButton onClick={() => editItem(index)} edge="end" aria-label="edit">
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={() => deleteItem(index)} edge="end" aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </div>
        </Container>
    );
}

export default ManageClients;