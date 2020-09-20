import React, {useEffect} from 'react';
import NotesContainer from "../../containers/notes/NotesContainer";

function NotesPage() {

    useEffect(() => {
        document.title = "REMA | NOTES";
    }, []);

    return(
        <NotesContainer/>
    );
}

export default NotesPage;