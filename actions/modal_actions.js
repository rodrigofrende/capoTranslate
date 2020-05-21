import {
    OPEN_CHORDS_MODAL,
    CLOSE_CHORDS_MODAL
} from './types';

export const openChordsModal =  () => {
    console.log('Modal de acordes abierto')
    return{
        type: OPEN_CHORDS_MODAL,
        payload: true
        // payload true for open , payload false por close
    }
    
};

export const closeChordsModal = () => {
    console.log('Se cierra el modal')
    return {
        type: CLOSE_CHORDS_MODAL,
        payload: false
    }
    
}