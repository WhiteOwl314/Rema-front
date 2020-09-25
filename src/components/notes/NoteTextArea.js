import React,{useState} from 'react';

function NoteTextArea({noteContent,onChangeNote}) {

    const [state, setState] = useState({
        rows: 14,
        minRows: 14,
        maxRows: 100,
    });

    console.log(state);

    const onChange = (event) => {
        const textareaLineHeight = 24;
        const { minRows, maxRows } = state;

        const previousRows = event.target.rows;
        event.target.rows = minRows;

        const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

        if (currentRows === previousRows) {
            event.target.rows = currentRows;
        }
        if (currentRows >= maxRows) {
            event.target.rows = maxRows;
            event.target.scrollTop = event.target.scrollHeight;
        }

        setState({
            ...state,
            rows: currentRows < maxRows ? currentRows : maxRows,
        });

        onChangeNote(event);
    };




    return (
        <textarea
            name={'content'}
            rows={state.rows}
            value={
                noteContent === null
                    ? ''
                    : noteContent
            }
            placeholder={'내용...'}
            onChange={onChange}
            style={{
                boxSizing: 'border-box',
                border: 'none',
                resize: 'none',
                overflow: 'auto',
                height: 'auto',
                lineHeight: '24px',
                fontSize: '15px',
                width: '100%',
                outline: 'none',
                marginTop: '20px'
            }}
        />
    );
}

export default NoteTextArea;