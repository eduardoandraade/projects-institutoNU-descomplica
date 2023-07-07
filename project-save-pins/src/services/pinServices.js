
function generateUniqueId() {
    const timestamp = Date.now().toString(36); // Converta o timestamp atual para uma string em base 36
    const randomString = Math.random().toString(36).substr(2, 5); // Gere uma string aleatória em base 36
  
    return `${timestamp}-${randomString}`;
}

const saveFolders = async (folders) => {
  localStorage.setItem('folders', JSON.stringify(folders));
}

export const getFolders = async () => {
    const storedData = localStorage.getItem('folders');
  if (typeof storedData === 'string') {
    try {
      return JSON.parse(storedData);
    } catch (error) {
      console.error('Erro ao fazer o parse do JSON:', error);
    }
  }
  return [];
}

export const saveFolder = async (folderName) => {
    /*  
        1 - Pegar lista/array de pastas > getFolders()
        2 - Adicionar a pasta dentro do array
        3 - Salvar novamente no localStorage    
    */

        const folders = await getFolders();

        const newFolder = {
            id: generateUniqueId(),
            name: folderName,
            pins: []
        };

        folders.push(newFolder);

        await saveFolders(folders);

        return newFolder;
}

export const savePinInFolder = async (folderId, pinId) => {
  /*
    1 - Listar coleção/array de pasta do Storage
    2 - Encontrar a pasta que queremos adicionar pin
    3 - Adicionar o pinId na pasta
    4 - Salvar patas no Storage novamente
  */

    const folders = await getFolders();

    const folderIndex = folders.findIndex(function(folder) {
      return folder.id === folderId;
    }) 

    if (folderIndex !== -1) {
      folders[folderIndex].pins.push(pinId);
    }

    await saveFolders(folders);

    return {...folders[folderIndex]}
}

export const getPins = async () => {
  return [
    {
      id: '123',
      title: 'Design',
      image: 'https://i.pinimg.com/564x/f5/0b/e3/f50be3e44828d8856057fc163a4c1152.jpg',
      quantity: 0
    },
    {
      id: '133',
      title: 'Branding',
      image: 'https://i.pinimg.com/564x/aa/6f/d1/aa6fd19deafd7db051a6a77d81e1a4fe.jpg',
      quantity: 0
    },
    {
      id: '134',
      title: 'Minimalist',
      image: 'https://i.pinimg.com/564x/4a/1f/a0/4a1fa03129db75a667b0e1c2f9ccd349.jpg',
      quantity: 0
    },
  ]
}