import * as types from './Types'
import * as pinServices from '../services/pinServices'

export const OpenModalSavePinAction = () => ({
    type: types.openModalSavePinType
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
    const newFolder = await pinServices.saveFolder(folderName);
    dispatch(saveFolderSuccessAction(newFolder));
}