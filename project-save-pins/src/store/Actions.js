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

export const saveFolderAction = async (dispatch, folderName, pinId) => {
    dispatch(saveFolderInitAction());
    await sleep(1000);
    const newFolder = await pinServices.saveFolder(folderName);
    const folder = await pinServices.savePinInFolder(newFolder.id, pinId)
    dispatch(saveFolderSuccessAction(folder));
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

    await sleep(1000);

    await pinServices.savePinInFolder(folderId, pinId)
    const folders = await pinServices.getFolders();
    dispatch(savePinInFolderSuccessAction(folders))
}

export const fetchPinsInitAction = () => ({
    type: types.fetchPinsInitType
})

export const fetchPinsSuccessAction = (pinsData) => ({
    type: types.fetchPinsSuccessType,
    payload: pinsData
})

export const fetchPinsAction = async (dispatch) => {
    dispatch(fetchPinsInitAction());
    const pinsData = await pinServices.getPins();
    console.log('pinsData', pinsData)
    dispatch(fetchPinsSuccessAction(pinsData));
}

