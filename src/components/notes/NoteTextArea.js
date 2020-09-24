import React,{useState} from 'react';

function NoteTextArea() {

    const [state, setState] = useState({
        value: '',
        rows: 5,
        minRows: 5,
        maxRows: 10,
    });

    console.log(state);

    const onChange = (event) => {
        const textareaLineHeight = 24;
        const { minRows, maxRows } = state;

        console.log(minRows);
        console.log(maxRows);

        const previousRows = event.target.rows;
        console.log(previousRows);
        event.target.rows = minRows;

        const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
        console.log(currentRows);

        if (currentRows === previousRows) {
            event.target.rows = currentRows;
        }
        if (currentRows >= maxRows) {
            event.target.rows = maxRows;
            event.target.scrollTop = event.target.scrollHeight;
        }

        setState({
            ...state,
            value: event.target.value,
            rows: currentRows < maxRows ? currentRows : maxRows,
        });
    };



    return (
        <textarea
            rows={state.rows}
            value={state.value}
            placeholder={'Enter your text here...'}
            className={'textarea'}
            onChange={onChange}
            style={{
                boxSizing: 'border-box',
                border: 'none',
                resize: 'none',
                overflow: 'auto',
                height: 'auto',
                lineHeight: '24px',
                fontSize: '20px'
            }}
        />
    );
}

export default NoteTextArea;