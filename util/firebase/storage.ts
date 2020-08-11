import { storage, auth } from 'firebase';
import { SERVICE_NAME } from '../../data/services/data';
import { objType } from '../../constants/firebase/storage';


function generateUserServiceRef(service: SERVICE_NAME, objType: objType) {
  const storageRef = storage().ref();
  const user = auth().currentUser;
  if (user) return storageRef
    .child(user.uid)
    .child(service)
    .child(objType);

  throw new Error('User is not authenticated');
}

function generateImageName(objType: objType) {
  return `${objType}_${Date.now()}`
}

async function uploadBase64Img(blob: Blob, ref: storage.Reference) {
  try {
    await ref.put(blob);
  } catch (err) {
    throw err;
  }
}

export async function uploadUserServiceImage(service: SERVICE_NAME, objType: objType, uri: string) {
  const imageName = generateImageName(objType);
  const imageRef = generateUserServiceRef(service, objType).child(imageName);
  const blob = getBlobFromUri(uri);
  try {
    return await uploadBase64Img(blob, imageRef);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getBlobFromUri(uri: string) {
  const response = await fetch(uri);
  const blob = await response.blob();
  return blob;
}