import React, {ChangeEvent, KeyboardEvent, useState} from 'react';


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<boolean>(false)

    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError(true);
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(false);
        if (e.charCode === 13) {
            addItem();
        }
    }

    return <div style={{display: 'flex', alignItems: 'flex-start'}}>
        <TextField value={title} variant="outlined"
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
                   error={!!error}
                   helperText={error ? 'Title is required' : undefined}
                   title={'type here'}
                   label={'type value'}
                   defaultChecked

        />
        <Button sx={{mt: '8px'}} onClick={addItem}><AddCircleIcon/></Button>

    </div>
}
