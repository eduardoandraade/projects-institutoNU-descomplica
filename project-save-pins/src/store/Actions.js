import * as types from './Types'
import * as pinServices from '../services/pinServices'

const sleep = (time) => (
    new Promise(resolve => {
        setTimeout(resolve, time)
    })
);

export const OpenModalSavePinAction = (pinId) => ({
    type: types.openModalSavePinType,
    payload: pinId
})

export const OpenModalCreateFolderAction = () => ({
    type: types.openModalCreateFolderType
})

export const CloseModalAction = () => ({
    type: types.closeModalsType
})

export const fetchFoldersInitAction = () => ({
    type: types.fetchFoldersInitType
})

export const fetchFoldersSuccessAction = (folders) => ({
    type: types.fetchFoldersSuccessType,
    payload: folders
})

export const fetchFoldersAction = async (dispatch) => {
    dispatch(fetchFoldersInitAction());
    const folders = await pinServices.getFolders();
    dispatch(fetchFoldersSuccessAction(folders));
}

// -----

export const saveFolderInitAction = () => ({
    type: types.saveFolderInitType
})

export const saveFolderSuccessAction = (folder) => ({
    type: types.saveFolderSuccessType,
    payload: folder
})

export const saveFolderAction = async (dispatch, folderName) => {
    dispatch(saveFolderInitAction());

    // demore 1s para executar a proxima linha
    await sleep(1000);


    const newFolder = await pinServices.saveFolder(folderName);
    dispatch(saveFolderSuccessAction(newFolder));
}


export const savePinInFolderInitAction = () => ({
    type: types.savePinInFolderInitType
})

export const savePinInFolderSuccessAction = (folders) => ({
    type: types.savePinInFolderSuccessType,
    payload: folders, 
})

export const savePinInFolderAction = async (dispatch, pinId, folderId) => {
    dispatch(savePinInFolderInitAction());

    await sleep(11000);

    await pinServices.savePinInFolder(folderId, pinId)
    const folders = await pinServices.getFolders();
    dispatch(savePinInFolderSuccessAction(folders))
    
}

